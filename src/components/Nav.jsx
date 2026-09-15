import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ModeSwitch from './ModeSwitch';
import { BRAND, CONTENT } from '../data/site';
import logo from '../assets/logo/BrAInix_logo.jpg';

export default function Nav({ mode, onMode, onContact }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(true);
  const cfg = CONTENT[mode];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 6500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const pick = (m) => {
    setHint(false);
    onMode(m);
  };

  return (
    <>
      <header className={`nav ${solid ? 'solid' : ''}`}>
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label={`${BRAND.name} home`}>
            <span className="brand-mark">
              <img src={logo} alt="" />
            </span>
            <span>
              <span className="brand-name">
                Br<b>AI</b>nix
              </span>
              <span className="brand-sub">{cfg.short}</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {cfg.nav.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <ModeSwitch mode={mode} onChange={pick} showHint={hint && !open} />

          <button type="button" className="btn btn-ink nav-cta" onClick={onContact}>
            {mode === 'edu' ? 'Enroll' : 'Get a quote'}
            <ArrowUpRight size={16} />
          </button>

          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <div className="wrap">
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            {cfg.nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 14 }}
              onClick={() => {
                setOpen(false);
                onContact();
              }}
            >
              {mode === 'edu' ? 'Enroll now' : 'Start a project'}
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
