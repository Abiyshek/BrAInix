import { useEffect, useRef } from 'react';

/** A soft brand-tinted glow that trails the pointer. Skipped on touch devices. */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(hover: none)').matches) {
      el.style.display = 'none';
      return undefined;
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let raf = 0;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}
