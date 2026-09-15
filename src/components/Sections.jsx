import { ArrowRight, Check, Quote, Star, Phone, Mail, MapPin, FileText } from 'lucide-react';
import { Orb, RingDeco, CircuitArt, DotGrid } from './Graphics';
import { BRAND } from '../data/site';
import missionImg from '../assets/about/our_mission.png';
import visionImg from '../assets/about/our_vision.png';
import whyImg from '../assets/about/why_choose_us.png';
import founderImg from '../assets/about/founder_avatar.jpg';

const ABOUT_IMAGES = { mission: missionImg, vision: visionImg, why: whyImg };

function SectionHead({ eyebrow, title, lede, center = false }) {
  return (
    <div className={`sec-head reveal ${center ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

/* ---------------- capabilities / platform ---------------- */
export function Features({ data }) {
  return (
    <section className="section" id="capabilities">
      <Orb size={460} top="6%" right="-14%" tone="b" opacity={0.2} />
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={data.title} lede={data.lede} />
        <div className="grid grid-3">
          {data.items.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                className="glass glass-hover feature reveal"
                key={f.title}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="corner" aria-hidden="true" />
                <span className="ic">
                  <Icon size={23} strokeWidth={1.9} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- services / courses ---------------- */
export function Offers({ data, mode, onAction }) {
  return (
    <section className="section section-tinted" id="work">
      <Orb size={520} top="20%" left="-16%" tone="a" opacity={0.18} />
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={data.title} lede={data.lede} />
        <div className="grid grid-3">
          {data.items.map((o, i) => {
            const Icon = o.icon;
            return (
              <article
                className="glass glass-hover offer reveal"
                key={o.name}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="offer-visual">
                  <RingDeco size={210} style={{ inset: '50% auto auto 50%', transform: 'translate(-50%,-50%)', color: 'var(--brand)' }} />
                  <span className="glyph">
                    <Icon size={54} strokeWidth={1.15} />
                  </span>
                  <span className="offer-badge">{o.badge}</span>
                </div>
                <div className="offer-body">
                  <div className="tags">
                    {o.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{o.name}</h3>
                  <p>{o.desc}</p>
                  <span className="offer-meta">
                    <Check size={13} strokeWidth={3} />
                    {o.meta}
                  </span>
                  <div className="offer-foot">
                    {o.was ? (
                      <span className="price">
                        {o.price}
                        <s>{o.was}</s>
                      </span>
                    ) : (
                      <span className="price-note">{o.price}</span>
                    )}
                    <button type="button" className="link-btn" onClick={() => onAction(o.name)}>
                      {mode === 'edu' ? 'Enroll' : 'Enquire'}
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- process ---------------- */
export function Process({ data }) {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={data.title} lede={data.lede} center />
        <div className="reveal" style={{ maxWidth: 620, margin: '0 auto 40px', opacity: 0.85 }}>
          <CircuitArt />
        </div>
        <div className="steps">
          {data.items.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                className="glass glass-hover step reveal"
                key={s.title}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="ic-row">
                  <Icon size={18} strokeWidth={2.1} />
                  <h3>{s.title}</h3>
                </span>
                <p>{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- stats ---------------- */
export function Stats({ items }) {
  return (
    <section className="section" style={{ paddingBlock: 'clamp(20px,3vw,40px)' }}>
      <div className="wrap">
        <div className="stats-band reveal">
          <DotGrid style={{ right: 10, top: 10, color: '#fff', opacity: 0.12 }} />
          <div className="wrap-inner">
            <div className="stats-row">
              {items.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- testimonials ---------------- */
export function Testimonials({ data }) {
  return (
    <section className="section">
      <Orb size={420} bottom="0%" right="-12%" tone="c" opacity={0.3} />
      <div className="wrap">
        <SectionHead eyebrow={data.eyebrow} title={data.title} center />
        <div className="grid grid-3">
          {data.items.map((t, i) => (
            <article
              className="glass glass-hover quote reveal"
              key={t.name}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Quote className="mark" size={30} strokeWidth={1.6} />
              <div className="stars" aria-label="5 out of 5">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p>“{t.quote}”</p>
              <div className="who">
                <span className="av">{t.av}</span>
                <span>
                  <span className="who-name">{t.name}</span>
                  <span className="who-role" style={{ display: 'block' }}>
                    {t.role}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- about splits ---------------- */
export function About({ blocks }) {
  return (
    <section className="section" id="studio">
      <div className="wrap" style={{ display: 'grid', gap: 'clamp(46px,7vw,90px)' }}>
        {blocks.map((b, i) => (
          <div className={`split reveal ${i % 2 ? 'flip' : ''}`} key={b.key}>
            <div>
              <span className="eyebrow">{b.eyebrow}</span>
              <h2>{b.title}</h2>
              <p className="lede">{b.text}</p>
              <ul>
                {b.points.map((p) => (
                  <li key={p}>
                    <Check size={16} strokeWidth={2.6} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-media">
              <span className="halo" aria-hidden="true" />
              <img src={ABOUT_IMAGES[b.key]} alt="" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- founder ---------------- */
export function Founder() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="glass founder reveal">
          <span className="eyebrow">The Leadership</span>
          <div className="founder-photo">
            <span className="founder-ring" aria-hidden="true" />
            <img src={founderImg} alt={BRAND.founder} />
          </div>
          <h3 style={{ fontSize: '1.5rem' }}>{BRAND.founder}</h3>
          <span className="founder-role">{BRAND.founderRole}</span>
          <p className="lede" style={{ maxWidth: 560 }}>
            BrAInix runs on a single idea: the same care that goes into a well-built product belongs in
            teaching people how to build one. That is why this site has two halves.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- contact + CTA ---------------- */
export function Contact({ cta, onPrimary }) {
  const cards = [
    { icon: Phone, k: 'Call or WhatsApp', v: BRAND.phone, href: BRAND.phoneHref },
    { icon: Mail, k: 'Direct Email', v: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: MapPin, k: 'Studio Address', v: BRAND.address, href: BRAND.mapHref },
    { icon: FileText, k: 'Detailed Brief', v: 'Fill the intake form', href: BRAND.formHref },
  ];

  return (
    <section className="section" id="contact">
      <Orb size={480} top="10%" left="-12%" tone="b" opacity={0.22} />
      <div className="wrap" style={{ display: 'grid', gap: 26 }}>
        <div className="contact-grid">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                className="glass glass-hover contact-card reveal"
                key={c.k}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="ic">
                  <Icon size={19} strokeWidth={2.1} />
                </span>
                <span>
                  <span className="k">{c.k}</span>
                  <span className="v">{c.v}</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="cta-panel reveal">
          <RingDeco size={380} style={{ right: -60, top: -60, color: '#fff', opacity: 0.25 }} />
          <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.22)', color: '#fff' }}>
            Next step
          </span>
          <h2 style={{ marginTop: 16 }}>{cta.title}</h2>
          <p className="lede">{cta.lede}</p>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={onPrimary}>
              {cta.primary}
              <ArrowRight size={17} />
            </button>
            <a className="btn btn-ghost btn-lg" href={BRAND.phoneHref}>
              <Phone size={16} />
              {cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
