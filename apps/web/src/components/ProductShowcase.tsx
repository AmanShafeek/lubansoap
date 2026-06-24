'use client';

import React from 'react';

interface ProductShowcaseProps {
  onOrderClick: (step: number) => void;
}

const pillars = [
  {
    icon: '✦',
    title: '100% Natural',
    desc: 'No synthetics, no compromises.\nOnly what nature intended.',
  },
  {
    icon: '◈',
    title: 'Ayurvedic Heritage',
    desc: 'Thousands of years of botanical\nwisdom in every bar.',
  },
  {
    icon: '✦',
    title: 'Premium Ritual',
    desc: 'Transform cleansing into a\nluxurious intentional moment.',
  },
];

export default function ProductShowcase({ onOrderClick }: ProductShowcaseProps) {
  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  return (
    <section
      style={{
        background: '#0a0a06',
        padding: '140px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gold gradient bloom */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading block */}
        <div className="animate-on-scroll" style={{ marginBottom: '80px' }}>
          <span
            style={{ display: 'block', color: '#a08530', fontSize: '1.1rem', marginBottom: '24px' }}
          >
            ✦
          </span>
          <h2
            style={{
              fontFamily: cormorant,
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              color: '#f5f0e8',
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: '16px',
            }}
          >
            Luban Beauty Soap
          </h2>
          <p
            style={{
              fontFamily: cormorant,
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: '#a08530',
              letterSpacing: '0.08em',
              marginBottom: '28px',
            }}
          >
            صابون لبان حوجري
          </p>
          <div
            style={{
              width: '36px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
              margin: '0 auto 32px auto',
            }}
          />
          <p
            style={{
              fontFamily: lato,
              fontSize: '0.9rem',
              lineHeight: 1.95,
              color: 'rgba(232,213,163,0.6)',
              fontWeight: 300,
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            Legacy&apos;s Luban Beauty Soap brings together the richness of traditional herbal
            ingredients and the luxury of modern skincare — creating a daily ritual that celebrates
            nature, heritage, and timeless beauty.
          </p>
        </div>

        {/* Feature pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(201,168,76,0.12)',
            marginBottom: '80px',
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="animate-on-scroll"
              style={{
                background: '#0a0a06',
                borderTop: '2px solid #c9a84c',
                padding: '56px 40px',
                transition: 'background 0.4s ease',
                transitionDelay: `${idx * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#0e0e08';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = '#0a0a06';
              }}
            >
              <span
                style={{
                  display: 'block',
                  color: '#c9a84c',
                  fontSize: '1.2rem',
                  marginBottom: '20px',
                }}
              >
                {pillar.icon}
              </span>
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '1.6rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.8rem',
                  color: 'rgba(232,213,163,0.5)',
                  lineHeight: 1.9,
                  fontWeight: 300,
                  whiteSpace: 'pre-line',
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div
          className="animate-on-scroll"
          style={{
            border: '1px solid rgba(201,168,76,0.2)',
            padding: '80px 48px',
            background: '#0e0e08',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Grain */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.025,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: '300px 300px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontFamily: lato,
                fontSize: '0.55rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '24px',
                fontWeight: 400,
              }}
            >
              Begin Your Ritual
            </p>
            <h3
              style={{
                fontFamily: cormorant,
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: '#f5f0e8',
                fontWeight: 300,
                marginBottom: '12px',
              }}
            >
              Experience the Ritual
            </h3>
            <p
              style={{
                fontFamily: lato,
                fontSize: '0.62rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(232,213,163,0.45)',
                marginBottom: '48px',
                fontWeight: 400,
              }}
            >
              Handcrafted &nbsp;·&nbsp; Heritage Formula &nbsp;·&nbsp; Premium Natural
            </p>

            <div
              className="flex flex-col md:flex-row md:justify-center items-center"
              style={{ gap: '16px' }}
            >
              <button
                onClick={() => onOrderClick(1)}
                className="btn-gold-filled shimmer-sweep"
                style={{
                  minWidth: '260px',
                  gap: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '1rem' }}>🟢</span>
                Order on WhatsApp
              </button>
              <button
                onClick={() => onOrderClick(1)}
                className="btn-gold-outline"
                style={{ minWidth: '260px' }}
              >
                Order Here
              </button>
            </div>

            <p
              style={{
                fontFamily: cormorant,
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: 'rgba(160,133,48,0.45)',
                marginTop: '40px',
                letterSpacing: '0.05em',
              }}
            >
              Crafted by Legacy&apos;s Maquillage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
