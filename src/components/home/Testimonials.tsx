'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useDragControls } from 'framer-motion';

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

interface Testimonial {
  id:         number;
  name:       string;
  role:       string;
  sector:     string;
  quote:      string;
  badge:      string;
  initials:   string;
  avatarFrom: string;
  avatarTo:   string;
  borderActive: string;
  glowActive:   string;
}

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name:     'Dr. Sarah Chen',
    role:     'Genomic Researcher',
    sector:   'Stanford Bioengineering Lab',
    quote:    'SYNTIX solves a problem we\'ve had for decades. I can now run computations on patient genomic data without ever seeing the raw sequences. FHE isn\'t just a feature here — it\'s the architecture.',
    badge:    'Genomics Expert',
    initials: 'SC',
    avatarFrom:   '#00E5FF',
    avatarTo:     '#22d3ee',
    borderActive: 'rgba(0,229,255,0.35)',
    glowActive:   'rgba(0,229,255,0.06)',
  },
  {
    id: 2,
    name:     'Marcus Webb',
    role:     'Protocol Lead',
    sector:   'Story Protocol',
    quote:    'The IP-NFT implementation is the most sophisticated I\'ve seen in biotech. These aren\'t just tokens — they\'re programmable licensing agreements that evolve with the research. This is what Web3 was supposed to be.',
    badge:    'Blockchain Builder',
    initials: 'MW',
    avatarFrom:   '#6366F1',
    avatarTo:     '#818CF8',
    borderActive: 'rgba(99,102,241,0.35)',
    glowActive:   'rgba(99,102,241,0.06)',
  },
  {
    id: 3,
    name:     'Dr. Amara Okonkwo',
    role:     'Chief Medical Officer',
    sector:   'Lagos Precision Medicine Institute',
    quote:    'In Africa, genomic data has been extracted without compensation for generations. SYNTIX finally gives patients — not corporations — the sovereignty over their biological information. This is medicine\'s next frontier.',
    badge:    'Clinical Medicine',
    initials: 'AO',
    avatarFrom:   '#a855f7',
    avatarTo:     '#ec4899',
    borderActive: 'rgba(168,85,247,0.35)',
    glowActive:   'rgba(168,85,247,0.06)',
  },
  {
    id: 4,
    name:     'Kenji Tanaka',
    role:     'DeSci Protocol Researcher',
    sector:   'Molecule DAO',
    quote:    'SYNTIX is the missing infrastructure layer for decentralized science. When researchers can license data programmatically through ZK-verified proofs, you eliminate the gatekeeping that\'s slowed biomedical research for 50 years.',
    badge:    'DeSci Research',
    initials: 'KT',
    avatarFrom:   '#22d3ee',
    avatarTo:     '#00E5FF',
    borderActive: 'rgba(34,211,238,0.35)',
    glowActive:   'rgba(34,211,238,0.06)',
  },
];

// ─────────────────────────────────────────────────────────────
// useInterval HOOK
// ─────────────────────────────────────────────────────────────

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// ─────────────────────────────────────────────────────────────
// TESTIMONIAL CARD
// ─────────────────────────────────────────────────────────────

interface CardProps {
  t:        Testimonial;
  isActive: boolean;
}

const TestimonialCard = ({ t, isActive }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
    whileHover={{ y: -4, scale: 1.012 }}
    style={{
      border:     `1px solid ${isActive ? t.borderActive : 'rgba(255,255,255,0.07)'}`,
      boxShadow:  isActive ? `0 0 60px ${t.glowActive}` : 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    }}
    className="relative rounded-2xl p-8 md:p-10 backdrop-blur-xl bg-white/[0.03] overflow-hidden h-full"
  >
    {/* Decorative large opening quote */}
    <div
      className="absolute top-4 right-6 text-[7rem] leading-none select-none pointer-events-none"
      style={{ color: t.avatarFrom, opacity: 0.06 }}
      aria-hidden="true"
    >
      &#8220;
    </div>

    {/* Quote text */}
    <blockquote className="relative z-10 text-gray-300 text-lg leading-relaxed mb-8">
      &#8220;{t.quote}&#8221;
    </blockquote>

    {/* Author row */}
    <div className="relative z-10 flex items-center gap-4">
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm text-white flex-shrink-0 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})` }}
      >
        {t.initials}
      </div>

      {/* Name + role */}
      <div className="min-w-0">
        <p className="font-semibold text-white leading-tight truncate">{t.name}</p>
        <p className="text-sm text-gray-400 truncate">{t.role}</p>
        <p className="text-xs text-gray-600 truncate">{t.sector}</p>
      </div>

      {/* Sector badge */}
      <span
        className="ml-auto flex-shrink-0 text-xs px-3 py-1 rounded-full border"
        style={{
          color:           t.avatarFrom,
          borderColor:     `${t.avatarFrom}33`,
          backgroundColor: `${t.avatarFrom}0D`,
        }}
      >
        {t.badge}
      </span>
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused,    setIsPaused]    = useState(false);
  const dragControls = useDragControls();
  const len = TESTIMONIALS.length;

  const next = useCallback(() => setActiveIndex(i => (i + 1) % len), [len]);
  const prev = useCallback(() => setActiveIndex(i => (i - 1 + len) % len), [len]);

  useInterval(next, isPaused ? null : 4000);

  return (
    <section id="testimonials" className="relative py-28 bg-hero overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-biomarker/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-biomarker uppercase tracking-[0.28em] text-xs mb-4"
          >
            Trusted by builders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white tracking-tight"
          >
            What the{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-biomarker to-indigo">
              field says
            </span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={(e) => dragControls.start(e)}
        >
          <motion.div
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60)  next();
              else if (info.offset.x > 60) prev();
            }}
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            className="flex select-none"
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="min-w-full px-2 md:px-10">
                <TestimonialCard t={t} isActive={i === activeIndex} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              animate={{
                width:           i === activeIndex ? 28 : 8,
                backgroundColor: i === activeIndex ? '#00E5FF' : 'rgba(255,255,255,0.18)',
                opacity:         i === activeIndex ? 1 : 0.5,
              }}
              transition={{ duration: 0.28 }}
              className="h-2 rounded-full flex-shrink-0"
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-gray-600 text-sm">
            {activeIndex + 1} / {len}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
