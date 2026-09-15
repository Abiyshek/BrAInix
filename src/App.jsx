import { useCallback, useEffect, useState } from 'react';
import Backdrop from './three/Backdrop';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CursorGlow from './components/CursorGlow';
import { Grain, Wave } from './components/Graphics';
import { About, Contact, Features, Founder, Offers, Process, Stats, Testimonials } from './components/Sections';
import useReveal from './hooks/useReveal';
import { ABOUT, CONTENT, MODES } from './data/site';

const STORE_KEY = 'brainix:mode';

function readStoredMode() {
  try {
    const saved = window.localStorage.getItem(STORE_KEY);
    if (MODES.includes(saved)) return saved;
  } catch {
    /* private mode / blocked storage — fall through to the default */
  }
  return 'services';
}

export default function App() {
  // Web Services is the first / default face of the site; Edu Tech is second.
  const [mode, setMode] = useState(readStoredMode);
  const [flash, setFlash] = useState(0);
  const [modal, setModal] = useState({ open: false, preset: '' });
  const [toast, setToast] = useState(null);

  const content = CONTENT[mode];
  useReveal(mode);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    document.title =
      mode === 'edu'
        ? 'BrAInix Edu — Adaptive AI Learning Platform'
        : 'BrAInix — Custom Web Services Studio';
    try {
      window.localStorage.setItem(STORE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3600);
    return () => clearTimeout(t);
  }, [toast]);

  const switchMode = useCallback(
    (next) => {
      if (next === mode || !MODES.includes(next)) return;
      setMode(next);
      setFlash((f) => f + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [mode],
  );

  const openModal = useCallback((preset = '') => setModal({ open: true, preset }), []);
  const showToast = useCallback((type, msg) => setToast({ type, msg }), []);

  return (
    <>
      <div className="paper-wash" aria-hidden="true" />
      <Grain />
      <Backdrop mode={mode} />
      <CursorGlow />

      {flash > 0 && <span className="mode-flash" key={flash} aria-hidden="true" />}

      <div className="page">
        <Nav mode={mode} onMode={switchMode} onContact={() => openModal()} />

        <main key={mode} className="mode-swap">
          <Hero mode={mode} content={content} onPrimary={() => openModal()} />
          <Marquee items={content.marquee} />
          <Features data={content.features} />
          <Wave />
          <Offers data={content.offers} mode={mode} onAction={openModal} />
          <Stats items={content.stats} />
          <Process data={content.process} />
          <Testimonials data={content.testimonials} />
          <About blocks={ABOUT[mode]} />
          <Founder />
          <Contact cta={content.cta} onPrimary={() => openModal()} />
        </main>

        <Footer mode={mode} onMode={switchMode} />
      </div>

      <ContactModal
        open={modal.open}
        mode={mode}
        preset={modal.preset}
        onClose={() => setModal({ open: false, preset: '' })}
        onToast={showToast}
      />

      {toast && (
        <div className={`toast ${toast.type === 'err' ? 'err' : 'ok'}`} role="status">
          {toast.msg}
        </div>
      )}
    </>
  );
}
