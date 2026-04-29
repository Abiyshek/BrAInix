import { useEffect, useRef } from "react";

export function useCursor() {
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
