'use client';

import React, { useEffect, useRef } from 'react';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  const videoUrl = '/bg-video.mp4?v=2';
  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.scrollY;
        // Parallax scroll animation
        videoRef.current.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a06',
      }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          transformOrigin: 'center',
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Cinematic gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(0,0,0,0.42)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to top, rgba(10,10,6,0.92) 0%, rgba(10,10,6,0.1) 40%, rgba(10,10,6,0.35) 100%)',
        }}
      />
      {/* Side vignettes */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to right, rgba(10,10,6,0.35) 0%, transparent 30%, transparent 70%, rgba(10,10,6,0.35) 100%)',
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: lato,
            fontSize: '0.58rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '32px',
            fontWeight: 400,
            animationDelay: '0.1s',
          }}
        >
          Legacy&apos;s Maquillage Presents
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: cormorant,
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: '28px',
            animationDelay: '0.25s',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(2rem, 6.5vw, 6rem)',
              color: '#f5f0e8',
              marginBottom: '8px',
              whiteSpace: 'nowrap',
            }}
          >
            The Power of Luban.
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              color: '#c9a84c',
              fontStyle: 'italic',
            }}
          >
            Nature&apos;s Most Revered Secret for Timeless Skin.
          </span>
        </h1>

        {/* Gold divider */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
            animationDelay: '0.4s',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
            }}
          />
        </div>

        {/* Subline */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: lato,
            fontSize: '0.78rem',
            letterSpacing: '0.14em',
            color: '#e8d5a3',
            fontWeight: 300,
            marginBottom: '52px',
            maxWidth: '480px',
            margin: '0 auto 52px auto',
            lineHeight: 1.7,
            animationDelay: '0.5s',
          }}
        >
          A premium Ayurvedic beauty ritual, rooted in heritage.
        </p>

        {/* CTA */}
        <div className="animate-fade-up" style={{ animationDelay: '0.65s' }}>
          <button
            onClick={onOrderClick}
            className="shimmer-sweep"
            style={{
              border: '1px solid #c9a84c',
              color: '#c9a84c',
              background: 'transparent',
              padding: '20px 56px',
              fontFamily: lato,
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 400,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.45s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'linear-gradient(135deg, #c9a84c, #e8d5a3, #c9a84c)';
              el.style.color = '#0a0a06';
              el.style.borderColor = 'transparent';
              el.style.boxShadow = '0 12px 48px rgba(201,168,76,0.3)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.color = '#c9a84c';
              el.style.borderColor = '#c9a84c';
              el.style.boxShadow = 'none';
            }}
          >
            Order Now — Discover the Ritual
          </button>
        </div>

        {/* Arabic script */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: cormorant,
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'rgba(201,168,76,0.4)',
            marginTop: '36px',
            letterSpacing: '0.05em',
            animationDelay: '0.8s',
          }}
        >
          صابون لبان حوجري
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontFamily: lato,
            fontSize: '0.48rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#a08530',
            fontWeight: 400,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, #c9a84c, transparent)',
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes scrollLineAnim {
          0% {
            transform: scaleY(0);
            transform-origin: top;
            opacity: 1;
          }
          60% {
            transform: scaleY(1);
            transform-origin: top;
            opacity: 0.6;
          }
          100% {
            transform: scaleY(0);
            transform-origin: bottom;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
