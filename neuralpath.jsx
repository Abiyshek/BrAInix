import { useEffect, useRef, useState } from "react";
import {
  Brain, Zap, Globe, BarChart2, Award, Users,
  Bot, Cloud, TrendingUp, Search, Layers, Target, Rocket,
  Star, ChevronDown, ArrowRight, Play, Mail, CheckCircle, AlertCircle,
  GraduationCap, Cpu, BookOpen, FlaskConical
} from "lucide-react";
import * as THREE from "three";

// ─── THEME ───────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  :root {
    --ink:#0A0E1A; --ink2:#111827; --cyan:#00E5FF; --cyan2:#00B8D4;
    --violet:#7C3AED; --violet2:#A78BFA; --gold:#F59E0B;
    --muted:#6B7280; --text:#E2E8F0; --text2:#94A3B8;
    --border:rgba(0,229,255,0.12); --border2:rgba(124,58,237,0.22);
    --fh:'Syne',sans-serif; --fb:'DM Sans',sans-serif;
  }
  html { scroll-behavior:smooth; overflow-x:hidden; cursor:none; }
  body { background:var(--ink); color:var(--text); font-family:var(--fb); overflow-x:hidden; cursor:none; }

  /* CURSOR */
  #np-cursor { position:fixed; pointer-events:none; z-index:9999; mix-blend-mode:screen; }
  .cur-dot { position:absolute; width:8px; height:8px; background:var(--cyan);
    border-radius:50%; transform:translate(-50%,-50%);
    box-shadow:0 0 10px var(--cyan),0 0 22px var(--cyan); transition:background .15s; }
  .cur-ring { position:absolute; width:38px; height:38px; border:1.5px solid rgba(0,229,255,.5);
    border-radius:50%; transform:translate(-50%,-50%); transition:all .08s ease; }
  .cursor-hover .cur-ring { width:54px; height:54px; border-color:var(--violet2); background:rgba(124,58,237,.06); }
  .cursor-hover .cur-dot  { background:var(--violet2); box-shadow:0 0 10px var(--violet2),0 0 22px var(--violet2); }
  .cursor-click .cur-ring { width:22px; height:22px; background:rgba(0,229,255,.18); }

  /* TRAIL */
  .trail { position:fixed; border-radius:50%; pointer-events:none; z-index:9998;
    transform:translate(-50%,-50%); }

  /* NAV */
  nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:.9rem 3rem;
    display:flex; align-items:center; justify-content:space-between;
    backdrop-filter:blur(20px); background:rgba(10,14,26,.8);
    border-bottom:.5px solid var(--border); transition:background .3s; }
  .logo { font-family:var(--fh); font-weight:800; font-size:1.4rem; letter-spacing:-.03em;
    background:linear-gradient(135deg,var(--cyan),var(--violet2));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .nav-links { display:flex; gap:2.5rem; list-style:none; }
  .nav-links a { color:var(--text2); text-decoration:none; font-size:.9rem; transition:color .2s; cursor:none; }
  .nav-links a:hover { color:var(--cyan); }
  .nav-cta { background:linear-gradient(135deg,var(--cyan),var(--violet)); color:#000;
    font-family:var(--fh); font-weight:600; font-size:.85rem; padding:.55rem 1.4rem;
    border-radius:100px; border:none; cursor:none; letter-spacing:.03em;
    transition:opacity .2s,transform .2s,box-shadow .2s; }
  .nav-cta:hover { opacity:.88; transform:scale(1.04); box-shadow:0 0 28px rgba(0,229,255,.35); }

  /* HERO */
  #hero { position:relative; min-height:100vh; display:flex; align-items:center;
    justify-content:center; overflow:hidden; }
  #hero-canvas { position:absolute; inset:0; z-index:0; }
  .hero-content { position:relative; z-index:2; text-align:center; max-width:860px; padding:0 2rem; }
  .hero-badge { display:inline-flex; align-items:center; gap:.5rem;
    background:rgba(0,229,255,.08); border:.5px solid var(--border);
    border-radius:100px; padding:.4rem 1rem; font-size:.75rem; color:var(--cyan);
    margin-bottom:2rem; letter-spacing:.08em; text-transform:uppercase; }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--cyan);
    animation:pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
  h1 { font-family:var(--fh); font-size:clamp(2.8rem,6vw,5rem); font-weight:800;
    line-height:1.05; letter-spacing:-.04em; margin-bottom:1.5rem; }
  .grad { background:linear-gradient(135deg,var(--cyan) 0%,var(--violet2) 50%,var(--gold) 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .hero-sub { font-size:1.1rem; color:var(--text2); font-weight:300; max-width:560px;
    margin:0 auto 2.5rem; line-height:1.7; }
  .hero-actions { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
  .btn-primary { background:linear-gradient(135deg,var(--cyan),var(--violet)); color:#000;
    font-family:var(--fh); font-weight:700; font-size:1rem; padding:.85rem 2.2rem;
    border-radius:100px; border:none; cursor:none; display:inline-flex; align-items:center; gap:.5rem;
    transition:all .25s; position:relative; overflow:hidden; }
  .btn-primary:hover { transform:translateY(-3px); box-shadow:0 0 40px rgba(0,229,255,.4),0 0 80px rgba(124,58,237,.2); }
  .btn-ghost { background:transparent; color:var(--text); font-family:var(--fh); font-weight:600;
    font-size:1rem; padding:.85rem 2.2rem; border-radius:100px;
    border:.5px solid rgba(255,255,255,.2); cursor:none;
    display:inline-flex; align-items:center; gap:.5rem; transition:all .25s; }
  .btn-ghost:hover { border-color:var(--cyan); color:var(--cyan); background:rgba(0,229,255,.05);
    box-shadow:0 0 20px rgba(0,229,255,.1); transform:translateY(-2px); }
  .hero-stats { display:flex; gap:3rem; justify-content:center; margin-top:4rem; flex-wrap:wrap; }
  .stat-num { font-family:var(--fh); font-size:2rem; font-weight:800;
    background:linear-gradient(135deg,var(--cyan),var(--violet2));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .stat-lbl { font-size:.78rem; color:var(--text2); letter-spacing:.05em; margin-top:.2rem; }
  .scroll-ind { position:absolute; bottom:2rem; left:50%; transform:translateX(-50%);
    display:flex; flex-direction:column; align-items:center; gap:.5rem;
    color:var(--text2); font-size:.72rem; letter-spacing:.1em; cursor:none;
    animation:floatY 3s ease-in-out infinite; }
  @keyframes floatY { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
  .scroll-line { width:1px; height:48px; background:linear-gradient(to bottom,var(--cyan),transparent); }

  /* SECTIONS */
  section { padding:7rem 3rem; }
  .sec-label { font-size:.72rem; letter-spacing:.15em; text-transform:uppercase;
    color:var(--cyan); font-weight:500; margin-bottom:.7rem; }
  .sec-title { font-family:var(--fh); font-size:clamp(1.8rem,4vw,3rem); font-weight:700;
    letter-spacing:-.03em; line-height:1.15; margin-bottom:1rem; }
  .sec-sub { color:var(--text2); font-size:1rem; font-weight:300; line-height:1.7; max-width:560px; }

  /* FEATURES */
  #features { background:var(--ink); }
  .features-header { max-width:1100px; margin:0 auto 4rem;
    display:flex; justify-content:space-between; align-items:flex-end; gap:2rem; flex-wrap:wrap; }
  .features-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:1.5px; max-width:1100px; margin:0 auto; background:var(--border); }
  .feature-card { background:var(--ink); padding:2.5rem; transition:background .3s;
    cursor:none; position:relative; overflow:hidden; }
  .feature-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,var(--cyan),transparent);
    opacity:0; transition:opacity .4s; }
  .feature-card:hover { background:rgba(0,229,255,.025); }
  .feature-card:hover::before { opacity:1; }
  .feat-icon { width:48px; height:48px; border-radius:12px; display:flex; align-items:center;
    justify-content:center; margin-bottom:1.5rem; transition:transform .3s; }
  .feature-card:hover .feat-icon { transform:scale(1.12) rotate(-4deg); }
  .ic-cyan { background:rgba(0,229,255,.1); border:.5px solid rgba(0,229,255,.25); color:var(--cyan); }
  .ic-violet { background:rgba(124,58,237,.1); border:.5px solid rgba(124,58,237,.25); color:var(--violet2); }
  .ic-gold { background:rgba(245,158,11,.1); border:.5px solid rgba(245,158,11,.25); color:var(--gold); }
  .feat-title { font-family:var(--fh); font-size:1.1rem; font-weight:600;
    margin-bottom:.7rem; letter-spacing:-.02em; }
  .feat-text { font-size:.88rem; color:var(--text2); line-height:1.7; font-weight:300; }

  /* COURSES */
  #courses { background:var(--ink2); }
  .courses-row { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:1.5rem; max-width:1100px; margin:3rem auto 0; }
  .course-card { background:var(--ink); border:.5px solid var(--border); border-radius:24px;
    overflow:hidden; transition:transform .3s,border-color .3s,box-shadow .3s; cursor:none; }
  .course-card:hover { transform:translateY(-8px); border-color:rgba(0,229,255,.35);
    box-shadow:0 24px 60px rgba(0,0,0,.4),0 0 40px rgba(0,229,255,.08); }
  .course-thumb { height:156px; display:flex; align-items:center; justify-content:center;
    position:relative; }
  .t-cyan { background:linear-gradient(135deg,rgba(0,229,255,.1),rgba(0,229,255,.02)); }
  .t-violet { background:linear-gradient(135deg,rgba(124,58,237,.14),rgba(124,58,237,.02)); }
  .t-gold { background:linear-gradient(135deg,rgba(245,158,11,.12),rgba(245,158,11,.02)); }
  .thumb-badge { position:absolute; top:1rem; left:1rem; background:rgba(0,0,0,.55);
    border:.5px solid var(--border); border-radius:100px; padding:.22rem .7rem;
    font-size:.68rem; color:var(--text2); letter-spacing:.05em; text-transform:uppercase; }
  .course-body { padding:1.5rem; }
  .course-tags { display:flex; gap:.6rem; margin-bottom:.7rem; flex-wrap:wrap; }
  .ctag { font-size:.68rem; color:var(--cyan); background:rgba(0,229,255,.08);
    border-radius:100px; padding:.18rem .6rem; letter-spacing:.05em; }
  .ctag.v { color:var(--violet2); background:rgba(124,58,237,.08); }
  .ctag.g { color:var(--gold); background:rgba(245,158,11,.08); }
  .course-name { font-family:var(--fh); font-size:1.05rem; font-weight:600;
    letter-spacing:-.02em; margin-bottom:.45rem; line-height:1.3; }
  .course-desc { font-size:.85rem; color:var(--text2); line-height:1.6; font-weight:300; margin-bottom:1.2rem; }
  .course-footer { display:flex; align-items:center; justify-content:space-between; }
  .c-price { font-family:var(--fh); font-weight:700; font-size:1.1rem; color:var(--cyan); }
  .c-meta { font-size:.78rem; color:var(--text2); }
  .c-btn { font-size:.78rem; color:var(--text2); background:rgba(255,255,255,.05);
    border:.5px solid rgba(255,255,255,.1); border-radius:100px; padding:.28rem .85rem;
    cursor:none; transition:all .2s; display:inline-flex; align-items:center; gap:.3rem; }
  .c-btn:hover { color:var(--cyan); border-color:var(--cyan); background:rgba(0,229,255,.05); }

  /* HOW */
  #how { background:var(--ink); position:relative; overflow:hidden; }
  #how-canvas { position:absolute; inset:0; pointer-events:none; z-index:0; }
  .how-inner { max-width:1100px; margin:0 auto; display:grid;
    grid-template-columns:1fr 1fr; gap:5rem; align-items:center; position:relative; z-index:1; }
  .how-steps { display:flex; flex-direction:column; }
  .step { display:flex; gap:1.5rem; padding:1.7rem 0; border-bottom:.5px solid var(--border);
    cursor:none; transition:padding-left .3s; }
  .step:last-child { border-bottom:none; }
  .step:hover { padding-left:.5rem; }
  .step-num { font-family:var(--fh); font-size:2.4rem; font-weight:800; color:transparent;
    -webkit-text-stroke:1px rgba(0,229,255,.2); min-width:56px; line-height:1;
    transition:-webkit-text-stroke-color .3s; }
  .step:hover .step-num { -webkit-text-stroke-color:rgba(0,229,255,.7); }
  .step-title { font-family:var(--fh); font-weight:600; font-size:1.05rem;
    letter-spacing:-.02em; margin-bottom:.4rem; display:flex; align-items:center; gap:.5rem; }
  .step-text { font-size:.86rem; color:var(--text2); font-weight:300; line-height:1.6; }
  .how-visual { position:relative; display:flex; align-items:center; justify-content:center; }
  .how-orb { width:320px; height:320px; border-radius:50%;
    background:radial-gradient(circle at 35% 35%,rgba(0,229,255,.1),rgba(124,58,237,.08),rgba(10,14,26,.5));
    border:.5px solid rgba(0,229,255,.14); display:flex; align-items:center; justify-content:center;
    position:relative; z-index:2; }
  .orb-inner { text-align:center; }
  .orb-label { font-family:var(--fh); font-size:1rem; font-weight:600; color:var(--cyan); margin-top:.8rem; }
  .orb-sub { font-size:.75rem; color:var(--text2); margin-top:.25rem; }
  .orb-ring { position:absolute; border-radius:50%; border:.5px dashed; z-index:1; }
  .r1 { width:400px; height:400px; border-color:rgba(0,229,255,.07); animation:rrot 30s linear infinite; }
  .r2 { width:490px; height:490px; border-color:rgba(124,58,237,.07); animation:rrot 50s linear infinite reverse; }
  .r3 { width:580px; height:580px; border-color:rgba(245,158,11,.04); animation:rrot 70s linear infinite; }
  @keyframes rrot { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* TESTIMONIALS */
  #testimonials { background:var(--ink2); }
  .test-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:1.5rem; max-width:1100px; margin:3rem auto 0; }
  .test-card { background:var(--ink); border:.5px solid var(--border); border-radius:24px;
    padding:2rem; transition:border-color .3s,transform .3s,box-shadow .3s; cursor:none; }
  .test-card:hover { border-color:rgba(0,229,255,.22); transform:translateY(-4px);
    box-shadow:0 16px 40px rgba(0,0,0,.3); }
  .stars { display:flex; gap:2px; margin-bottom:1rem; }
  .test-quote { font-size:.93rem; color:var(--text); font-weight:300; line-height:1.8;
    margin-bottom:1.5rem; font-style:italic; }
  .test-author { display:flex; align-items:center; gap:.7rem; }
  .avatar { width:36px; height:36px; border-radius:50%; display:flex; align-items:center;
    justify-content:center; font-family:var(--fh); font-size:.82rem; font-weight:700; color:#000; }
  .av-c { background:linear-gradient(135deg,var(--cyan),var(--cyan2)); }
  .av-v { background:linear-gradient(135deg,var(--violet),var(--violet2)); }
  .av-g { background:linear-gradient(135deg,var(--gold),#FCD34D); }
  .t-name { font-family:var(--fh); font-size:.88rem; font-weight:600; }
  .t-role { font-size:.75rem; color:var(--text2); }

  /* CTA */
  #cta { background:var(--ink); padding:6rem 3rem; }
  .cta-inner { max-width:800px; margin:0 auto; text-align:center;
    background:linear-gradient(135deg,rgba(0,229,255,.04),rgba(124,58,237,.05));
    border:.5px solid var(--border2); border-radius:32px; padding:5rem 3rem;
    position:relative; overflow:hidden; }
  .cta-glow { position:absolute; top:-80px; left:50%; transform:translateX(-50%);
    width:300px; height:300px; border-radius:50%;
    background:radial-gradient(circle,rgba(124,58,237,.1),transparent 70%); pointer-events:none; }
  .cta-inner h2 { font-family:var(--fh); font-size:clamp(2rem,4vw,3rem); font-weight:800;
    letter-spacing:-.04em; margin-bottom:1rem; line-height:1.1; }
  .cta-inner p { color:var(--text2); font-size:1rem; font-weight:300; line-height:1.7;
    max-width:480px; margin:0 auto 2.5rem; }
  .input-row { display:flex; gap:.7rem; max-width:460px; margin:0 auto 1rem; }
  .email-inp { flex:1; background:rgba(255,255,255,.05); border:.5px solid rgba(255,255,255,.15);
    border-radius:100px; padding:.72rem 1.4rem; color:var(--text); font-family:var(--fb);
    font-size:.93rem; outline:none; transition:border-color .2s,box-shadow .2s; cursor:none; }
  .email-inp::placeholder { color:var(--muted); }
  .email-inp:focus { border-color:var(--cyan); box-shadow:0 0 0 3px rgba(0,229,255,.1); }
  .toast { border-radius:12px; padding:.7rem 1.4rem; font-size:.85rem;
    margin-top:1rem; display:flex; align-items:center; gap:.5rem; justify-content:center;
    animation:fadeUp .4s ease; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
  .toast.success { background:rgba(0,229,255,.1); border:.5px solid var(--cyan); color:var(--cyan); }
  .toast.error { background:rgba(239,68,68,.1); border:.5px solid #EF4444; color:#FCA5A5; }
  .mail-note { font-size:.72rem; color:var(--muted); margin-top:.5rem;
    display:flex; align-items:center; gap:.3rem; justify-content:center; }

  /* FOOTER */
  footer { background:var(--ink2); border-top:.5px solid var(--border); padding:3rem;
    display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1.5rem; }
  .f-logo { font-family:var(--fh); font-weight:800; font-size:1.2rem;
    background:linear-gradient(135deg,var(--cyan),var(--violet2));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .f-links { display:flex; gap:2rem; flex-wrap:wrap; }
  .f-links a { font-size:.83rem; color:var(--text2); text-decoration:none;
    transition:color .2s; cursor:none; }
  .f-links a:hover { color:var(--cyan); }
  .f-copy { font-size:.78rem; color:var(--muted); }

  /* REVEAL */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease,transform .7s ease; }
  .reveal.vis { opacity:1; transform:none; }

  @media(max-width:768px){
    nav { padding:1rem 1.5rem; }
    .nav-links { display:none; }
    section { padding:5rem 1.5rem; }
    .how-inner { grid-template-columns:1fr; }
    .how-visual { display:none; }
    .features-header { flex-direction:column; }
    .hero-stats { gap:2rem; }
    .input-row { flex-direction:column; }
    html,body { cursor:auto; }
    #np-cursor { display:none; }
  }
`;

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const outerRef = useRef(null);
  const trailsRef = useRef([]);
  const mx = useRef(0), my = useRef(0);
  const lx = useRef(0), ly = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const TRAIL = 14;
    const els = [];
    for (let i = 0; i < TRAIL; i++) {
      const d = document.createElement("div");
      d.className = "trail";
      const ratio = 1 - i / TRAIL;
      const size = Math.max(2, 6 * ratio);
      d.style.cssText = `width:${size}px;height:${size}px;opacity:${ratio * 0.55};background:hsl(${185 + i * 9},100%,${55 + i * 2}%)`;
      document.body.appendChild(d);
      els.push({ el: d, x: 0, y: 0 });
    }
    trailsRef.current = els;

    const onMove = e => { mx.current = e.clientX; my.current = e.clientY; };
    const onDown = () => cursorRef.current?.classList.add("cursor-click");
    const onUp   = () => cursorRef.current?.classList.remove("cursor-click");
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const hoverEls = document.querySelectorAll("button,a,.course-card,.feature-card,.test-card,.step");
    hoverEls.forEach(el => {
      el.addEventListener("mouseenter", () => cursorRef.current?.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => cursorRef.current?.classList.remove("cursor-hover"));
    });

    function tick() {
      lx.current += (mx.current - lx.current) * 0.12;
      ly.current += (my.current - ly.current) * 0.12;
      if (dotRef.current) { dotRef.current.style.left = mx.current + "px"; dotRef.current.style.top = my.current + "px"; }
      if (outerRef.current) { outerRef.current.style.left = lx.current + "px"; outerRef.current.style.top = ly.current + "px"; }
      let px = mx.current, py = my.current;
      trailsRef.current.forEach(t => {
        t.x += (px - t.x) * 0.26;
        t.y += (py - t.y) * 0.26;
        t.el.style.left = t.x + "px";
        t.el.style.top  = t.y + "px";
        px = t.x; py = t.y;
      });
      rafRef.current = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      els.forEach(t => t.el.remove());
    };
  }, []);

  return { cursorRef, dotRef, outerRef };
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const siblings = Array.from(e.target.parentElement?.children || []);
          const idx = siblings.indexOf(e.target);
          setTimeout(() => e.target.classList.add("vis"), idx * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── THREE.JS HERO ────────────────────────────────────────────────────────────
function HeroCanvas() {
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

// ─── HOW CANVAS ───────────────────────────────────────────────────────────────
function HowCanvas() {
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

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────
function StarRating() {
  return (
    <div className="stars">
      {[...Array(5)].map((_,i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const { cursorRef, dotRef, outerRef } = useCursor();
  useReveal();

  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null); // {type,msg}
  const [sending, setSending] = useState(false);

  const handleSignup = () => {
    setToast(null);
    if (!email || !email.includes("@") || !email.includes(".")) {
      setToast({ type:"error", msg:"Please enter a valid email address." });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setEmail("");
      setToast({ type:"success", msg:"You're on the list! (Demo — no real email is sent. Connect Mailchimp or Resend to go live.)" });
    }, 900);
  };

  const features = [
    { icon:<Brain size={22}/>, cls:"ic-cyan", title:"Adaptive AI Curriculum", text:"Our neural engine maps your knowledge graph in real time, surfacing exactly what you need to learn next — no wasted effort." },
    { icon:<Zap size={22}/>, cls:"ic-violet", title:"Live Mentor Sessions", text:"Connect with industry practitioners for live 1-on-1 or cohort-based sessions. Real feedback, real breakthroughs." },
    { icon:<FlaskConical size={22}/>, cls:"ic-gold", title:"Immersive 3D Labs", text:"Hands-on practice in interactive 3D environments — from data science sandboxes to virtual engineering labs." },
    { icon:<BarChart2 size={22}/>, cls:"ic-cyan", title:"Progress Intelligence", text:"Detailed analytics on your learning velocity, retention rates, and skill mastery — visualized beautifully, acted on instantly." },
    { icon:<Award size={22}/>, cls:"ic-violet", title:"Verified Credentials", text:"Industry-recognized certificates anchored to blockchain — fraud-proof, globally verifiable, and career-defining." },
    { icon:<Users size={22}/>, cls:"ic-gold", title:"Peer Learning Networks", text:"Collaborative spaces where learners co-build projects, share insights, and accelerate each other's growth." },
  ];

  const courses = [
    { icon:<Bot size={52} color="#00E5FF" strokeWidth={1.2}/>, thumb:"t-cyan", badge:"Most Popular", tags:[{l:"AI & ML"},{l:"Beginner"}], name:"Machine Learning Foundations", desc:"Master the math, intuition, and code behind modern ML models used at top tech companies.", price:"$89", meta:"42 hrs · 18 projects", priceColor:"var(--cyan)" },
    { icon:<Cloud size={52} color="#A78BFA" strokeWidth={1.2}/>, thumb:"t-violet", badge:"New", tags:[{l:"Cloud",cls:"v"},{l:"Advanced",cls:"v"}], name:"Cloud Architecture & DevOps", desc:"Design resilient, scalable cloud systems on AWS, GCP, and Azure with real infrastructure labs.", price:"$119", meta:"56 hrs · 24 projects", priceColor:"var(--violet2)" },
    { icon:<TrendingUp size={52} color="#F59E0B" strokeWidth={1.2}/>, thumb:"t-gold", badge:"Trending", tags:[{l:"Finance",cls:"g"},{l:"Intermediate",cls:"g"}], name:"Quantitative Finance & Algo Trading", desc:"Build and backtest trading algorithms using Python, statistics, and real market data.", price:"$99", meta:"38 hrs · 15 projects", priceColor:"var(--gold)" },
  ];

  const steps = [
    { icon:<Search size={16}/>, title:"Discover Your Path", text:"Take our 5-min skill assessment. Our AI builds a personalized roadmap tailored to your goals." },
    { icon:<Layers size={16}/>, title:"Learn Through Doing", text:"Interactive labs, real projects, and live mentor feedback — not just videos and quizzes." },
    { icon:<Target size={16}/>, title:"Track & Adapt", text:"Weekly AI-driven progress reports surface exactly where to focus next, keeping you sharp." },
    { icon:<Rocket size={16}/>, title:"Earn & Launch", text:"Graduate with a verified certificate and connections to our 500+ hiring partner network." },
  ];

  const testimonials = [
    { av:"AK", cls:"av-c", quote:"BrAInix's adaptive system felt like having a personal tutor that understood how my brain works. I landed my dream ML role in 4 months.", name:"Aisha Khan", role:"ML Engineer at Stripe" },
    { av:"MR", cls:"av-v", quote:"I'd tried every other platform. BrAInix was the only one where I didn't give up. The live mentor sessions changed everything.", name:"Marcus Rivera", role:"Cloud Architect at AWS" },
    { av:"SL", cls:"av-g", quote:"The 3D labs made abstract concepts click instantly. I could run experiments and see results — that's how engineering should be taught.", name:"Sophie Liu", role:"Data Scientist at DeepMind" },
  ];

  return (
    <>
      <style>{css}</style>

      {/* CURSOR */}
      <div id="np-cursor" ref={cursorRef}>
        <div className="cur-ring" ref={outerRef} />
        <div className="cur-dot"  ref={dotRef} />
      </div>

      {/* NAV */}
      <nav>
        <div className="logo">BrAInix</div>
        <ul className="nav-links">
          <li><a href="#features">Platform</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#testimonials">Stories</a></li>
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById("cta").scrollIntoView({behavior:"smooth"})}>
          Start Learning
        </button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot"/><Cpu size={12}/>AI-Powered Learning Platform</div>
          <h1>Learn Smarter.<br/><span className="grad">Think Deeper.</span><br/>Grow Faster.</h1>
          <p className="hero-sub">BrAInix adapts to your unique mind — delivering personalized, immersive education powered by cutting-edge AI and real-world expertise.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById("courses").scrollIntoView({behavior:"smooth"})}>
              <BookOpen size={18}/> Explore Courses
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById("how").scrollIntoView({behavior:"smooth"})}>
              <Play size={16}/> See How It Works
            </button>
          </div>
          <div className="hero-stats">
            {[["240K+","Active Learners"],["98%","Completion Rate"],["1,800+","Expert Courses"],["4.9★","Avg. Rating"]].map(([n,l])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div className="stat-num">{n}</div>
                <div className="stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-ind" onClick={() => document.getElementById("features").scrollIntoView({behavior:"smooth"})}>
          <div className="scroll-line"/>
          <ChevronDown size={14}/>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="features-header reveal">
          <div>
            <div className="sec-label">The Platform</div>
            <h2 className="sec-title">Built for the future<br/>of human potential</h2>
          </div>
          <p className="sec-sub">Every tool, every feature — engineered to remove friction between you and your breakthrough moment.</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card reveal" key={f.title}>
              <div className={`feat-icon ${f.cls}`}>{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses">
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="sec-label reveal">Course Catalog</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"1rem"}}>
            <h2 className="sec-title reveal">Courses that open<br/>new worlds</h2>
            <p className="sec-sub reveal" style={{maxWidth:380,margin:0}}>From beginner to expert — structured paths that actually get you there.</p>
          </div>
        </div>
        <div className="courses-row">
          {courses.map(c => (
            <div className="course-card reveal" key={c.name}>
              <div className={`course-thumb ${c.thumb}`}>
                {c.icon}
                <span className="thumb-badge">{c.badge}</span>
              </div>
              <div className="course-body">
                <div className="course-tags">
                  {c.tags.map(t => <span key={t.l} className={`ctag ${t.cls||""}`}>{t.l}</span>)}
                </div>
                <div className="course-name">{c.name}</div>
                <div className="course-desc">{c.desc}</div>
                <div className="course-footer">
                  <div>
                    <div className="c-price" style={{color:c.priceColor}}>{c.price}</div>
                    <div className="c-meta">{c.meta}</div>
                  </div>
                  <button className="c-btn">Enroll <ArrowRight size={12}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <HowCanvas />
        <div className="how-inner">
          <div className="reveal">
            <div className="sec-label">The Process</div>
            <h2 className="sec-title" style={{marginBottom:"2.5rem"}}>From zero to<br/>career-ready</h2>
            <div className="how-steps">
              {steps.map((s,i) => (
                <div className="step" key={s.title}>
                  <div className="step-num">0{i+1}</div>
                  <div>
                    <div className="step-title">{s.icon}{s.title}</div>
                    <p className="step-text">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="how-visual reveal">
            <div className="orb-ring r1"/>
            <div className="orb-ring r2"/>
            <div className="orb-ring r3"/>
            <div className="how-orb">
              <div className="orb-inner">
                <GraduationCap size={64} color="#00E5FF" strokeWidth={1}/>
                <div className="orb-label">BrAInix AI</div>
                <div className="orb-sub">Adaptive Intelligence Engine</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div className="sec-label reveal">Learner Stories</div>
          <h2 className="sec-title reveal">Minds we've helped unlock</h2>
        </div>
        <div className="test-grid">
          {testimonials.map(t => (
            <div className="test-card reveal" key={t.name}>
              <StarRating/>
              <div className="test-quote">"{t.quote}"</div>
              <div className="test-author">
                <div className={`avatar ${t.cls}`}>{t.av}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="cta-inner">
          <div className="cta-glow"/>
          <div className="sec-label">Join 100+ Learners</div>
          <h2>Your next chapter<br/>starts <span className="grad">right now</span></h2>
          <p>Get 7 days free. No credit card needed. Cancel anytime. Pure, focused learning from day one.</p>
          <div className="input-row">
            <input className="email-inp" type="email" placeholder="Enter your email address"
              value={email} onChange={e=>setEmail(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&handleSignup()}/>
            <button className="btn-primary" style={{whiteSpace:"nowrap",padding:".72rem 1.7rem",fontSize:".88rem"}}
              onClick={handleSignup} disabled={sending}>
              <Mail size={16}/>{sending?"Sending…":"Get Started Free"}
            </button>
          </div>
          {toast && (
            <div className={`toast ${toast.type}`}>
              {toast.type==="success"
                ? <CheckCircle size={15}/>
                : <AlertCircle size={15}/>}
              {toast.msg}
            </div>
          )}
          <div className="mail-note">
            <Globe size={12} color="var(--muted)"/>
            Demo mode — connect Mailchimp, Resend, or SendGrid to send real emails
          </div>
          <div style={{fontSize:".78rem",color:"var(--muted)",marginTop:".5rem"}}>Join 100+ learners who started this week</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="f-logo">BrAInix</div>

        <div className="f-contact">
          <div>📧 <a href="mailto:hashedtechs@gmail.com">hashedtechs@gmail.com</a></div>
          <div>📱 <a href="tel:9994875475">9994875475</a></div>
        </div>
        <div className="f-copy">© 2026 BrAInix, Inc.</div>
      </footer>
    </>
  );
}
