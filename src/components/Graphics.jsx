/* ------------------------------------------------------------------
   Decorative SVG graphics. All purely presentational, all aria-hidden.
   ------------------------------------------------------------------ */

/** Fine film grain laid over the whole page for a paper feel. */
export function Grain() {
  return (
    <svg className="grain" aria-hidden="true">
      <filter id="grain-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.08" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}

/** Blurred colour orb — used to bloom the corners of sections. */
export function Orb({ size = 420, top, left, right, bottom, tone = 'a', opacity = 0.45 }) {
  const fills = {
    a: 'radial-gradient(circle, var(--brand), transparent 66%)',
    b: 'radial-gradient(circle, var(--brand-2), transparent 66%)',
    c: 'radial-gradient(circle, var(--violet-300), transparent 66%)',
  };
  return (
    <span
      className="orb"
      aria-hidden="true"
      style={{ width: size, height: size, top, left, right, bottom, background: fills[tone], opacity }}
    />
  );
}

/** Dotted measurement grid, drawn behind content blocks. */
export function DotGrid({ className = '', style }) {
  return (
    <svg className={`deco ${className}`} style={style} width="240" height="240" viewBox="0 0 240 240" aria-hidden="true">
      <defs>
        <pattern id="dotgrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#dotgrid)" color="var(--brand)" opacity="0.4" />
    </svg>
  );
}

/** Concentric dashed rings — a light "radar" motif. */
export function RingDeco({ size = 320, className = '', style }) {
  return (
    <svg
      className={`deco ${className}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="160" cy="160" r="60" stroke="currentColor" strokeOpacity="0.28" />
      <circle cx="160" cy="160" r="100" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="4 8" />
      <circle cx="160" cy="160" r="140" stroke="currentColor" strokeOpacity="0.14" />
      <circle cx="160" cy="60" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="262" cy="200" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="58" cy="182" r="5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/** Soft wave used as a section divider. */
export function Wave({ flip = false }) {
  return (
    <svg
      className="divider-wave"
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      <path
        d="M0 46c180-40 320 28 520 20s300-56 480-40 260 52 440 34v30H0Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

/** Abstract "connected system" illustration for the process band. */
export function CircuitArt() {
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="circuit-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-2)" />
        </linearGradient>
      </defs>
      <path
        d="M20 170h70l34-60h84l38 68h92l36-78h116"
        stroke="url(#circuit-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="7 9"
        opacity="0.8"
      />
      <path d="M20 60h96l40 52h120l42-52h122" stroke="url(#circuit-stroke)" strokeWidth="1.5" opacity="0.4" />
      {[
        [90, 170],
        [208, 110],
        [338, 178],
        [430, 100],
        [156, 112],
        [278, 60],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="11" fill="var(--paper)" stroke="url(#circuit-stroke)" strokeWidth="2" />
          <circle cx={cx} cy={cy} r="4" fill="url(#circuit-stroke)" />
        </g>
      ))}
    </svg>
  );
}
