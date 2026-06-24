'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [year, setYear] = useState('2025');
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  const explore = [
    { label: 'Our Story', href: '#story' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'The Ritual', href: '#ritual' },
    { label: 'Values', href: '#values' },
  ];

  const order = [
    { label: 'Order on WhatsApp', href: '#' },
    { label: 'Order Here', href: '#' },
    { label: 'Delivery Info', href: '#' },
  ];

  const linkStyle: React.CSSProperties = {
    fontFamily: lato,
    fontSize: '0.75rem',
    color: 'rgba(232,213,163,0.5)',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    fontWeight: 300,
    transition: 'color 0.3s ease',
    display: 'block',
  };

  const colHeadingStyle: React.CSSProperties = {
    fontFamily: lato,
    fontSize: '0.58rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: '#c9a84c',
    fontWeight: 400,
    marginBottom: '24px',
  };

  return (
    <footer
      style={{
        background: '#0a0a06',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '96px 32px 48px',
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
          marginBottom: '80px',
          marginTop: '-96px',
          marginLeft: '-32px',
          marginRight: '-32px',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '60px',
            marginBottom: '80px',
          }}
        >
          {/* Col 1 — Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <h2
              style={{
                fontFamily: cormorant,
                fontSize: '1.4rem',
                color: '#c9a84c',
                fontWeight: 300,
                letterSpacing: '0.05em',
                marginBottom: '20px',
              }}
            >
              Legacy&apos;s Maquillage
            </h2>
            <div
              style={{
                width: '24px',
                height: '1px',
                background: 'rgba(201,168,76,0.4)',
                marginBottom: '20px',
              }}
            />
            <p
              style={{
                fontFamily: cormorant,
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'rgba(201,168,76,0.5)',
                lineHeight: 1.8,
                marginBottom: '28px',
              }}
            >
              &ldquo;Ancient Wisdom.
              <br />
              Timeless Beauty.&rdquo;
            </p>
            <p
              style={{
                fontFamily: lato,
                fontSize: '0.72rem',
                color: 'rgba(232,213,163,0.38)',
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: '260px',
              }}
            >
              Bringing the sacred essence of Luban and Ayurvedic traditions to your daily skincare
              ritual.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '32px' }}>
              {[
                { label: 'Instagram', symbol: '◻' },
                { label: 'Facebook', symbol: '◻' },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  style={{
                    fontFamily: lato,
                    fontSize: '0.58rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(201,168,76,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontWeight: 400,
                  }}
                  className="footer-social"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <p style={colHeadingStyle}>Explore</p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={linkStyle} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Order */}
          <div>
            <p style={colHeadingStyle}>Order</p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {order.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={linkStyle} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Connect */}
          <div>
            <p style={colHeadingStyle}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.52rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    color: 'rgba(201,168,76,0.35)',
                    marginBottom: '6px',
                    fontWeight: 400,
                  }}
                >
                  WhatsApp
                </p>
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.82rem',
                    color: '#e8d5a3',
                    fontWeight: 300,
                  }}
                >
                  +91 XXXXXXXXXX
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.52rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    color: 'rgba(201,168,76,0.35)',
                    marginBottom: '6px',
                    fontWeight: 400,
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.82rem',
                    color: 'rgba(232,213,163,0.5)',
                    fontWeight: 300,
                  }}
                >
                  hello@legacysmaquillage.com
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: lato,
                    fontSize: '0.52rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.25em',
                    color: 'rgba(201,168,76,0.35)',
                    marginBottom: '6px',
                    fontWeight: 400,
                  }}
                >
                  Instagram
                </p>
                <Link
                  href="#"
                  style={{
                    fontFamily: lato,
                    fontSize: '0.82rem',
                    color: 'rgba(232,213,163,0.5)',
                    fontWeight: 300,
                    textDecoration: 'none',
                  }}
                  className="footer-link"
                >
                  @legacysmaquillage
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row md:justify-between items-center"
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: lato,
              fontSize: '0.58rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'rgba(232,213,163,0.25)',
              fontWeight: 400,
            }}
          >
            © {year} Legacy&apos;s Maquillage. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: cormorant,
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'rgba(160,133,48,0.5)',
            }}
          >
            &ldquo;Nature&apos;s Legacy in Every Bar.&rdquo;
          </p>
        </div>
      </div>

      <style jsx global>{`
        .footer-link:hover {
          color: #c9a84c !important;
        }
        .footer-social:hover {
          color: #c9a84c !important;
        }
      `}</style>
    </footer>
  );
}
