'use client';

import React from 'react';

/* ─── Elegant botanical SVG icon per ingredient ─── */
function BotanicalIcon({ type }: { type: string }) {
  const stroke = '#c9a84c';
  const strokeDim = '#a08530';
  const w = 44;
  const h = 44;

  const icons: Record<string, React.ReactNode> = {
    luban: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <ellipse cx="22" cy="28" rx="8" ry="12" stroke={stroke} strokeWidth="1.2" />
        <path
          d="M22 16 C22 16 14 8 22 4 C30 8 22 16 22 16Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="22" cy="28" r="2.5" fill={stroke} opacity="0.6" />
        <path d="M18 24 Q22 20 26 24" stroke={strokeDim} strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
    coconut: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path d="M22 40 L22 14" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M22 14 C22 14 10 10 8 4 C16 2 22 14 22 14Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M22 18 C22 18 34 12 38 6 C30 3 22 18 22 18Z"
          stroke={strokeDim}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M22 22 C22 22 12 20 8 14"
          stroke={strokeDim}
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
    castor: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path
          d="M22 38 C22 38 10 28 10 18 C10 8 22 6 22 6 C22 6 34 8 34 18 C34 28 22 38 22 38Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M22 6 L22 38" stroke={strokeDim} strokeWidth="0.8" strokeLinecap="round" />
        <path d="M12 16 Q22 12 32 16" stroke={strokeDim} strokeWidth="0.8" strokeLinecap="round" />
        <path d="M10 22 Q22 18 34 22" stroke={strokeDim} strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
    aloe: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path d="M22 40 L22 20" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M22 20 C22 20 12 12 10 4"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 20 C22 20 32 12 34 4"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 26 C22 26 14 22 12 16"
          stroke={strokeDim}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M22 26 C22 26 30 22 32 16"
          stroke={strokeDim}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M22 32 C22 32 16 30 14 25"
          stroke={strokeDim}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M22 32 C22 32 28 30 30 25"
          stroke={strokeDim}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    turmeric: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path
          d="M8 30 Q14 28 20 32 Q26 28 32 30 Q28 38 22 40 Q16 38 8 30Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M22 32 L22 14" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M22 14 C22 14 14 10 12 4 C18 4 22 14 22 14Z"
          stroke={strokeDim}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M22 14 C22 14 30 10 32 4 C26 4 22 14 22 14Z"
          stroke={strokeDim}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ),
    neem: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path d="M22 40 L22 8" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M22 22 C22 22 12 18 8 12"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M22 22 C22 22 32 18 36 12"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <ellipse
          cx="8"
          cy="11"
          rx="4"
          ry="2.5"
          stroke={strokeDim}
          strokeWidth="0.9"
          transform="rotate(-20 8 11)"
        />
        <ellipse
          cx="36"
          cy="11"
          rx="4"
          ry="2.5"
          stroke={strokeDim}
          strokeWidth="0.9"
          transform="rotate(20 36 11)"
        />
        <path
          d="M22 30 C22 30 14 26 10 20"
          stroke={strokeDim}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          d="M22 30 C22 30 30 26 34 20"
          stroke={strokeDim}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <ellipse
          cx="10"
          cy="19"
          rx="3"
          ry="2"
          stroke={strokeDim}
          strokeWidth="0.8"
          transform="rotate(-15 10 19)"
        />
        <ellipse
          cx="34"
          cy="19"
          rx="3"
          ry="2"
          stroke={strokeDim}
          strokeWidth="0.8"
          transform="rotate(15 34 19)"
        />
      </svg>
    ),
    nalpamara: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <circle cx="22" cy="22" r="8" stroke={stroke} strokeWidth="1.2" />
        <path d="M22 6 L22 14" stroke={strokeDim} strokeWidth="1" strokeLinecap="round" />
        <path d="M22 30 L22 38" stroke={strokeDim} strokeWidth="1" strokeLinecap="round" />
        <path d="M6 22 L14 22" stroke={strokeDim} strokeWidth="1" strokeLinecap="round" />
        <path d="M30 22 L38 22" stroke={strokeDim} strokeWidth="1" strokeLinecap="round" />
        <path d="M10 10 L16 16" stroke={strokeDim} strokeWidth="0.9" strokeLinecap="round" />
        <path d="M28 28 L34 34" stroke={strokeDim} strokeWidth="0.9" strokeLinecap="round" />
        <path d="M34 10 L28 16" stroke={strokeDim} strokeWidth="0.9" strokeLinecap="round" />
        <path d="M16 28 L10 34" stroke={strokeDim} strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="22" cy="22" r="3" stroke={stroke} strokeWidth="1" fill="none" />
      </svg>
    ),
    vetiver: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path d="M22 40 L22 14" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M22 18 C20 12 16 8 12 4"
          stroke={strokeDim}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M22 18 C24 12 28 8 32 4"
          stroke={strokeDim}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M22 24 C19 18 14 16 10 12"
          stroke={strokeDim}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          d="M22 24 C25 18 30 16 34 12"
          stroke={strokeDim}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          d="M22 30 C18 26 14 24 10 22"
          stroke={strokeDim}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M22 30 C26 26 30 24 34 22"
          stroke={strokeDim}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path d="M22 40 C19 36 14 34 12 32" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
        <path d="M22 40 C25 36 30 34 32 32" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    goatmilk: (
      <svg viewBox="0 0 44 44" width={w} height={h} fill="none">
        <path
          d="M14 10 C14 10 10 16 10 26 C10 34 15 40 22 40 C29 40 34 34 34 26 C34 16 30 10 30 10 Z"
          stroke={stroke}
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M18 10 L18 4 C18 4 22 2 26 4 L26 10"
          stroke={strokeDim}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="22" cy="25" r="4" stroke={stroke} strokeWidth="0.9" opacity="0.6" />
        <path d="M14 22 Q22 18 30 22" stroke={strokeDim} strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  };

  return <div className="w-11 h-11 flex items-center justify-center">{icons[type] ?? null}</div>;
}

const ingredients = [
  {
    id: 'luban',
    name: 'Luban',
    subname: 'Frankincense Extract',
    description:
      'The sacred resin of Arabia — purifying, rejuvenating, revered for centuries as the crown jewel of natural beauty.',
    note: 'Hero Ingredient',
  },
  {
    id: 'coconut',
    name: 'Coconut Oil',
    subname: 'Cold-Pressed Virgin',
    description:
      'Deep cellular nourishment that softens, moisturizes, and leaves skin with a supple, healthy luminosity.',
    note: null,
  },
  {
    id: 'castor',
    name: 'Castor Oil',
    subname: 'Ricinus Communis',
    description:
      "Conditions as it cleanses — building a rich, silky lather that never strips the skin's natural moisture barrier.",
    note: null,
  },
  {
    id: 'aloe',
    name: 'Aloe Vera',
    subname: 'Aloe Barbadensis',
    description:
      "Nature's ultimate soother — instantly calms, hydrates, and refreshes, leaving skin cool and perfectly balanced.",
    note: null,
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    subname: 'Curcuma Longa',
    description:
      'The golden spice of Ayurveda, revered for millennia for its ability to reveal radiant, even-toned, glowing skin.',
    note: null,
  },
  {
    id: 'neem',
    name: 'Neem',
    subname: 'Azadirachta Indica',
    description:
      'A powerful Ayurvedic purifier — traditionally trusted to clarify, protect, and keep skin clear and healthy.',
    note: null,
  },
  {
    id: 'nalpamara',
    name: 'Nalpamara',
    subname: 'Sacred Bark Blend',
    description:
      'A sacred four-bark Ayurvedic blend, prized for its deep skin-toning and nourishing regenerative properties.',
    note: null,
  },
  {
    id: 'vetiver',
    name: 'Vetiver',
    subname: 'Ramacham · Kerala',
    description:
      'The aromatic cooling root of Kerala — refreshes skin, grounds the senses, and adds earthy botanical elegance.',
    note: null,
  },
  {
    id: 'goatmilk',
    name: 'Goat Milk',
    subname: 'Raw · Nourishing',
    description:
      'Rich in natural proteins and lactic acid — luxuriously creamy, deeply nourishing, impossibly soft skin.',
    note: null,
  },
];

export default function Ingredients() {
  return (
    <section className="section-padding bg-olive grain-overlay relative overflow-hidden">
      {/* Subtle radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="text-gold-dim text-xl block mb-6">✦</span>
          <h2
            className="font-cormorant text-5xl md:text-6xl text-cream mb-5"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif" }}
          >
            Nature&apos;s Most Treasured Ingredients
          </h2>
          <span className="gold-divider block mx-auto my-6" />
          <p
            className="uppercase tracking-[0.25em] text-[0.65rem] text-gold-dim"
            style={{ fontFamily: "var(--font-lato), 'Lato', system-ui, sans-serif" }}
          >
            Nine botanicals &nbsp;·&nbsp; Centuries of wisdom &nbsp;·&nbsp; One ritual
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {ingredients.map((item, idx) => (
            <div
              key={item.id}
              className="animate-on-scroll group relative bg-olive p-10 hover:bg-olive-mid transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${idx * 0.055}s` }}
            >
              {/* Gold top accent line that expands on hover */}
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-700" />

              {/* Index number */}
              <span
                className="absolute top-8 right-10 font-cormorant text-[4rem] leading-none text-gold/[0.05] select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="mb-7 relative z-10">
                <BotanicalIcon type={item.id} />
              </div>

              {/* Name */}
              <div className="mb-3 relative z-10">
                {item.note && (
                  <span
                    className="text-[0.52rem] uppercase tracking-[0.3em] text-gold-dim/80 block mb-2"
                    style={{ fontFamily: "var(--font-lato), 'Lato', system-ui, sans-serif" }}
                  >
                    {item.note}
                  </span>
                )}
                <h3
                  className="font-cormorant text-[1.45rem] text-gold leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-[0.6rem] uppercase tracking-[0.2em] text-gold-dim/60 mt-0.5"
                  style={{ fontFamily: "var(--font-lato), 'Lato', system-ui, sans-serif" }}
                >
                  {item.subname}
                </p>
              </div>

              {/* Divider */}
              <div className="w-6 h-[1px] bg-gold/25 mb-4" />

              {/* Description */}
              <p
                className="text-[0.81rem] leading-[1.95] font-light relative z-10"
                style={{
                  color: 'rgba(232, 213, 163, 0.55)',
                  fontFamily: "var(--font-lato), 'Lato', system-ui, sans-serif",
                }}
              >
                {item.description}
              </p>

              {/* Bottom hover glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
