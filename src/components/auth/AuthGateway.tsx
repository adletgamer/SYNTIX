'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FlowStep = 'path-selector' | 'connecting' | 'verifying';
type Role = 'guardian' | 'curator' | null;

interface AuthGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (role: Role) => void;
}

export const AuthGateway: React.FC<AuthGatewayProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<FlowStep>('path-selector');
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
    visible: { opacity: 1, backdropFilter: 'blur(12px)', transition: { duration: 0.4 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
  };

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep('connecting');
    
    // Simulate connection flow
    setTimeout(() => {
      setStep('verifying');
      setTimeout(() => {
        if (onSuccess) onSuccess(role);
        onClose();
        // Reset state after close
        setTimeout(() => { setStep('path-selector'); setSelectedRole(null); }, 300);
      }, 2000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-widest text-gray-400 uppercase">
                {step === 'path-selector' ? 'Select Gateway Path' : 'Authentication'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors p-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Modal Content Area */}
          <div className="relative min-h-[480px] flex flex-col justify-center p-6 md:p-10 overflow-y-auto">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
              <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
            </div>

            <AnimatePresence mode="wait">
              {/* SCREEN 1: PATH SELECTOR */}
              {step === 'path-selector' && (
                <motion.div
                  key="path-selector"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 flex flex-col items-center w-full"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                      Choose your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Identity</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
                      Select how you want to interact with the protocol before connecting your secure wallet.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-[850px] px-2 md:px-0">
                    {/* GUARDIAN CARD */}
                    <button
                      onClick={() => handleRoleSelect('guardian')}
                      className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(34,211,238,0.2)]"
                    >
                      <div className="mb-6 rounded-full bg-cyan-400/10 p-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          <path d="M14.5 9c-2.5 1.5-2.5 4.5 0 6M9.5 9c2.5 1.5 2.5 4.5 0 6"/>
                          <path d="M12 8v8"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Enter as Guardian</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                        Own your biological data. Monetize on your terms.
                      </p>
                      <div className="mt-auto px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-[10px] font-mono font-semibold uppercase tracking-widest text-cyan-400">
                        Personal · Private · Sovereign
                      </div>
                    </button>

                    {/* CURATOR CARD */}
                    <button
                      onClick={() => handleRoleSelect('curator')}
                      className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-400/[0.05] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.2)]"
                    >
                      <div className="mb-6 rounded-full bg-indigo-400/10 p-4 text-indigo-400 transition-transform duration-300 group-hover:scale-110">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3"/>
                          <circle cx="6" cy="12" r="3"/>
                          <circle cx="18" cy="19" r="3"/>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Enter as Curator</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                        Access anonymized datasets for breakthrough research.
                      </p>
                      <div className="mt-auto px-4 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-400/10 text-[10px] font-mono font-semibold uppercase tracking-widest text-indigo-400">
                        Institutional · Verified · Compliant
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SCREEN 2: CONNECTING */}
              {step === 'connecting' && (
                <motion.div
                  key="connecting"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]"
                >
                  <div className="relative w-20 h-20 mb-8">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent ${selectedRole === 'guardian' ? 'border-t-cyan-400 border-r-cyan-400/30' : 'border-t-indigo-400 border-r-indigo-400/30'}`}
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-2 rounded-full border-b-2 border-l-2 border-transparent ${selectedRole === 'guardian' ? 'border-b-cyan-400 border-l-cyan-400/30' : 'border-b-indigo-400 border-l-indigo-400/30'}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">
                      {selectedRole === 'guardian' ? '🔐' : '🔬'}
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Awaiting Signature</h3>
                  <p className="text-gray-400 font-mono text-sm tracking-wide">Please confirm connection in your BioWallet</p>
                </motion.div>
              )}

              {/* SCREEN 3: VERIFYING ZKP */}
              {step === 'verifying' && (
                <motion.div
                  key="verifying"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]"
                >
                  <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="font-mono text-xs sm:text-sm text-gray-300"
                    >
                      <div className="flex justify-between gap-8 mb-2"><span>[STATUS]</span> <span className="text-green-400">Verifying Identity Proof</span></div>
                      <div className="flex justify-between gap-8 mb-2"><span>[CIRCUIT]</span> <span>Groth16 ZK-SNARK</span></div>
                      <div className="flex justify-between gap-8 text-indigo-300"><span>[HASH]</span> <span>0x7f2a...8c91</span></div>
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Establishing Secure Session</h3>
                  <p className="text-gray-400 font-mono text-sm tracking-wide">Validating Zero-Knowledge Proofs...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
