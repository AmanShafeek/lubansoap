'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function BrandStory() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animated, setAnimated] = useState(false);

  const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
  const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.25 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section style={{ background: '#f5f0e8', padding: '140px 24px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="lg:grid-cols-brand-story"
      >
        {/* ── Text Content ── */}
        <div className="animate-on-scroll" style={{ maxWidth: '600px' }}>
          {/* Ornament + heading */}
          <div style={{ marginBottom: '48px' }}>
            <span
              style={{
                display: 'block',
                color: '#a08530',
                fontSize: '1.1rem',
                marginBottom: '20px',
              }}
            >
              ✦
            </span>
            <h2
              style={{
                fontFamily: cormorant,
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                color: '#0a0a06',
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: '8px',
              }}
            >
              The Story Behind
            </h2>
            <h2
              style={{
                fontFamily: cormorant,
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                color: '#0a0a06',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              the Soap
            </h2>
            <div
              style={{ width: '36px', height: '1px', background: '#a08530', marginTop: '24px' }}
            />
          </div>

          {/* Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p
              style={{
                fontFamily: lato,
                fontSize: '0.9rem',
                lineHeight: 1.95,
                color: 'rgba(10,10,6,0.72)',
                fontWeight: 300,
              }}
            >
              Luban frankincense — treasured across ancient Arabia, burned in temples, traded on
              spice routes, used by healers and queens for centuries of beauty ritual. It is the
              essence of history, captured in a single, sacred resin.
            </p>
            <p
              style={{
                fontFamily: lato,
                fontSize: '0.9rem',
                lineHeight: 1.95,
                color: 'rgba(10,10,6,0.72)',
                fontWeight: 300,
              }}
            >
              Legacy&apos;s Maquillage was born from conviction that the world&apos;s most powerful
              beauty secrets live not in labs but in traditions — Ayurvedic botanicals of Kerala,
              the golden turmeric fields, the cooling vetiver roots.
            </p>
            <p
              style={{
                fontFamily: lato,
                fontSize: '0.9rem',
                lineHeight: 1.95,
                color: 'rgba(10,10,6,0.72)',
                fontWeight: 300,
              }}
            >
              Nine ingredients. One bar. A daily ritual that connects you to something older,
              quieter, and more enduring than the noise of modern beauty culture.
            </p>
          </div>

          {/* Pull quote */}
          <div
            style={{
              marginTop: '52px',
              paddingLeft: '32px',
              borderLeft: '1px solid rgba(160,133,48,0.45)',
            }}
          >
            <p
              style={{
                fontFamily: cormorant,
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                color: '#a08530',
                lineHeight: 1.5,
              }}
            >
              &ldquo;Not merely a soap.
              <br />A ritual of heritage.&rdquo;
            </p>
          </div>
        </div>

        {/* ── Botanical SVG ── */}
        <div
          className="animate-on-scroll"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '480px',
          }}
        >
          {/* Radial glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <svg
            ref={svgRef}
            viewBox="0 0 380 500"
            style={{
              width: '100%',
              maxWidth: '360px',
              height: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ── MAIN TRUNK ── */}
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M190 470 C190 440 185 400 188 360 C190 320 185 270 188 230 C190 190 185 150 186 110 C187 80 182 50 185 30"
              stroke="#c9a84c"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* ── MAIN BRANCHES ── */}
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M188 380 C175 365 145 345 110 320 C85 305 60 295 40 285"
              stroke="#a08530"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{ animationDelay: '0.3s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M188 340 C205 320 235 295 268 270 C292 252 318 240 340 232"
              stroke="#a08530"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{ animationDelay: '0.45s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M187 250 C172 235 148 215 122 195 C100 178 78 168 58 162"
              stroke="#a08530"
              strokeWidth="1.4"
              strokeLinecap="round"
              style={{ animationDelay: '0.6s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M187 210 C200 192 226 172 255 155 C278 142 304 134 325 128"
              stroke="#a08530"
              strokeWidth="1.4"
              strokeLinecap="round"
              style={{ animationDelay: '0.75s' }}
            />

            {/* ── SECONDARY BRANCHES ── */}
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M40 285 C28 275 18 258 12 240"
              stroke="#a08530"
              strokeWidth="1"
              strokeLinecap="round"
              style={{ animationDelay: '0.9s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M58 162 C44 150 32 134 28 116"
              stroke="#a08530"
              strokeWidth="0.9"
              strokeLinecap="round"
              style={{ animationDelay: '1s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M340 232 C352 218 358 200 358 182"
              stroke="#a08530"
              strokeWidth="0.9"
              strokeLinecap="round"
              style={{ animationDelay: '0.9s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M186 130 C170 115 152 96 140 76"
              stroke="#a08530"
              strokeWidth="1.1"
              strokeLinecap="round"
              style={{ animationDelay: '1.1s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M186 130 C202 112 220 95 236 78"
              stroke="#a08530"
              strokeWidth="1.1"
              strokeLinecap="round"
              style={{ animationDelay: '1.15s' }}
            />
            <path
              className={animated ? 'draw-path animate-draw' : 'draw-path'}
              d="M185 85 C178 72 170 56 168 40"
              stroke="#c9a84c"
              strokeWidth="1"
              strokeLinecap="round"
              style={{ animationDelay: '1.3s' }}
            />

            {/* ── RESIN DROPS at branch tips ── */}
            {[
              { cx: 12, cy: 240, rx: 5, ry: 8, delay: '1.4s' },
              { cx: 28, cy: 116, rx: 4, ry: 7, delay: '1.5s' },
              { cx: 358, cy: 182, rx: 4, ry: 7, delay: '1.5s' },
              { cx: 140, cy: 76, rx: 3.5, ry: 6, delay: '1.6s' },
              { cx: 236, cy: 78, rx: 3.5, ry: 6, delay: '1.6s' },
              { cx: 168, cy: 40, rx: 3, ry: 5, delay: '1.7s' },
            ].map((drop, i) => (
              <ellipse
                key={i}
                cx={drop.cx}
                cy={drop.cy}
                rx={drop.rx}
                ry={drop.ry}
                fill="#c9a84c"
                opacity="0.85"
                className={animated ? 'draw-path animate-draw' : 'draw-path'}
                style={{ animationDelay: drop.delay }}
              />
            ))}

            {/* ── SMALL LEAF PAIRS on branches ── */}
            {[
              { x1: 92, y1: 310, x2: 88, y2: 298 },
              { x1: 65, y1: 175, x2: 70, y2: 162 },
              { x1: 306, y1: 250, x2: 316, y2: 238 },
            ].map((leaf, i) => (
              <g key={i}>
                <path
                  d={`M${leaf.x1} ${leaf.y1} Q${leaf.x1 - 8} ${leaf.y1 - 8} ${leaf.x2} ${leaf.y2}`}
                  stroke="#a08530"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  fill="none"
                  className={animated ? 'draw-path animate-draw' : 'draw-path'}
                  style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                />
                <path
                  d={`M${leaf.x1} ${leaf.y1} Q${leaf.x1 + 8} ${leaf.y1 - 6} ${leaf.x2} ${leaf.y2}`}
                  stroke="#a08530"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  fill="none"
                  className={animated ? 'draw-path animate-draw' : 'draw-path'}
                  style={{ animationDelay: `${1.25 + i * 0.1}s` }}
                />
              </g>
            ))}

            {/* ── FLOATING RESIN CRYSTALS ── */}
            {[
              { cx: 155, cy: 155, r: 1.8 },
              { cx: 248, cy: 120, r: 2.2 },
              { cx: 290, cy: 310, r: 1.4 },
              { cx: 82, cy: 340, r: 1.6 },
              { cx: 320, cy: 165, r: 1.2 },
              { cx: 110, cy: 240, r: 1.5 },
            ].map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#c9a84c" opacity="0.5" />
            ))}

            {/* ── LATIN NAME ── */}
            <text
              x="190"
              y="494"
              textAnchor="middle"
              fill="#a08530"
              fontSize="8.5"
              letterSpacing="5"
              style={{ fontFamily: lato, opacity: 0.7 }}
            >
              BOSWELLIA SACRA
            </text>
          </svg>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .lg\\:grid-cols-brand-story {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
        .draw-path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
        }
        .draw-path.animate-draw {
          animation: drawStroke 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes drawStroke {
          from {
            stroke-dashoffset: 1200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
