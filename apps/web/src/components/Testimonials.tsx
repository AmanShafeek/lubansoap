'use client';

import React from 'react';

const reviews = [
  {
    stars: 5,
    text: 'My skin has never felt this soft or luminous. The frankincense scent is divine — like being transported to an ancient Arabian souk every single morning. This is non-negotiable now.',
    author: 'Fatima Al-Rashidi',
    location: 'Dubai, UAE',
    initial: 'F',
  },
  {
    stars: 5,
    text: "I have tried every luxury soap on the market. Legacy's Luban is in a different category entirely. The ingredients are powerful yet impossibly gentle. My skin glows from somewhere within.",
    author: 'Priya Menon',
    location: 'Bangalore, India',
    initial: 'P',
  },
  {
    stars: 5,
    text: 'The packaging alone signals something rare. Then you use it and realize the inside matches the outside completely. The goat milk and turmeric have genuinely transformed my skin.',
    author: 'Amira Hassan',
    location: 'London, UK',
    initial: 'A',
  },
];

export default function Testimonials() {
  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  return (
    <section style={{ background: '#ede7da', padding: 'clamp(60px, 12vw, 140px) clamp(16px, 4vw, 24px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              color: '#0a0a06',
              fontWeight: 300,
              marginBottom: '12px',
            }}
          >
            What Our Customers Say
          </h2>
          <div
            style={{ width: '36px', height: '1px', background: '#a08530', margin: '20px auto 0' }}
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2px',
            backgroundColor: 'rgba(160,133,48,0.12)',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="animate-on-scroll"
              style={{
                background: '#f5f0e8',
                padding: '60px 44px',
                borderBottom: '2px solid #c9a84c',
                transition: 'transform 0.45s ease, box-shadow 0.45s ease',
                transitionDelay: `${idx * 0.1}s`,
                position: 'relative',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Large decorative quote mark */}
              <span
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '36px',
                  fontFamily: cormorant,
                  fontSize: '6rem',
                  lineHeight: 1,
                  color: 'rgba(201,168,76,0.12)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '28px' }}>
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#c9a84c', fontSize: '0.75rem' }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: cormorant,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  lineHeight: 1.85,
                  color: 'rgba(10,10,6,0.82)',
                  marginBottom: '40px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                &ldquo;{rev.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Initial avatar */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(160,133,48,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: cormorant,
                    fontSize: '1.1rem',
                    color: '#a08530',
                    flexShrink: 0,
                  }}
                >
                  {rev.initial}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: lato,
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#0a0a06',
                      fontWeight: 600,
                      marginBottom: '3px',
                    }}
                  >
                    {rev.author}
                  </p>
                  <p
                    style={{
                      fontFamily: lato,
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      color: '#a08530',
                      fontWeight: 300,
                    }}
                  >
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
