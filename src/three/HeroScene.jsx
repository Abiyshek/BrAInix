import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createStudioEnv, ENV_TONES } from './env';

/**
 * The hero centrepiece: a glass core wrapped in a rotating wireframe shell,
 * circled by an orbit ring and a handful of satellite nodes.
 *
 * services mode -> icosahedral "architecture" core
 * edu mode      -> torus-knot "neural" core
 * The shell geometry swaps and the whole rig re-tints when the mode changes.
 */
const PALETTE = {
  services: { core: '#8b5cf6', shell: '#6d28d9', node: '#c4b5fd', light: '#a78bfa' },
  edu: { core: '#c026d3', shell: '#7c3aed', node: '#f0abfc', light: '#d946ef' },
};

export default function HeroScene({ mode = 'services' }) {
  const hostRef = useRef(null);
  const apiRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return undefined;
    }

    const scene = new THREE.Scene();
    const env = createStudioEnv(renderer);
    scene.environment = env.texture;
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 13);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    host.appendChild(renderer.domElement);

    const disposables = [];
    const track = (o) => { disposables.push(o); return o; };

    const rig = new THREE.Group();
    scene.add(rig);

    /* ---------------- glass core ---------------- */
    const coreGeos = {
      services: track(new THREE.IcosahedronGeometry(2.5, 3)),
      edu: track(new THREE.TorusKnotGeometry(1.75, 0.62, 160, 28)),
    };
    const coreMat = track(
      new THREE.MeshPhysicalMaterial({
        roughness: 0.05,
        metalness: 0,
        transmission: 0.88,
        thickness: 2.6,
        ior: 1.5,
        envMapIntensity: 2.2,
        attenuationDistance: 1.1,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        transparent: true,
        opacity: 1,
        iridescence: 1,
        iridescenceIOR: 1.8,
        iridescenceThicknessRange: [120, 520],
        specularIntensity: 1,
      }),
    );
    const core = new THREE.Mesh(coreGeos.services, coreMat);
    rig.add(core);

    const heartGeo = track(new THREE.IcosahedronGeometry(1.15, 2));
    const heartMat = track(
      new THREE.MeshStandardMaterial({
        roughness: 0.22,
        metalness: 0.45,
        envMapIntensity: 1.4,
        emissiveIntensity: 0.45,
      }),
    );
    const heart = new THREE.Mesh(heartGeo, heartMat);
    rig.add(heart);

    /* ---------------- wireframe shell ---------------- */
    const shellGeos = {
      services: track(new THREE.IcosahedronGeometry(3.7, 1)),
      edu: track(new THREE.IcosahedronGeometry(3.7, 2)),
    };
    const shellMat = track(
      new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.3 }),
    );
    const shell = new THREE.Mesh(shellGeos.services, shellMat);
    rig.add(shell);

    /* ---------------- orbit rings ---------------- */
    const ringGeo = track(new THREE.TorusGeometry(4.5, 0.018, 8, 140));
    const ringMat = track(new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.5 }));
    const rings = [
      { rot: [Math.PI / 2.1, 0, 0.3], scale: 1 },
      { rot: [Math.PI / 2.6, 0.7, -0.4], scale: 1.16 },
    ].map(({ rot, scale }) => {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.set(...rot);
      ring.scale.setScalar(scale);
      rig.add(ring);
      return ring;
    });

    /* ---------------- satellite nodes ---------------- */
    const nodeGeo = track(new THREE.SphereGeometry(0.15, 18, 14));
    const nodeMat = track(new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95 }));
    const nodes = Array.from({ length: 9 }, (_, i) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.userData = {
        radius: 4.5 + (i % 3) * 0.55,
        speed: 0.22 + (i % 4) * 0.07,
        phase: (i / 9) * Math.PI * 2,
        tilt: (i % 3) * 0.5 - 0.5,
      };
      rig.add(node);
      return node;
    });

    /* ---------------- halo sprite ---------------- */
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = haloCanvas.height = 256;
    const hctx = haloCanvas.getContext('2d');
    const grad = hctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(255,255,255,0.95)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.28)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    hctx.fillStyle = grad;
    hctx.fillRect(0, 0, 256, 256);
    const haloTex = track(new THREE.CanvasTexture(haloCanvas));
    const haloGeo = track(new THREE.PlaneGeometry(13, 13));
    const haloMat = track(
      new THREE.MeshBasicMaterial({
        map: haloTex,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.position.z = -5;
    rig.add(halo);

    /* ---------------- lights ---------------- */
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const key = new THREE.DirectionalLight(0xffffff, 3);
    key.position.set(5, 6, 8);
    scene.add(key);
    const accent = new THREE.PointLight(0x8b5cf6, 40, 40);
    accent.position.set(-5, -3, 5);
    scene.add(accent);
    const back = new THREE.PointLight(0xffffff, 18, 40);
    back.position.set(0, 4, -8);
    scene.add(back);

    const colours = {
      core: new THREE.Color(PALETTE.services.core),
      shell: new THREE.Color(PALETTE.services.shell),
      node: new THREE.Color(PALETTE.services.node),
      light: new THREE.Color(PALETTE.services.light),
    };
    const paint = () => {
      coreMat.color.set('#ffffff');
      coreMat.attenuationColor.copy(colours.core);
      heartMat.color.copy(colours.shell);
      heartMat.emissive.copy(colours.core);
      shellMat.color.copy(colours.shell);
      ringMat.color.copy(colours.node);
      nodeMat.color.copy(colours.node);
      haloMat.color.copy(colours.light);
      accent.color.copy(colours.light);
    };
    paint();

    /* ---------------- interaction ---------------- */
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e) => {
      const r = host.getBoundingClientRect();
      pointer.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      pointer.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    /* ---------------- mode swap api ---------------- */
    let currentMode = 'services';
    let burst = 0;
    apiRef.current = (next) => {
      if (!PALETTE[next] || next === currentMode) return;
      currentMode = next;
      core.geometry = coreGeos[next];
      env.paint(ENV_TONES[next]);
      shell.geometry = shellGeos[next];
      burst = 1;
    };

    /* ---------------- loop ---------------- */
    const clock = new THREE.Clock();
    let raf = 0;
    let onScreen = true;
    const io = new IntersectionObserver(
      ([entry]) => { onScreen = entry.isIntersecting; },
      { threshold: 0 },
    );
    io.observe(host);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!onScreen || document.hidden) return;

      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;
      const target = PALETTE[currentMode];

      let shifting = false;
      Object.keys(colours).forEach((k) => {
        const want = new THREE.Color(target[k]);
        if (colours[k].getHex() !== want.getHex()) {
          colours[k].lerp(want, Math.min(dt * 3, 1));
          shifting = true;
        }
      });
      if (shifting) paint();

      if (burst > 0) burst = Math.max(0, burst - dt * 1.6);
      const pop = 1 + burst * 0.16;

      if (!reduced) {
        pointer.x += (pointer.tx - pointer.x) * 0.06;
        pointer.y += (pointer.ty - pointer.y) * 0.06;

        core.rotation.y += dt * 0.34;
        core.rotation.x += dt * 0.12;
        core.scale.setScalar(pop * (1 + Math.sin(t * 1.3) * 0.02));

        heart.rotation.y -= dt * 0.5;
        heart.rotation.x += dt * 0.2;
        heart.scale.setScalar(pop * (1 + Math.sin(t * 1.8) * 0.05));

        shell.rotation.y -= dt * 0.16;
        shell.rotation.z += dt * 0.06;
        shell.scale.setScalar(pop);

        rings.forEach((ring, i) => {
          ring.rotation.z += dt * (i ? -0.22 : 0.3);
        });

        nodes.forEach((node) => {
          const { radius, speed, phase, tilt } = node.userData;
          const a = t * speed + phase;
          node.position.set(
            Math.cos(a) * radius,
            Math.sin(a * 0.8) * radius * 0.38 + tilt,
            Math.sin(a) * radius * 0.55,
          );
        });

        rig.rotation.y = pointer.x * 0.36;
        rig.rotation.x = pointer.y * 0.24;
        halo.scale.setScalar(1 + Math.sin(t * 0.9) * 0.05 + burst * 0.2);
      }

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      apiRef.current = null;
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      env.dispose();
      disposables.forEach((d) => d.dispose && d.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (apiRef.current) apiRef.current(mode);
  }, [mode]);

  return <div className="hero-stage-canvas" ref={hostRef} style={{ position: 'absolute', inset: 0 }} aria-hidden="true" />;
}
