import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HowCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const sec = document.getElementById("how");
    const canvas = ref.current;
    const W = sec.offsetWidth, H = Math.max(sec.offsetHeight, 700);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    renderer.setSize(W, H);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W/H, 0.1, 500);
    camera.position.z = 28;

    const layers = [[0],[1,2,3],[4,5,6,7],[8,9,10],[11]];
    const nodePos = [];
    const nodeMeshes = [];
    const cols = [0x00E5FF,0x7C3AED,0xA78BFA,0x00B8D4,0x00E5FF];
    layers.forEach((layer,li) => {
      const x=(li-2)*5;
      layer.forEach((id,ni) => {
        const y=(ni-(layer.length-1)/2)*3.2;
        nodePos[id]={x,y,z:0};
        const m=new THREE.Mesh(new THREE.SphereGeometry(.3,12,12),new THREE.MeshBasicMaterial({color:cols[li],transparent:true,opacity:.7}));
        m.position.set(x,y,-5); scene.add(m); nodeMeshes.push(m);
      });
    });

    const edges=[];
    [[0,1],[0,2],[0,3],[1,4],[1,5],[2,4],[2,5],[2,6],[3,5],[3,6],[3,7],[4,8],[4,9],[5,8],[5,9],[5,10],[6,9],[6,10],[7,10],[8,11],[9,11],[10,11]].forEach(([a,b])=>{
      const pa=nodePos[a],pb=nodePos[b];
      if(!pa||!pb) return;
      const m=new THREE.LineBasicMaterial({color:0x00E5FF,transparent:true,opacity:.08});
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(pa.x,pa.y,-5),new THREE.Vector3(pb.x,pb.y,-5)]),m));
      edges.push(m);
    });

    const bGeo=new THREE.BufferGeometry();
    const bPos=new Float32Array(900*3);
    for(let i=0;i<900;i++){bPos[i*3]=(Math.random()-.5)*70;bPos[i*3+1]=(Math.random()-.5)*50;bPos[i*3+2]=(Math.random()-.5)*20-10;}
    bGeo.setAttribute("position",new THREE.BufferAttribute(bPos,3));
    scene.add(new THREE.Points(bGeo,new THREE.PointsMaterial({size:.12,color:0x00E5FF,transparent:true,opacity:.28})));

    let t=0,raf;
    function animate(){
      raf=requestAnimationFrame(animate); t+=.008;
      nodeMeshes.forEach((m,i)=>{ m.material.opacity=.5+Math.sin(t*1.5+i*.8)*.25; m.scale.setScalar(1+Math.sin(t*2+i)*.1); });
      edges.forEach((e,i)=>{ e.opacity=.04+Math.sin(t*1.2+i*.5)*.06; });
      scene.rotation.y=Math.sin(t*.3)*.15;
      renderer.render(scene,camera);
    }
    animate();
    return()=>{ cancelAnimationFrame(raf); renderer.dispose(); };
  }, []);
  return <canvas ref={ref} id="how-canvas" />;
}
