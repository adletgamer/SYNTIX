'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ─── Layer data ─────────────────────────────────────────────── */
const LAYERS = [
  {
    id: 'compute',
    tier: 'Layer 01',
    label: 'The Compute Layer',
    sublabel: 'Privacy-First',
    tech: ['Inco Network', 'Zama', 'FHE'],
    function:
      'Enables "Blind Computation." Our AI models process biological signals while they remain encrypted, ensuring zero-knowledge exposure of raw genomic data.',
    color: '#00E5FF',   // biomarker cyan
    hex: 'biomarker',
    glow: 'rgba(0,229,255,0.18)',
    border: 'rgba(0,229,255,0.35)',
    icon: '🔒',
    badge: 'FHE Active',
  },
  {
    id: 'asset',
    tier: 'Layer 02',
    label: 'The Asset Layer',
    sublabel: 'Programmable IP',
    tech: ['Story Protocol', 'IP-NFTs'],
    function:
      'Every biomarker insight is minted as a programmable IP-NFT. This allows users to license their data to research labs or clinical trials autonomously, maintaining 100% royalty control.',
    color: '#818CF8',   // indigo
    hex: 'indigo',
    glow: 'rgba(129,140,248,0.18)',
    border: 'rgba(129,140,248,0.35)',
    icon: '🧬',
    badge: 'IP-NFT Minted',
  },
  {
    id: 'interface',
    tier: 'Layer 03',
    label: 'The Interface Layer',
    sublabel: 'High-Fidelity',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    function:
      'A high-performance, type-safe environment designed for clinical precision and fluid micro-interactions.',
    color: '#FFFFFF',
    hex: 'white',
    glow: 'rgba(255,255,255,0.08)',
    border: 'rgba(255,255,255,0.18)',
    icon: '⚡',
    badge: 'Type-Safe',
  },
];

/* ─── Architecture nodes for the blueprint diagram ──────────── */
const ARCH_NODES = [
  { id: 'user',   label: 'USER\nDevice',        x: '10%',  y: '50%', color: '#00E5FF' },
  { id: 'fhe',    label: 'FHE\nEncryption',     x: '30%',  y: '25%', color: '#00E5FF' },
  { id: 'zkp',    label: 'ZKP\nVerifier',       x: '30%',  y: '75%', color: '#818CF8' },
  { id: 'ai',     label: 'AI Model\n(Blind)',    x: '55%',  y: '50%', color: '#00E5FF' },
  { id: 'ip',     label: 'Story\nProtocol',     x: '78%',  y: '25%', color: '#818CF8' },
  { id: 'result', label: 'Health\nInsight',     x: '90%',  y: '50%', color: '#FFFFFF' },
];

/* ─── Card component ─────────────────────────────────────────── */
function LayerCard({ layer, index }: { layer: typeof LAYERS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: 'easeOut' }}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)`,
        border: `1px solid ${layer.border}`,
        boxShadow: `0 0 40px ${layer.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`,
      }}
      className="relative rounded-2xl p-8 flex flex-col gap-6 backdrop-blur-lg overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Corner glow accent */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-25 blur-2xl pointer-events-none"
        style={{ background: layer.color }}
      />

      {/* Tier label */}
      <div
        className="font-mono text-xs font-bold tracking-[0.2em] uppercase"
        style={{ color: layer.color }}
      >
        {layer.tier}
      </div>

      {/* Header */}
      <div>
        <div className="flex items-start gap-3 mb-1">
          <span className="text-2xl">{layer.icon}</span>
          <div>
            <h3 className="text-xl font-extrabold text-white leading-tight">{layer.label}</h3>
            <p className="font-mono text-xs mt-1" style={{ color: layer.color }}>
              {layer.sublabel}
            </p>
          </div>
        </div>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {layer.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              background: `${layer.color}15`,
              border: `1px solid ${layer.color}40`,
              color: layer.color,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: layer.border }} />

      {/* Function */}
      <p className="text-sm text-gray-300 leading-relaxed">{layer.function}</p>

      {/* Status badge */}
      <div
        className="self-start font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-2"
        style={{
          background: `${layer.color}10`,
          border: `1px solid ${layer.color}50`,
          color: layer.color,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: layer.color }}
        />
        {layer.badge}
      </div>
    </motion.div>
  );
}

/* ─── Blueprint Architecture Diagram ────────────────────────── */
function ArchDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0,229,255,0.04) 0%, rgba(129,140,248,0.06) 100%)',
        border: '1px solid rgba(0,229,255,0.2)',
        boxShadow: '0 0 60px rgba(0,229,255,0.06)',
      }}
    >
      {/* Blueprint grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,229,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connection lines */}
        {/* user → fhe */}
        <line x1="14%" y1="50%" x2="28%" y2="27%" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* user → zkp */}
        <line x1="14%" y1="50%" x2="28%" y2="73%" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* fhe → ai */}
        <line x1="34%" y1="27%" x2="52%" y2="50%" stroke="rgba(0,229,255,0.4)" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* zkp → ai */}
        <line x1="34%" y1="73%" x2="52%" y2="50%" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* ai → ip */}
        <line x1="60%" y1="50%" x2="76%" y2="27%" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* ai → result */}
        <line x1="60%" y1="50%" x2="88%" y2="50%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Animated data pulse on main path */}
        {inView && (
          <>
            <circle r="3" fill="#00E5FF">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 14% 50% Q 30% 27% 52% 50% L 88% 50%" />
            </circle>
            <circle r="2.5" fill="#818CF8" opacity="0.8">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 14% 50% Q 30% 73% 52% 50% Q 76% 27% 88% 50%" />
            </circle>
          </>
        )}
      </svg>

      {/* Nodes */}
      {ARCH_NODES.map((node) => (
        <div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
          style={{ left: node.x, top: node.y }}
        >
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-mono text-[9px] text-center leading-tight"
            style={{
              background: `${node.color}18`,
              border: `1px solid ${node.color}60`,
              color: node.color,
              boxShadow: `0 0 16px ${node.color}30`,
            }}
          >
            {node.label.split('\n').map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          </div>
        </div>
      ))}

      {/* Blueprint label */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan-500/50 uppercase tracking-widest">
        SYNTIX_ARCH_V2.BLUEPRINT
      </div>
    </motion.div>
  );
}

/* ─── FHE Privacy Toggler ────────────────────────────────────── */
function PrivacyToggler() {
  const [fheActive, setFheActive] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const REAL_RESULT = {
    glucose: '94 mg/dL  ✓ Normal',
    cortisol: '18.2 µg/dL  ⚠ Elevated',
    genomicRisk: 'BRCA1 variant: Low risk',
    pgxAlert: 'CYP2D6: Poor metabolizer — Avoid codeine',
  };

  const CIPHER_RESULT = {
    glucose:     'ΩΨ3f9αβ...0x8c2F ███████',
    cortisol:    '0xA7f★⊗3d...Ξ₿Δ ███████',
    genomicRisk: '0x★★★⊗...9f2Γ∴β ███████',
    pgxAlert:    'Δ0xΩ⊗ΨΓ...Ξ₿★3 ███████',
  };

  const displayed = fheActive ? CIPHER_RESULT : REAL_RESULT;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(129,140,248,0.05) 100%)',
        border: '1px solid rgba(0,229,255,0.25)',
        boxShadow: '0 0 60px rgba(0,229,255,0.08)',
      }}
    >
      {/* Window bar */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: 'rgba(0,229,255,0.15)', background: 'rgba(0,0,0,0.3)' }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="font-mono text-xs text-gray-400 tracking-widest">SYNTIX_HEALTH_DASHBOARD.tsx</span>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setFheActive((v) => !v)}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="Toggle FHE encryption"
        >
          <span
            className={`font-mono text-xs uppercase tracking-widest transition-colors ${
              fheActive ? 'text-cyan-400' : 'text-gray-500'
            }`}
          >
            Encryption: {fheActive ? 'FHE Active' : 'Decrypted'}
          </span>
          <div
            className="relative w-12 h-6 rounded-full transition-all duration-300"
            style={{
              background: fheActive
                ? 'linear-gradient(90deg, #00b4cc, #00E5FF)'
                : 'rgba(255,255,255,0.15)',
              boxShadow: fheActive ? '0 0 16px rgba(0,229,255,0.5)' : 'none',
            }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-md"
              animate={{ left: fheActive ? '26px' : '4px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </div>
        </button>
      </div>

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* Server view */}
        <div className="p-6 space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4">
            ⬛ Server Receives
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={fheActive ? 'cipher-server' : 'plain-server'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {Object.entries(displayed).map(([key, val]) => (
                <div
                  key={key}
                  className="font-mono text-xs px-4 py-3 rounded-lg"
                  style={{
                    background: fheActive ? 'rgba(0,229,255,0.06)' : 'rgba(255,255,255,0.04)',
                    border: fheActive ? '1px solid rgba(0,229,255,0.2)' : '1px solid rgba(255,255,255,0.08)',
                    color: fheActive ? '#00E5FF' : '#6b7280',
                  }}
                >
                  <span className="text-gray-500">{key}:</span>{' '}
                  <span>{fheActive ? CIPHER_RESULT[key as keyof typeof CIPHER_RESULT] : '[ ENCRYPTED ]'}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* User view */}
        <div className="p-6 space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4">
            🧬 You See
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={fheActive ? 'real-user' : 'cipher-user'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {Object.entries(REAL_RESULT).map(([key, val]) => (
                <div
                  key={key}
                  className="font-mono text-xs px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e5e7eb',
                  }}
                >
                  <span className="text-gray-500">{key}:</span>{' '}
                  <span>{val}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer note */}
      <div
        className="px-6 py-3 border-t flex items-center gap-2"
        style={{ borderColor: 'rgba(0,229,255,0.15)', background: 'rgba(0,0,0,0.2)' }}
      >
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: fheActive ? '#00E5FF' : '#6b7280' }}
        />
        <span className="font-mono text-[10px] text-gray-500 tracking-widest">
          {fheActive
            ? 'BLIND COMPUTE ACTIVE — Server never sees raw biomarkers'
            : 'Toggle ON to see how FHE protects your data'}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */
export const ProtocolStack = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-hero text-white">

      {/* ── Protocol Stack Section ── */}
      <section id="protocol-stack" className="py-32 relative overflow-hidden">
        {/* ambient glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: '#00E5FF' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: '#818CF8' }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Sentinel Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              The SYNTIX{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Protocol Stack
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Three functional layers built for clinical precision, cryptographic privacy, and
              programmable ownership of biological intelligence.
            </p>
          </motion.div>

          {/* 3-column glassmorphism cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {LAYERS.map((layer, i) => (
              <LayerCard key={layer.id} layer={layer} index={i} />
            ))}
          </div>

          {/* Architecture blueprint diagram */}
          <div className="mb-6">
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 text-center">
              System Architecture · Encrypted Data Flow
            </div>
            <ArchDiagram />
          </div>
        </div>
      </section>

      {/* ── FHE Privacy Toggler Demo ── */}
      <section id="privacy-demo" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em] mb-4">
              MVP Kill Feature
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Blind Computation,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Real Results
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              Toggle FHE on/off to see how SYNTIX delivers actionable health insights while the server
              only ever processes encrypted ciphertext.
            </p>
          </div>
          <PrivacyToggler />
        </div>
      </section>

    </div>
  );
};
