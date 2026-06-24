'use client';

import React, { useState } from 'react';
import { X, MapPin, Loader2, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { toast } from 'sonner';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: number;
}

const WHATSAPP_NUMBER = '+91XXXXXXXXXX';
const PRICE_PER_BAR = 499;

const cormorant = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const lato = "var(--font-lato), 'Lato', system-ui, sans-serif";

/* ── Shared Input component ── */
function Field({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        style={{
          fontFamily: lato,
          fontSize: '0.52rem',
          textTransform: 'uppercase',
          letterSpacing: '0.28em',
          color: focused ? '#c9a84c' : 'rgba(160,133,48,0.65)',
          fontWeight: 400,
          transition: 'color 0.3s ease',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          background: 'transparent',
          border: 'none',
          borderBottom: `1px solid ${focused ? '#c9a84c' : 'rgba(201,168,76,0.22)'}`,
          color: '#f5f0e8',
          fontFamily: lato,
          fontSize: '0.85rem',
          fontWeight: 300,
          padding: '10px 0',
          outline: 'none',
          width: '100%',
          transition: 'border-color 0.3s ease',
        }}
      />
      {hint && (
        <p
          style={{
            fontFamily: lato,
            fontSize: '0.58rem',
            color: 'rgba(160,133,48,0.5)',
            fontWeight: 300,
          }}
        >
          {hint}
        </p>
      )}
    </div>
  );
}

export default function OrderModal({ isOpen, onClose, initialStep = 1 }: OrderModalProps) {
  const [step, setStep] = useState(initialStep);
  const [orderType, setOrderType] = useState<'whatsapp' | 'website' | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isLocationDetected, setIsLocationDetected] = useState(false);
  const [showManual, setShowManual] = useState(false);

  const [addr, setAddr] = useState({
    fullName: '',
    phone: '',
    house: '',
    street: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
  });

  const total = quantity * PRICE_PER_BAR;
  const totalSteps = 5;

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const detectLocation = () => {
    setIsLoadingLocation(true);
    if (!navigator.geolocation) {
      toast.error('Geolocation not supported');
      setIsLoadingLocation(false);
      setShowManual(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          if (data?.address) {
            const a = data.address;
            setAddr((prev) => ({
              ...prev,
              area: a.suburb || a.neighbourhood || a.village || '',
              city: a.city || a.town || a.municipality || '',
              state: a.state || '',
              pincode: a.postcode || '',
              street: a.road || '',
            }));
            setIsLocationDetected(true);
            toast.success('Location detected');
          }
        } catch {
          toast.error('Could not detect address');
          setShowManual(true);
        } finally {
          setIsLoadingLocation(false);
        }
      },
      () => {
        setIsLoadingLocation(false);
        toast.error('Location access denied');
        setShowManual(true);
      }
    );
  };

  const handleWhatsApp = () => {
    const msg = `Hello! I'd like to order Legacy's Luban Beauty Soap.

📦 Order Details:
• Product: Luban Beauty Soap × ${quantity}
• Total: ₹${total}

📍 Delivery Address:
• Name: ${addr.fullName}
• Phone: ${addr.phone}
• Address: ${addr.house}, ${addr.street ? addr.street + ', ' : ''}${addr.area ? addr.area + ', ' : ''}${addr.city}, ${addr.state} - ${addr.pincode}

Looking forward to my ritual! 🌿`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    next();
  };

  if (!isOpen) return null;

  const progress = step < 6 ? (step / totalSteps) * 100 : 100;

  /* ── Card chooser used in step 1 ── */
  const ChoiceCard = ({
    selected,
    onClick,
    icon,
    title,
    subtitle,
  }: {
    selected: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  }) => (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
        padding: '24px 28px',
        background: selected ? 'rgba(201,168,76,0.08)' : 'transparent',
        border: `1px solid ${selected ? '#c9a84c' : 'rgba(201,168,76,0.18)'}`,
        transition: 'all 0.35s ease',
        cursor: 'pointer',
        textAlign: 'left',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        if (!selected)
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.45)';
      }}
      onMouseLeave={(e) => {
        if (!selected)
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.18)';
      }}
    >
      {icon}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: lato,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color: '#c9a84c',
            fontWeight: 400,
            marginBottom: '4px',
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: lato,
            fontSize: '0.72rem',
            color: 'rgba(232,213,163,0.45)',
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      </div>
      {selected && (
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#c9a84c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Check size={11} color="#0a0a06" strokeWidth={2.5} />
        </div>
      )}
    </button>
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.88)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          background: '#0e0e08',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 0 120px rgba(201,168,76,0.08), 0 40px 80px rgba(0,0,0,0.5)',
          maxHeight: '90vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {/* Progress bar */}
        {step < 6 && (
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              height: '2px',
              background: 'rgba(201,168,76,0.08)',
            }}
          >
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #c9a84c, #e8d5a3)',
                width: `${progress}%`,
                transition: 'width 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
          </div>
        )}

        {/* Header */}
        <div
          style={{
            padding: '32px 36px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: cormorant,
                fontSize: '1.1rem',
                color: '#c9a84c',
                letterSpacing: '0.12em',
                fontWeight: 400,
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              Legacy&apos;s Maquillage
            </h2>
            {step < 6 && (
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.52rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: 'rgba(160,133,48,0.55)',
                  fontWeight: 400,
                }}
              >
                Step {step} of {totalSteps}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(201,168,76,0.6)',
              padding: '4px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(201,168,76,0.6)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '28px 36px 40px' }}>
          {/* ── STEP 1: Choose method ── */}
          {step === 1 && (
            <div>
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '1.8rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  marginBottom: '8px',
                }}
              >
                How would you like to order?
              </h3>
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.72rem',
                  color: 'rgba(232,213,163,0.4)',
                  fontWeight: 300,
                  marginBottom: '32px',
                }}
              >
                Choose your preferred ordering method.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ChoiceCard
                  selected={orderType === 'whatsapp'}
                  onClick={() => {
                    setOrderType('whatsapp');
                    next();
                  }}
                  icon={
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'rgba(37,211,102,0.08)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>🟢</span>
                    </div>
                  }
                  title="Order via WhatsApp"
                  subtitle="Chat with us directly · Fast · Personal · Easy"
                />
                <ChoiceCard
                  selected={orderType === 'website'}
                  onClick={() => {
                    setOrderType('website');
                    next();
                  }}
                  icon={
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'rgba(201,168,76,0.08)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <ShoppingBag size={20} color="#c9a84c" />
                    </div>
                  }
                  title="Order on Website"
                  subtitle="Quick checkout here · Secure · Instant"
                />
              </div>
            </div>
          )}

          {/* ── STEP 2: Product selection ── */}
          {step === 2 && (
            <div>
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '1.8rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  marginBottom: '28px',
                }}
              >
                Select Your Order
              </h3>

              {/* Product card */}
              <div
                style={{
                  border: '1px solid rgba(201,168,76,0.18)',
                  padding: '28px',
                  background: '#0a0a06',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '24px',
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: cormorant,
                        fontSize: '1.3rem',
                        color: '#c9a84c',
                        fontWeight: 300,
                        marginBottom: '4px',
                      }}
                    >
                      Luban Beauty Soap
                    </h4>
                    <p
                      style={{
                        fontFamily: cormorant,
                        fontStyle: 'italic',
                        fontSize: '0.8rem',
                        color: 'rgba(160,133,48,0.6)',
                      }}
                    >
                      Ancient Wisdom. Timeless Beauty.
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: lato,
                      fontSize: '1.1rem',
                      color: '#c9a84c',
                      fontWeight: 400,
                    }}
                  >
                    ₹{PRICE_PER_BAR}
                  </span>
                </div>

                <div
                  style={{
                    height: '1px',
                    background: 'rgba(201,168,76,0.1)',
                    marginBottom: '20px',
                  }}
                />

                {/* Qty selector */}
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span
                    style={{
                      fontFamily: lato,
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: 'rgba(232,213,163,0.45)',
                      fontWeight: 400,
                    }}
                  >
                    Quantity
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                    {[
                      {
                        icon: <Minus size={12} />,
                        action: () => setQuantity((q) => Math.max(1, q - 1)),
                      },
                      null,
                      { icon: <Plus size={12} />, action: () => setQuantity((q) => q + 1) },
                    ].map((btn, i) =>
                      btn === null ? (
                        <span
                          key={i}
                          style={{
                            width: '48px',
                            textAlign: 'center',
                            fontFamily: lato,
                            fontSize: '1rem',
                            color: '#c9a84c',
                            fontWeight: 400,
                          }}
                        >
                          {quantity}
                        </span>
                      ) : (
                        <button
                          key={i}
                          onClick={btn.action}
                          style={{
                            width: '36px',
                            height: '36px',
                            border: '1px solid rgba(201,168,76,0.3)',
                            background: 'transparent',
                            color: '#c9a84c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background =
                              'rgba(201,168,76,0.1)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                          }}
                        >
                          {btn.icon}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div
                  style={{ height: '1px', background: 'rgba(201,168,76,0.1)', margin: '20px 0' }}
                />

                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span
                    style={{
                      fontFamily: lato,
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#f5f0e8',
                      fontWeight: 600,
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontFamily: cormorant,
                      fontSize: '1.5rem',
                      color: '#c9a84c',
                      fontWeight: 300,
                    }}
                  >
                    ₹{total}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={prev} className="btn-gold-outline" style={{ flex: 1 }}>
                  ← Back
                </button>
                <button onClick={next} className="btn-gold-filled" style={{ flex: 2 }}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Location ── */}
          {step === 3 && (
            <div>
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '1.8rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  marginBottom: '8px',
                }}
              >
                Where shall we deliver?
              </h3>
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.72rem',
                  color: 'rgba(232,213,163,0.4)',
                  fontWeight: 300,
                  marginBottom: '32px',
                }}
              >
                We&apos;ll use your location for faster, accurate delivery.
              </p>

              {!isLocationDetected ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <button
                    onClick={detectLocation}
                    disabled={isLoadingLocation}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '40px 28px',
                      border: '1px solid rgba(201,168,76,0.2)',
                      background: 'transparent',
                      cursor: isLoadingLocation ? 'wait' : 'pointer',
                      transition: 'all 0.35s ease',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      if (!isLoadingLocation)
                        (e.currentTarget as HTMLButtonElement).style.borderColor =
                          'rgba(201,168,76,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        'rgba(201,168,76,0.2)';
                    }}
                  >
                    {isLoadingLocation ? (
                      <Loader2 size={28} color="#c9a84c" className="animate-spin" />
                    ) : (
                      <MapPin size={28} color="#c9a84c" />
                    )}
                    <div>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.65rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.22em',
                          color: '#c9a84c',
                          fontWeight: 400,
                        }}
                      >
                        {isLoadingLocation ? 'Detecting your location…' : 'Use My Current Location'}
                      </p>
                      {!isLoadingLocation && (
                        <p
                          style={{
                            fontFamily: lato,
                            fontSize: '0.68rem',
                            color: 'rgba(232,213,163,0.35)',
                            marginTop: '6px',
                            fontWeight: 300,
                          }}
                        >
                          We&apos;ll detect your location now for easier delivery
                        </p>
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setShowManual(true);
                      next();
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: lato,
                      fontSize: '0.65rem',
                      color: 'rgba(201,168,76,0.45)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                      transition: 'color 0.3s ease',
                      padding: '4px 0',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(201,168,76,0.45)';
                    }}
                  >
                    Or enter your address manually →
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div
                    style={{
                      padding: '20px 24px',
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Check size={16} color="#c9a84c" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.55rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.25em',
                          color: '#c9a84c',
                          marginBottom: '6px',
                          fontWeight: 400,
                        }}
                      >
                        Location Detected
                      </p>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.8rem',
                          color: 'rgba(232,213,163,0.6)',
                          fontWeight: 300,
                        }}
                      >
                        {[addr.area, addr.city, addr.state, addr.pincode]
                          .filter(Boolean)
                          .join(', ')}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={() => {
                        setIsLocationDetected(false);
                        setShowManual(true);
                        next();
                      }}
                      className="btn-gold-outline"
                      style={{ flex: 1, fontSize: '0.6rem' }}
                    >
                      Enter Manually
                    </button>
                    <button onClick={next} className="btn-gold-filled" style={{ flex: 1 }}>
                      Yes, Correct ✓
                    </button>
                  </div>
                </div>
              )}

              <div style={{ marginTop: '20px' }}>
                <button
                  onClick={prev}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: lato,
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(201,168,76,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                  }}
                >
                  ← Back
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 4: Delivery details ── */}
          {step === 4 && (
            <div>
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '1.8rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  marginBottom: '8px',
                }}
              >
                Delivery Details
              </h3>
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.72rem',
                  color: 'rgba(232,213,163,0.4)',
                  fontWeight: 300,
                  marginBottom: '32px',
                }}
              >
                Just a few more details for your delivery.
              </p>

              {/* Location pill */}
              {(addr.city || addr.state) && (
                <div
                  style={{
                    padding: '12px 20px',
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '28px',
                  }}
                >
                  <MapPin size={13} color="#a08530" />
                  <span
                    style={{
                      fontFamily: lato,
                      fontSize: '0.7rem',
                      color: 'rgba(201,168,76,0.65)',
                      fontWeight: 300,
                    }}
                  >
                    Delivering to: {[addr.city, addr.state].filter(Boolean).join(', ')}
                  </span>
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  marginBottom: '32px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Field
                    label="Full Name *"
                    value={addr.fullName}
                    onChange={(v) => setAddr((a) => ({ ...a, fullName: v }))}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Phone *"
                    value={addr.phone}
                    onChange={(v) => setAddr((a) => ({ ...a, phone: v }))}
                    placeholder="+91 XXXXXXXXXX"
                    type="tel"
                  />
                </div>
                <Field
                  label="House / Building Name *"
                  value={addr.house}
                  onChange={(v) => setAddr((a) => ({ ...a, house: v }))}
                  placeholder="Villa 42, Heritage Enclave"
                  hint="🏠 Be specific — this helps our delivery team find you."
                />
                <Field
                  label="Street / Landmark"
                  value={addr.street}
                  onChange={(v) => setAddr((a) => ({ ...a, street: v }))}
                  placeholder="Near Golden Square"
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Field
                    label="City *"
                    value={addr.city}
                    onChange={(v) => setAddr((a) => ({ ...a, city: v }))}
                  />
                  <Field
                    label="State *"
                    value={addr.state}
                    onChange={(v) => setAddr((a) => ({ ...a, state: v }))}
                  />
                </div>
                <Field
                  label="Pincode *"
                  value={addr.pincode}
                  onChange={(v) => setAddr((a) => ({ ...a, pincode: v }))}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={prev} className="btn-gold-outline" style={{ flex: 1 }}>
                  ← Back
                </button>
                <button
                  onClick={() => {
                    if (
                      !addr.fullName ||
                      !addr.phone ||
                      !addr.house ||
                      !addr.city ||
                      !addr.pincode
                    ) {
                      toast.error('Please fill in all required fields');
                      return;
                    }
                    next();
                  }}
                  className="btn-gold-filled"
                  style={{ flex: 2 }}
                >
                  Review Order →
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 5: Review ── */}
          {step === 5 && (
            <div>
              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '1.8rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  marginBottom: '8px',
                }}
              >
                Review Your Order
              </h3>
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.72rem',
                  color: 'rgba(232,213,163,0.4)',
                  fontWeight: 300,
                  marginBottom: '28px',
                }}
              >
                Everything look right? Let&apos;s complete your ritual.
              </p>

              {/* Summary */}
              <div
                style={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  padding: '28px',
                  background: '#0a0a06',
                  marginBottom: '28px',
                }}
              >
                {/* Product line */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(201,168,76,0.1)',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: cormorant,
                        fontSize: '1.1rem',
                        color: '#f5f0e8',
                        marginBottom: '3px',
                      }}
                    >
                      Luban Beauty Soap × {quantity}
                    </p>
                    <p
                      style={{
                        fontFamily: lato,
                        fontSize: '0.65rem',
                        color: 'rgba(201,168,76,0.45)',
                        fontWeight: 300,
                      }}
                    >
                      ₹{PRICE_PER_BAR} per bar
                    </p>
                  </div>
                  <span style={{ fontFamily: cormorant, fontSize: '1.4rem', color: '#c9a84c' }}>
                    ₹{total}
                  </span>
                </div>

                {/* Address */}
                <div style={{ paddingTop: '20px' }}>
                  <p
                    style={{
                      fontFamily: lato,
                      fontSize: '0.52rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.25em',
                      color: 'rgba(160,133,48,0.55)',
                      marginBottom: '10px',
                      fontWeight: 400,
                    }}
                  >
                    Delivering to
                  </p>
                  <p
                    style={{
                      fontFamily: lato,
                      fontSize: '0.8rem',
                      color: 'rgba(232,213,163,0.65)',
                      fontWeight: 300,
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    {addr.house}
                    {addr.street ? `, ${addr.street}` : ''}
                    {addr.area ? `, ${addr.area}` : ''}
                    <br />
                    {addr.city}, {addr.state} — {addr.pincode}
                  </p>
                  <div style={{ display: 'flex', gap: '40px' }}>
                    <div>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.52rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.2em',
                          color: 'rgba(160,133,48,0.45)',
                          marginBottom: '4px',
                          fontWeight: 400,
                        }}
                      >
                        Name
                      </p>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.8rem',
                          color: 'rgba(232,213,163,0.7)',
                          fontWeight: 300,
                        }}
                      >
                        {addr.fullName}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.52rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.2em',
                          color: 'rgba(160,133,48,0.45)',
                          marginBottom: '4px',
                          fontWeight: 400,
                        }}
                      >
                        Phone
                      </p>
                      <p
                        style={{
                          fontFamily: lato,
                          fontSize: '0.8rem',
                          color: 'rgba(232,213,163,0.7)',
                          fontWeight: 300,
                        }}
                      >
                        {addr.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={prev} className="btn-gold-outline" style={{ flex: 1 }}>
                  ← Back
                </button>
                {orderType === 'whatsapp' ? (
                  <button
                    onClick={handleWhatsApp}
                    className="btn-gold-filled"
                    style={{
                      flex: 2,
                      gap: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>🟢</span> Open WhatsApp
                  </button>
                ) : (
                  <button onClick={next} className="btn-gold-filled" style={{ flex: 2 }}>
                    ✦ Place Order
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── STEP 6: Success ── */}
          {step === 6 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px 0 20px',
              }}
            >
              {/* Animated check */}
              <div
                style={{
                  position: 'relative',
                  width: '100px',
                  height: '100px',
                  marginBottom: '36px',
                }}
              >
                <svg viewBox="0 0 100 100" width={100} height={100}>
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="rgba(201,168,76,0.15)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1.5"
                    strokeDasharray="289"
                    strokeDashoffset="289"
                    strokeLinecap="round"
                    style={{
                      animation: 'drawCircle 1s ease forwards',
                      transform: 'rotate(-90deg)',
                      transformOrigin: '50px 50px',
                    }}
                  />
                  <path
                    d="M30 50 L44 64 L70 36"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                    style={{ animation: 'drawCheck 0.5s ease 0.9s forwards' }}
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: cormorant,
                  fontSize: '2.8rem',
                  color: '#f5f0e8',
                  fontWeight: 300,
                  marginBottom: '16px',
                  lineHeight: 1.1,
                }}
              >
                Your Ritual Awaits.
              </h3>
              <p
                style={{
                  fontFamily: lato,
                  fontSize: '0.82rem',
                  color: 'rgba(232,213,163,0.5)',
                  fontWeight: 300,
                  maxWidth: '320px',
                  lineHeight: 1.8,
                  marginBottom: '8px',
                }}
              >
                Your order has been placed. We&apos;ll be in touch shortly to confirm your delivery.
              </p>
              <p
                style={{
                  fontFamily: cormorant,
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'rgba(201,168,76,0.55)',
                  marginBottom: '40px',
                }}
              >
                Thank you for choosing Legacy&apos;s Maquillage.
              </p>

              <button onClick={onClose} className="btn-gold-outline" style={{ minWidth: '200px' }}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes drawCircle {
          from {
            stroke-dashoffset: 289;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes drawCheck {
          from {
            stroke-dashoffset: 60;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
