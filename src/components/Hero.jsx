import { ArrowRight, ArrowDown } from 'lucide-react';
import HeroScene from '../three/HeroScene';
import { Orb, RingDeco, DotGrid } from './Graphics';

export default function Hero({ mode, content, onPrimary }) {
  const { hero } = content;

  return (
    <section className="hero" id="top">
      <Orb size={520} top="-14%" left="-12%" tone="a" opacity={0.28} />
      <Orb size={440} top="14%" right="-10%" tone="b" opacity={0.24} />
      <DotGrid style={{ left: 12, bottom: 40, opacity: 0.5 }} />

      <div className="wrap hero-grid">
        <div className="hero-copy mode-swap" key={`copy-${mode}`}>
          <span className="eyebrow">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: 'var(--brand)',
                boxShadow: '0 0 0 4px var(--brand-soft)',
              }}
            />
            {hero.eyebrow}
          </span>

          <h1>
            {hero.titleTop}{' '}
            <span className="grad-text">{hero.titleAccent}</span>
            <br />
            {hero.titleBottom}
          </h1>

          <p className="lede">{hero.lede}</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={onPrimary}>
              {hero.primary.label}
              <ArrowRight size={17} />
            </button>
            <a className="btn btn-ghost btn-lg" href={hero.secondary.href}>
              {hero.secondary.label}
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-badges">
            {hero.badges.map((b) => {
              const Icon = b.icon;
              return (
                <span className="hero-badge" key={b.text}>
                  <Icon size={16} strokeWidth={2.2} />
                  {b.text}
                </span>
              );
            })}
          </div>
        </div>

        <div className="hero-stage">
          <RingDeco
            size={400}
            style={{ inset: '50% auto auto 50%', transform: 'translate(-50%, -50%)', color: 'var(--brand)' }}
          />
          <HeroScene mode={mode} />

          {hero.chips.map((chip, i) => {
            const Icon = chip.icon;
            return (
              <div className={`float-chip chip-${'abc'[i]}`} key={`${mode}-${chip.title}`}>
                <span className="dot">
                  <Icon size={15} strokeWidth={2.2} />
                </span>
                <span>
                  {chip.title}
                  <small>{chip.sub}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
