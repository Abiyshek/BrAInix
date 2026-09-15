import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import ModeSwitch from './ModeSwitch';
import { BRAND, FOOTER_LINKS } from '../data/site';
import logo from '../assets/logo/BrAInix_logo.jpg';

export default function Footer({ mode, onMode }) {
  const cols = FOOTER_LINKS[mode];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark">
                <img src={logo} alt="" />
              </span>
              <span>
                <span className="brand-name">
                  Br<b>AI</b>nix
                </span>
                <span className="brand-sub">{BRAND.tagline}</span>
              </span>
            </a>
            <p>
              A studio building custom web products, and an academy teaching people to build them.
              Switch between the two any time.
            </p>
            <div style={{ marginTop: 18, maxWidth: 320 }}>
              <ModeSwitch mode={mode} onChange={onMode} id="footer-switch" />
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.h}>
              <h4>{col.h}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#work">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4>Reach us</h4>
            <ul>
              <li>
                <a href={BRAND.phoneHref}>
                  <Phone size={13} style={{ display: 'inline', marginRight: 7, verticalAlign: '-2px' }} />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>
                  <Mail size={13} style={{ display: 'inline', marginRight: 7, verticalAlign: '-2px' }} />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.mapHref} target="_blank" rel="noreferrer">
                  <MapPin size={13} style={{ display: 'inline', marginRight: 7, verticalAlign: '-2px' }} />
                  Puducherry, India
                </a>
              </li>
              <li>
                <a href={BRAND.formHref} target="_blank" rel="noreferrer">
                  Intake form
                  <ArrowUpRight size={13} style={{ display: 'inline', marginLeft: 4, verticalAlign: '-2px' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. Built in Puducherry.
          </span>
          <span style={{ fontFamily: 'var(--fm)', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Currently viewing · {mode === 'edu' ? 'Edu Tech' : 'Web Services'}
          </span>
        </div>
      </div>
    </footer>
  );
}
