'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Fingerprint, Loader2, ShieldCheck, Cpu, Building2, User, ArrowLeft } from 'lucide-react';

type Role = 'guardian' | 'institute' | null;

export const ConnectBioWallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<Role>(null);
  const [status, setStatus] = useState<string | null>(null);
  const router = useRouter();

  const handleConnect = () => {
    if (role === 'guardian') {
      setStatus('Generating Biological Proof...');
      setTimeout(() => {
        setStatus('Shielding Genomic Identity...');
        setTimeout(() => {
          setStatus('Sovereignty Confirmed.');
          setTimeout(() => {
            setIsOpen(false);
            router.push('/dashboard/guardian');
            resetState();
          }, 800);
        }, 1500);
      }, 1500);
    } else if (role === 'institute') {
      setStatus('Verifying Institutional Node...');
      setTimeout(() => {
        setStatus('Validating License Credentials...');
        setTimeout(() => {
          setStatus('Access Protocol Granted.');
          setTimeout(() => {
            setIsOpen(false);
            router.push('/dashboard/institute');
            resetState();
          }, 800);
        }, 1500);
      }, 1500);
    }
  };

  const resetState = () => {
    setTimeout(() => {
      setRole(null);
      setStatus(null);
    }, 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    resetState();
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="font-mono text-xs uppercase tracking-widest text-hero bg-biomarker hover:bg-cyan-400 px-6 py-3 rounded-sm transition-all font-semibold"
      >
        Connect Bio-Wallet
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              className={`bg-[#030712]/40 bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-[40px] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 ${role === null ? 'max-w-4xl w-full' : 'max-w-md w-full'}`}
            >
              {role === null ? (
                // Split-Screen Layout
                <div className="flex flex-col">
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">Select Authentication Node</h2>
                    <p className="text-slate-300 font-sans text-lg">Choose your entry vector into the SYNTIX network.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Guardian Card */}
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRole('guardian')}
                      className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-biomarker/40 hover:bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,229,255,0.15)] transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-biomarker/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="w-16 h-16 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] rounded-full flex items-center justify-center mb-6 text-white group-hover:text-biomarker group-hover:bg-biomarker/20 transition-all duration-300 relative z-10">
                        <User size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10 drop-shadow-md">Enter as Guardian</h3>
                      <p className="text-sm text-slate-300 font-sans relative z-10 leading-relaxed">
                        Total personal sovereignty. Encrypt your biological data, manage IP licenses, and retain absolute ownership.
                      </p>
                    </motion.button>

                    {/* Institute Card */}
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRole('institute')}
                      className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-indigo/40 hover:bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(129,140,248,0.15)] transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="w-16 h-16 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] rounded-full flex items-center justify-center mb-6 text-white group-hover:text-indigo group-hover:bg-indigo/20 transition-all duration-300 relative z-10">
                        <Building2 size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 relative z-10 drop-shadow-md">Enter as Curator</h3>
                      <p className="text-sm text-slate-300 font-sans relative z-10 leading-relaxed">
                        Ethical research access. Compute over encrypted network data without ever seeing the raw genomic sequences.
                      </p>
                    </motion.button>
                  </div>
                  
                  <button onClick={handleClose} className="mt-8 text-xs text-gray-500 hover:text-white transition-colors mx-auto">
                    Cancel Connection
                  </button>
                </div>
              ) : (
                // Authentication Flow
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col relative"
                >
                  <button 
                    onClick={() => { setRole(null); setStatus(null); }}
                    className="absolute -top-2 -left-2 p-2 text-gray-500 hover:text-white transition-colors disabled:opacity-0"
                    disabled={status !== null}
                  >
                    <ArrowLeft size={20} />
                  </button>

                  {/* The Cyber Touch: ZKP Ticker */}
                  {status && (
                    <div className={`absolute -top-4 right-0 flex items-center gap-2 text-[10px] font-mono px-3 py-1 rounded-full ${role === 'guardian' ? 'text-biomarker bg-biomarker/10' : 'text-indigo bg-indigo/10'}`}>
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Status: {status}</span>
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center mt-8">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 relative ${role === 'guardian' ? 'bg-biomarker/10' : 'bg-indigo/10'}`}>
                      {role === 'guardian' ? <Fingerprint className="w-12 h-12 text-biomarker" /> : <Building2 className="w-12 h-12 text-indigo" />}
                      <div className={`absolute inset-0 border-2 rounded-full animate-ping opacity-20 ${role === 'guardian' ? 'border-biomarker/50' : 'border-indigo/50'}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                      {role === 'guardian' ? 'Guardian Identity' : 'Curator Gateway'}
                    </h2>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                      {role === 'guardian' 
                        ? 'Authenticate your biological identity using Zero-Knowledge Proofs. Your genetic data never leaves your device.'
                        : 'Authenticate institutional credentials. Access the blind computation network for verifiable research.'}
                    </p>

                    <button
                      onClick={handleConnect}
                      disabled={status !== null}
                      className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        role === 'guardian' 
                          ? 'bg-biomarker/10 hover:bg-biomarker/20 text-biomarker border border-biomarker/30'
                          : 'bg-indigo/10 hover:bg-indigo/20 text-indigo border border-indigo/30'
                      }`}
                    >
                      {status ? (
                        <>
                          <Cpu className="w-5 h-5 animate-pulse" />
                          Processing Auth...
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-5 h-5" />
                          Connect {role === 'guardian' ? 'Bio-Wallet' : 'Institutional Node'}
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
