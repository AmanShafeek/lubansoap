'use client';

import React from 'react';

const values = [
  {
    num: 'I',
    title: 'Heritage',
    desc: "Rooted in centuries of Ayurvedic and Arabian wisdom. Every ingredient carries the memory of healers, traders, and queens who understood nature's power long before modern science gave it a name.",
  },
  {
    num: 'II',
    title: 'Purity',
    desc: 'Only the finest natural botanicals. No synthetics. No fillers. No compromise. Every ingredient is chosen for what it gives to your skin, not what it saves in production cost.',
  },
  {
    num: 'III',
    title: 'Luxury',
    desc: 'True luxury is not excess — it is intention. The quiet pleasure of something genuinely extraordinary. A ritual that makes the ordinary act of cleansing feel like something you do for yourself.',
  },
];

export default function BrandValues() {
  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  return (
    <section
      style={{
        background: '#0e0e08',
        padding: 'clamp(60px, 12vw, 140px) clamp(16px, 4vw, 24px)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '300px 300px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span
            style={{ display: 'block', color: '#a08530', fontSize: '1.1rem', marginBottom: '20px' }}
          >
            ✦
          </span>
          <h2
            style={{
              fontFamily: cormorant,
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              color: '#f5f0e8',
              fontWeight: 300,
            }}
          >
            What We Stand For
          </h2>
          <div
            style={{
              width: '36px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
              margin: '24px auto 0',
            }}
          />
        </div>

        {/* Value cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(201,168,76,0.08)',
          }}
        >
          {values.map((val, idx) => (
            <div
              key={idx}
              className="animate-on-scroll"
              style={{
                background: '#0e0e08',
                borderTop: '2px solid #c9a84c',
                padding: '64px 44px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease',
                transitionDelay: `${idx * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'scale(1.02)';
                el.style.boxShadow = '0 24px 80px rgba(201,168,76,0.14)';
                el.style.zIndex = '2';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'scale(1)';
                el.style.boxShadow = 'none';
                el.style.zIndex = '1';
              }}
            >
              {/* Background decorative numeral */}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-10px',
                  fontFamily: cormorant,
                  fontSize: '12rem',
                  lineHeight: 1,
                  color: 'rgba(201,168,76,0.04)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {val.num}
              </span>

              {/* Roman numeral accent */}
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.55rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.35em',
                  color: '#a08530',
                  marginBottom: '20px',
                  fontWeight: 400,
                }}
              >
                {val.num}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '2.4rem',
                  color: '#c9a84c',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  lineHeight: 1,
                }}
              >
                {val.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  background: 'rgba(201,168,76,0.3)',
                  marginBottom: '24px',
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.82rem',
                  lineHeight: 2,
                  color: 'rgba(232,213,163,0.52)',
                  fontWeight: 300,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                &ldquo;{val.desc}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
