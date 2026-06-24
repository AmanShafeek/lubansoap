'use client';

import React from 'react';

const steps = [
  {
    num: 'I',
    title: 'Awaken',
    label: 'Preparation',
    desc: 'Wet your skin with warm water, allowing pores to open for the ritual ahead.',
  },
  {
    num: 'II',
    title: 'Lather',
    label: 'Activation',
    desc: 'Work into a rich, silky botanical foam between your palms.',
  },
  {
    num: 'III',
    title: 'Nourish',
    label: 'Absorption',
    desc: 'Massage gently in slow circles, letting nine ancient ingredients absorb.',
  },
  {
    num: 'IV',
    title: 'Reveal',
    label: 'Transformation',
    desc: 'Rinse and reveal naturally radiant, luminous, heritage-touched skin.',
  },
];

export default function Ritual() {
  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  return (
    <section style={{ background: '#f5f0e8', padding: '140px 24px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span
            style={{ display: 'block', color: '#a08530', fontSize: '1.1rem', marginBottom: '20px' }}
          >
            ✦
          </span>
          <h2
            style={{
              fontFamily: cormorant,
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              color: '#0a0a06',
              fontWeight: 300,
              marginBottom: '12px',
            }}
          >
            Your Daily Ritual
          </h2>
          <div
            style={{ width: '36px', height: '1px', background: '#a08530', margin: '20px auto 0' }}
          />
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line — desktop only */}
          <div
            style={{
              display: 'none',
              position: 'absolute',
              top: '44px',
              left: 'calc(12.5% + 44px)',
              right: 'calc(12.5% + 44px)',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(160,133,48,0.3) 15%, rgba(160,133,48,0.3) 85%, transparent 100%)',
              zIndex: 0,
            }}
            className="lg-line"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '60px 32px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="animate-on-scroll"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0',
                  transitionDelay: `${idx * 0.14}s`,
                }}
              >
                {/* Circle */}
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    borderRadius: '50%',
                    border: '1px solid rgba(160,133,48,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: cormorant,
                    fontSize: '1.5rem',
                    color: '#a08530',
                    background: '#f5f0e8',
                    transition: 'all 0.45s ease',
                    cursor: 'default',
                    marginBottom: '28px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = '#c9a84c';
                    el.style.color = '#f5f0e8';
                    el.style.borderColor = '#c9a84c';
                    el.style.boxShadow = '0 0 0 6px rgba(201,168,76,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = '#f5f0e8';
                    el.style.color = '#a08530';
                    el.style.borderColor = 'rgba(160,133,48,0.5)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {step.num}
                </div>

                {/* Label */}
                <span
                  style={{
                    fontFamily: lato,
                    fontSize: '0.55rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.28em',
                    color: '#a08530',
                    fontWeight: 400,
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  {step.label}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: cormorant,
                    fontSize: '1.7rem',
                    color: '#0a0a06',
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.title}
                </h3>

                {/* Thin line */}
                <div
                  style={{
                    width: '20px',
                    height: '1px',
                    background: 'rgba(160,133,48,0.4)',
                    marginBottom: '16px',
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.8rem',
                    lineHeight: 1.95,
                    color: 'rgba(10,10,6,0.55)',
                    fontWeight: 300,
                    maxWidth: '200px',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .lg-line {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
