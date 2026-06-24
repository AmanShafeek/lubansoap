'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import Ingredients from '@/components/Ingredients';
import ProductShowcase from '@/components/ProductShowcase';
import Ritual from '@/components/Ritual';
import BrandValues from '@/components/BrandValues';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';

export default function LandingPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [initialStep, setInitialStep] = useState(1);

  const openModal = (step = 1) => {
    setInitialStep(step);
    setIsOrderModalOpen(true);
  };

  const closeModal = () => setIsOrderModalOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-dark min-h-screen">
      <Navigation onOrderClick={() => openModal(1)} />

      <Hero onOrderClick={() => openModal(1)} />

      <section id="story">
        <BrandStory />
      </section>

      <section id="ingredients">
        <Ingredients />
      </section>

      <section id="showcase">
        <ProductShowcase onOrderClick={(step) => openModal(step)} />
      </section>

      <section id="ritual">
        <Ritual />
      </section>

      <section id="values">
        <BrandValues />
      </section>

      <section id="reviews">
        <Testimonials />
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section
        style={{
          background: '#0a0a06',
          padding: 'clamp(80px, 12vw, 160px) clamp(16px, 4vw, 32px)',
          textAlign: 'center',
          borderTop: '1px solid rgba(201,168,76,0.12)',
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
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '300px 300px',
            pointerEvents: 'none',
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="animate-on-scroll"
          style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <span
            style={{
              display: 'block',
              color: '#a08530',
              fontSize: '1.1rem',
              marginBottom: '28px',
            }}
          >
            ✦
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: '#f5f0e8',
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            Begin Your Ritual Today.
          </h2>
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
              margin: '0 auto 28px',
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-lato), 'Lato', system-ui, sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'rgba(232,213,163,0.5)',
              fontWeight: 300,
              marginBottom: '56px',
            }}
          >
            Legacy&apos;s Luban Beauty Soap — Nature&apos;s Legacy in Every Bar.
          </p>

          <div
            className="flex flex-col md:flex-row items-center justify-center"
            style={{
              gap: '16px',
            }}
          >
            <button
              onClick={() => openModal(1)}
              className="btn-gold-filled shimmer-sweep"
              style={{
                minWidth: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '1rem' }}>🟢</span>
              Order on WhatsApp
            </button>
            <button
              onClick={() => openModal(1)}
              className="btn-gold-outline"
              style={{ minWidth: '260px' }}
            >
              Order Here →
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {isOrderModalOpen && (
        <OrderModal isOpen={isOrderModalOpen} onClose={closeModal} initialStep={initialStep} />
      )}
    </main>
  );
}
