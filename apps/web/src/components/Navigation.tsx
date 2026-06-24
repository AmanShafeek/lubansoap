'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  onOrderClick: () => void;
}

export default function Navigation({ onOrderClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Ritual', href: '#ritual' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
          background: isScrolled ? 'rgba(10,10,6,0.96)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          height: isScrolled ? '64px' : '80px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: cormorant,
              fontSize: '1.2rem',
              color: '#c9a84c',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              fontWeight: 400,
              transition: 'opacity 0.3s ease',
            }}
          >
            Legacy&apos;s Maquillage
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center" style={{ gap: '48px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: lato,
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: 'rgba(232,213,163,0.75)',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.3s ease',
                  fontWeight: 400,
                }}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onOrderClick}
              className="btn-gold-filled shimmer-sweep"
              style={{ padding: '12px 28px', fontSize: '0.58rem' }}
            >
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            aria-label="Open menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: '24px', height: '1px', background: '#c9a84c' }} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1001,
          background: '#0a0a06',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          opacity: isMobileMenuOpen ? 1 : 0,
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          pointerEvents: isMobileMenuOpen ? 'all' : 'none',
        }}
      >
        {/* Top border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
          }}
        />

        {/* Close */}
        <button
          style={{
            position: 'absolute',
            top: '28px',
            right: '32px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#c9a84c',
            fontSize: '1.4rem',
            lineHeight: 1,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Brand mark */}
        <p
          style={{
            fontFamily: cormorant,
            fontSize: '1rem',
            color: 'rgba(201,168,76,0.4)',
            letterSpacing: '0.1em',
            position: 'absolute',
            top: '30px',
            left: '32px',
          }}
        >
          Legacy&apos;s Maquillage
        </p>

        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontFamily: cormorant,
              fontSize: '2.8rem',
              color: '#f5f0e8',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              fontWeight: 300,
              transition: 'color 0.3s ease',
              animationDelay: `${idx * 0.07}s`,
            }}
          >
            {link.name}
          </Link>
        ))}

        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            onOrderClick();
          }}
          className="btn-gold-filled"
          style={{ marginTop: '20px' }}
        >
          Order Now
        </button>

        {/* Bottom ornament */}
        <p
          style={{
            fontFamily: cormorant,
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: 'rgba(201,168,76,0.3)',
            position: 'absolute',
            bottom: '32px',
            letterSpacing: '0.1em',
          }}
        >
          Ancient Wisdom. Timeless Beauty.
        </p>
      </div>

      <style jsx global>{`
        .nav-link:hover {
          color: #c9a84c !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.35s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
