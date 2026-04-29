import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 32;

    // Particles
    const COUNT = 4200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);
    const pal = [new THREE.Color(0x00E5FF), new THREE.Color(0x7C3AED), new THREE.Color(0xA78BFA), new THREE.Color(0xF59E0B), new THREE.Color(0xffffff)];
    for (let i = 0; i < COUNT; i++) {
      pos[i*3]=(Math.random()-.5)*120; pos[i*3+1]=(Math.random()-.5)*80; pos[i*3+2]=(Math.random()-.5)*60;
      vel[i*3]=(Math.random()-.5)*.005; vel[i*3+1]=(Math.random()-.5)*.005; vel[i*3+2]=0;
      const c=pal[Math.floor(Math.random()*pal.length)];
      col[i*3]=c.r*.6; col[i*3+1]=c.g*.6; col[i*3+2]=c.b*.6;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pMat = new THREE.PointsMaterial({ size:.22, vertexColors:true, transparent:true, opacity:.75, sizeAttenuation:true });
    const pts = new THREE.Points(geo, pMat);
    scene.add(pts);

    // Rings
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(6,.04,8,80), new THREE.MeshBasicMaterial({color:0x00E5FF,transparent:true,opacity:.08}));
    ring1.position.z=5; scene.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(9,.03,8,80), new THREE.MeshBasicMaterial({color:0x7C3AED,transparent:true,opacity:.05}));
    ring2.position.z=5; scene.add(ring2);

    // Wireframe shapes
    const shapes = [];
    const shapeData = [
      {G:new THREE.OctahedronGeometry(1.4,0), c:0x00E5FF, o:.18, p:[-13,4,4], s:.003},
      {G:new THREE.TetrahedronGeometry(1.1,0), c:0x7C3AED, o:.14, p:[14,-3,2], s:.005},
      {G:new THREE.IcosahedronGeometry(1.0,0), c:0x00B8D4, o:.12, p:[5,9,-1], s:.004},
      {G:new THREE.OctahedronGeometry(.9,0), c:0xA78BFA, o:.1, p:[-9,-7,-3], s:.006},
      {G:new THREE.IcosahedronGeometry(.7,0), c:0xF59E0B, o:.09, p:[11,5,-6], s:.003},
      {G:new THREE.TetrahedronGeometry(1.5,0), c:0x00E5FF, o:.07, p:[-4,11,2], s:.002},
      {G:new THREE.OctahedronGeometry(.6,0), c:0xA78BFA, o:.08, p:[18,1,0], s:.007},
    ];
    shapeData.forEach(d => {
      const m = new THREE.Mesh(d.G, new THREE.MeshBasicMaterial({color:d.c,wireframe:true,transparent:true,opacity:d.o}));
      m.position.set(...d.p); m.userData={s:d.s,off:Math.random()*Math.PI*2,base:d.p.slice()};
      scene.add(m); shapes.push(m);
    });

    // Helix
    const hpts1=[], hpts2=[];
    for(let i=0;i<200;i++){
      const t=i/200*Math.PI*8;
      hpts1.push(new THREE.Vector3(Math.cos(t)*3+20,i*.1-10,Math.sin(t)*3-5));
      hpts2.push(new THREE.Vector3(Math.cos(t+Math.PI)*3+20,i*.1-10,Math.sin(t+Math.PI)*3-5));
    }
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hpts1), new THREE.LineBasicMaterial({color:0x00E5FF,transparent:true,opacity:.13})));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hpts2), new THREE.LineBasicMaterial({color:0x7C3AED,transparent:true,opacity:.1})));

    // Constellation
    for(let i=0;i<28;i++){
      const a=new THREE.Vector3((Math.random()-.5)*70,(Math.random()-.5)*50,(Math.random()-.5)*20);
      const b=new THREE.Vector3((Math.random()-.5)*70,(Math.random()-.5)*50,(Math.random()-.5)*20);
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a,b]), new THREE.LineBasicMaterial({color:0x00E5FF,transparent:true,opacity:.035})));
    }

    let mox=0, moy=0;
    const onMove = e => { mox=(e.clientX/innerWidth-.5)*2; moy=-(e.clientY/innerHeight-.5)*2; };
    window.addEventListener("mousemove", onMove);

    let t=0, raf;
    function animate(){
      raf=requestAnimationFrame(animate); t+=.005;
      const pa=geo.attributes.position.array;
      for(let i=0;i<COUNT;i++){
        pa[i*3]+=vel[i*3]; pa[i*3+1]+=vel[i*3+1];
        if(Math.abs(pa[i*3])>60) vel[i*3]*=-1;
        if(Math.abs(pa[i*3+1])>40) vel[i*3+1]*=-1;
      }
      geo.attributes.position.needsUpdate=true;
      pts.rotation.y=t*.03+mox*.06; pts.rotation.x=moy*.04;
      const rs=1+Math.sin(t*1.2)*.04;
      ring1.scale.set(rs,rs,1); ring2.scale.set(1+Math.sin(t*.8+1)*.05,1+Math.sin(t*.8+1)*.05,1);
      ring1.rotation.z=t*.2; ring2.rotation.z=-t*.15;
      ring1.material.opacity=.05+Math.sin(t)*.04; ring2.material.opacity=.03+Math.sin(t*.7)*.03;
      camera.position.x+=(mox*4-camera.position.x)*.04;
      camera.position.y+=(moy*2.5-camera.position.y)*.04;
      shapes.forEach(s=>{
        s.rotation.x+=s.userData.s; s.rotation.y+=s.userData.s*1.4;
        s.position.y=s.userData.base[1]+Math.sin(t*.9+s.userData.off)*.8;
        s.position.x=s.userData.base[0]+Math.cos(t*.5+s.userData.off)*.3;
      });
      renderer.render(scene,camera);
    }
    animate();

    const onResize=()=>{ renderer.setSize(innerWidth,innerHeight); camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); };
    window.addEventListener("resize",onResize);
    return()=>{ cancelAnimationFrame(raf); window.removeEventListener("mousemove",onMove); window.removeEventListener("resize",onResize); renderer.dispose(); };
  }, []);
  return <canvas ref={ref} id="hero-canvas" />;
}
