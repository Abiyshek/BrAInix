import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createStudioEnv, ENV_TONES } from './env';

/**
 * Full-viewport ambient WebGL layer that sits behind the whole page.
 *
 * Contents: a drifting particle cloud, a set of slowly tumbling wireframe
 * polyhedra and a soft pair of light-driven glass blobs. Colours lerp when the
 * site mode changes, so flipping the switch visibly re-tints the scene.
 */
const PALETTE = {
  services: { a: '#6d28d9', b: '#a78bfa', c: '#8b5cf6' },
  edu: { a: '#7c3aed', b: '#c026d3', c: '#a855f7' },
};

export default function Backdrop({ mode = 'services' }) {
  const hostRef = useRef(null);
  const modeRef = useRef(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
    } catch {
      return undefined; // no WebGL — the CSS gradients alone still look fine
    }

    const scene = new THREE.Scene();
    const env = createStudioEnv(renderer);
    scene.environment = env.texture;
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 120);
    camera.position.set(0, 0, 26);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const disposables = [];
    const track = (obj) => { disposables.push(obj); return obj; };

    /* ---------------- particle cloud ---------------- */
    const COUNT = window.innerWidth < 700 ? 900 : 1800;
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i += 1) {
      const r = 10 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.62;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.5 - 6;
      seeds[i] = Math.random() * Math.PI * 2;
    }
    const cloudGeo = track(new THREE.BufferGeometry());
    cloudGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const cloudMat = track(
      new THREE.PointsMaterial({
        size: 0.13,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    const cloud = new THREE.Points(cloudGeo, cloudMat);
    scene.add(cloud);

    /* ---------------- wireframe solids ---------------- */
    const solidDefs = [
      { geo: new THREE.IcosahedronGeometry(3.4, 1), pos: [-11, 5, -8], speed: 0.14 },
      { geo: new THREE.OctahedronGeometry(2.6, 0), pos: [12, -4, -6], speed: -0.19 },
      { geo: new THREE.TorusGeometry(2.4, 0.5, 10, 42), pos: [9, 7, -12], speed: 0.11 },
      { geo: new THREE.DodecahedronGeometry(2.1, 0), pos: [-9, -7, -10], speed: -0.16 },
    ];
    const solids = solidDefs.map(({ geo, pos, speed }) => {
      track(geo);
      const mat = track(
        new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.22 }),
      );
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.userData.speed = speed;
      scene.add(mesh);
      return mesh;
    });

    /* ---------------- glass blobs ---------------- */
    const blobGeo = track(new THREE.SphereGeometry(2.8, 36, 24));
    const blobs = [
      { pos: [-6, -2, 4], scale: 1 },
      { pos: [7, 3, 2], scale: 0.7 },
    ].map(({ pos, scale }) => {
      const mat = track(
        new THREE.MeshPhysicalMaterial({
          roughness: 0.12,
          metalness: 0,
          transmission: 1,
          thickness: 2.2,
          ior: 1.42,
          envMapIntensity: 1.6,
          iridescence: 0.8,
          attenuationDistance: 1.4,
          transparent: true,
          opacity: 0.42,
          clearcoat: 1,
          clearcoatRoughness: 0.15,
        }),
      );
      const mesh = new THREE.Mesh(blobGeo, mat);
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      return mesh;
    });

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
    keyLight.position.set(6, 9, 12);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xa78bfa, 22, 60);
    rimLight.position.set(-9, -5, 8);
    scene.add(rimLight);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));

    /* ---------------- colour state ---------------- */
    const current = {
      a: new THREE.Color(PALETTE.services.a),
      b: new THREE.Color(PALETTE.services.b),
      c: new THREE.Color(PALETTE.services.c),
    };
    const applyColours = () => {
      cloudMat.color.copy(current.b);
      solids.forEach((m, i) => m.material.color.copy(i % 2 ? current.c : current.a));
      blobs.forEach((m, i) => {
        m.material.color.set('#ffffff');
        m.material.attenuationColor.copy(i % 2 ? current.b : current.c);
      });
      rimLight.color.copy(current.b);
    };
    applyColours();

    /* ---------------- interaction ---------------- */
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    let scrollY = window.scrollY;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    /* ---------------- loop ---------------- */
    const clock = new THREE.Clock();
    let raf = 0;
    let envMode = 'services';
    let visible = !document.hidden;
    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) clock.getDelta(); // swallow the gap
    };
    document.addEventListener('visibilitychange', onVisibility);

    const FRAME = 1 / 30; // ambient layer runs at half rate
    let accum = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;

      const delta = clock.getDelta();
      accum += delta;
      if (accum < FRAME) return;
      const dt = Math.min(accum, 0.05);
      accum = 0;
      const t = clock.elapsedTime;

      // ease palette toward the active mode
      const target = PALETTE[modeRef.current] || PALETTE.services;
      let changed = false;
      ['a', 'b', 'c'].forEach((k) => {
        const want = new THREE.Color(target[k]);
        if (current[k].getHex() !== want.getHex()) {
          current[k].lerp(want, Math.min(dt * 2.4, 1));
          changed = true;
        }
      });
      if (changed) applyColours();
      if (envMode !== modeRef.current) {
        envMode = modeRef.current;
        env.paint(ENV_TONES[envMode] || ENV_TONES.services);
      }

      if (!reduced) {
        pointer.x += (pointer.tx - pointer.x) * 0.045;
        pointer.y += (pointer.ty - pointer.y) * 0.045;

        cloud.rotation.y = t * 0.035 + pointer.x * 0.28;
        cloud.rotation.x = Math.sin(t * 0.14) * 0.09 + pointer.y * 0.16;

        solids.forEach((m, i) => {
          m.rotation.x += dt * m.userData.speed * 0.6;
          m.rotation.y += dt * m.userData.speed;
          m.position.y += Math.sin(t * 0.55 + i * 1.7) * dt * 0.42;
        });

        blobs.forEach((m, i) => {
          m.position.y += Math.sin(t * 0.7 + i * 2.1) * dt * 0.5;
          m.rotation.y += dt * 0.12;
        });

        camera.position.x += (pointer.x * 2.4 - camera.position.x) * 0.05;
        camera.position.y += (-pointer.y * 1.8 - scrollY * 0.0022 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      env.dispose();
      disposables.forEach((d) => d.dispose && d.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-layer" ref={hostRef} aria-hidden="true" />;
}
