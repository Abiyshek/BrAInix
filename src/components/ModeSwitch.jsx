import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CONTENT, MODES } from '../data/site';

/**
 * The site-wide switch. `services` sits first (the default landing experience),
 * `edu` second — flipping it swaps every section, the palette and the 3D scenes.
 *
 * The sliding thumb is measured from the active button rather than assuming an
 * even split, because the two labels are different widths.
 */
export default function ModeSwitch({ mode, onChange, showHint = false, id = 'mode-switch' }) {
  const railRef = useRef(null);
  const btnRefs = useRef({});
  const [thumb, setThumb] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const rail = railRef.current;
      const btn = btnRefs.current[mode];
      if (!rail || !btn) return;
      setThumb({ left: btn.offsetLeft, width: btn.offsetWidth });
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (railRef.current) ro.observe(railRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [mode]);

  // web fonts can land after first paint and change the label widths
  useEffect(() => {
    if (!document.fonts?.ready) return;
    document.fonts.ready.then(() => {
      const btn = btnRefs.current[mode];
      if (btn) setThumb({ left: btn.offsetLeft, width: btn.offsetWidth });
    });
  }, [mode]);

  return (
    <div className="switch" data-active={mode} ref={railRef} role="group" aria-label="Choose which BrAInix you want to see">
      <span
        className="switch-thumb"
        aria-hidden="true"
        style={thumb ? { left: thumb.left, width: thumb.width, transform: 'none' } : undefined}
      />
      {MODES.map((m) => {
        const cfg = CONTENT[m];
        const Icon = cfg.icon;
        return (
          <button
            key={m}
            type="button"
            id={`${id}-${m}`}
            ref={(el) => { btnRefs.current[m] = el; }}
            aria-pressed={mode === m}
            onClick={() => onChange(m)}
            title={`Switch to BrAInix ${cfg.label}`}
          >
            <Icon size={15} strokeWidth={2.2} />
            <span>{cfg.label}</span>
          </button>
        );
      })}
      {showHint && (
        <span className="switch-hint" aria-hidden="true">
          ↑ Two sites, one switch
        </span>
      )}
    </div>
  );
}
