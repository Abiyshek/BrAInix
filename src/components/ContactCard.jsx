import React from 'react';
import { X, Mail, Phone } from 'lucide-react';

export function ContactCard({ isOpen, onClose }) {
  if (!isOpen) return null;

  const contactInfo = {
    email: 'hashedtechs@gmail.com',
    phone: '9994875475'
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="modal-overlay"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}
      >
        {/* Modal */}
        <div 
          className="modal-content"
          onClick={e => e.stopPropagation()}
          style={{
            backgroundColor: 'rgba(10, 20, 40, 0.95)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #00E5FF, #A78BFA)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Get in Touch
            </h2>
            <p style={{
              color: 'var(--muted)',
              fontSize: '0.95rem',
              lineHeight: 1.6
            }}>
              Reach out to us for more information about our courses and learning programs.
            </p>
          </div>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'rgba(0, 229, 255, 0.05)',
                border: '1px solid rgba(0, 229, 255, 0.1)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 229, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 229, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.1)';
              }}
            >
              <Mail size={24} color="#00E5FF" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Email</div>
                <div style={{ fontSize: '1rem', fontWeight: 500 }}>{contactInfo.email}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contactInfo.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'rgba(167, 139, 250, 0.05)',
                border: '1px solid rgba(167, 139, 250, 0.1)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.1)';
              }}
            >
              <Phone size={24} color="#A78BFA" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Phone</div>
                <div style={{ fontSize: '1rem', fontWeight: 500 }}>{contactInfo.phone}</div>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.85rem',
            color: 'var(--muted)',
            textAlign: 'center'
          }}>
            We'll get back to you as soon as possible
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
