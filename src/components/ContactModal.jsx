import { useEffect, useRef, useState } from 'react';
import { X, Send, ExternalLink, Sparkles } from 'lucide-react';
import { BRAND, CONTENT } from '../data/site';

const BLANK = { name: '', email: '', phone: '', topic: '', message: '' };

/**
 * Enquiry / enrollment form.
 *
 * The site is static (no backend), so a submit opens the visitor's mail client
 * with everything pre-composed to BrAInix, and the Google intake form stays
 * available as a second route.
 */
export default function ContactModal({ open, mode, preset, onClose, onToast }) {
  const [form, setForm] = useState(BLANK);
  const firstRef = useRef(null);
  const cfg = CONTENT[mode];
  const isEdu = mode === 'edu';

  useEffect(() => {
    if (!open) return undefined;
    setForm({ ...BLANK, topic: preset || cfg.offers.items[0].name });
    const t = setTimeout(() => firstRef.current?.focus(), 60);
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, preset, mode]);

  if (!open) return null;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return onToast('err', 'Please tell us your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return onToast('err', 'Please enter a valid email address.');

    const subject = isEdu
      ? `Course enrollment — ${form.topic}`
      : `Project enquiry — ${form.topic}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `${isEdu ? 'Course' : 'Service'}: ${form.topic}`,
      '',
      form.message || '(no additional details)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onToast('ok', 'Opening your mail app with the details filled in.');
    onClose();
    return undefined;
  };

  return (
    <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ position: 'relative' }} role="dialog" aria-modal="true" aria-label={isEdu ? 'Enrollment form' : 'Project enquiry form'}>
        <button type="button" className="modal-x" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <span className="eyebrow">
          <Sparkles size={13} />
          {isEdu ? 'Enrollment' : 'New project'}
        </span>
        <h2 style={{ fontSize: '1.7rem', marginBlock: 12 }}>
          {isEdu ? 'Reserve your seat' : 'Tell us what you need'}
        </h2>
        <p className="lede" style={{ fontSize: '0.92rem', marginBottom: 22 }}>
          {isEdu
            ? 'Fill this in and we will send the syllabus, batch dates and payment link to your inbox.'
            : 'A couple of lines is enough to start. You will get a timeline and a fixed quote back.'}
        </p>

        <form onSubmit={submit} noValidate>
          <div className="field-row">
            <div className="field">
              <label htmlFor="cm-name">Full name *</label>
              <input id="cm-name" ref={firstRef} value={form.name} onChange={set('name')} placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="cm-email">Email *</label>
              <input id="cm-email" type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" required />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="cm-phone">Phone</label>
              <input id="cm-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 …" />
            </div>
            <div className="field">
              <label htmlFor="cm-topic">{isEdu ? 'Course' : 'Service'}</label>
              <select id="cm-topic" value={form.topic} onChange={set('topic')}>
                {cfg.offers.items.map((o) => (
                  <option key={o.name} value={o.name}>
                    {o.name}
                  </option>
                ))}
                <option value={isEdu ? 'Not sure yet' : 'Something else'}>
                  {isEdu ? 'Not sure yet' : 'Something else'}
                </option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="cm-msg">{isEdu ? 'Anything we should know?' : 'Project details'}</label>
            <textarea
              id="cm-msg"
              value={form.message}
              onChange={set('message')}
              placeholder={isEdu ? 'Your background, goals, preferred batch timing…' : 'What you are building, rough budget, target launch date…'}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            <Send size={16} />
            {isEdu ? 'Send enrollment request' : 'Send enquiry'}
          </button>
        </form>

        <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 16, textAlign: 'center' }}>
          Prefer a form?{' '}
          <a href={BRAND.formHref} target="_blank" rel="noreferrer" className="link-btn" style={{ display: 'inline-flex' }}>
            Open the intake form
            <ExternalLink size={12} />
          </a>
        </p>
      </div>
    </div>
  );
}
