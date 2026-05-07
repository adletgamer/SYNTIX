'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Server, Shield, Lock, Fingerprint, Terminal, FileCode2, Share2, LogOut, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

const SentinelScore = () => {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
      <div className="absolute top-4 left-4 text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
        <Activity size={14} className="text-biomarker" />
        Sentinel Score
      </div>
      <div className="absolute top-4 right-4 text-[10px] font-mono text-indigo bg-indigo/10 px-2 py-1 rounded">
        Live Sync
      </div>
      
      {/* Circular Gradient */}
      <div className="relative w-56 h-56 mt-6 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
          <motion.circle 
            cx="50" cy="50" r="45" fill="none" 
            stroke="url(#gradient)" strokeWidth="4"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 56 }}
            transition={{ duration: 2, ease: "easeOut" }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col items-center justify-center mt-2">
          <span className="text-6xl font-bold text-white tracking-tighter" style={{ textShadow: '0 0 30px rgba(0,229,255,0.5)'}}>92</span>
          <span className="text-xs text-gray-400 font-mono mt-1">/100</span>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <Lock size={12} className="text-biomarker" />
        Data processed via FHE (Encrypted)
      </div>
    </div>
  );
};

const BlindComputeFeed = () => {
  const [logs, setLogs] = useState([
    { time: '01:24:05', text: 'Encrypting Biomarker: Glucose_Level...' },
    { time: '01:24:06', text: 'Computing Risk Assessment (FHE Mode)...' },
    { time: '01:24:07', text: 'Result: Metabolic_Stability = High.' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev];
        if (newLogs.length > 5) newLogs.shift();
        const time = new Date().toTimeString().split(' ')[0];
        const messages = [
          'Verifying ZKP parameters...',
          'Fetching IP-NFT constraints from Story Protocol...',
          'Running Secure Multi-Party Computation...',
          'Result: Biomarker matches normative baseline.'
        ];
        const text = messages[Math.floor(Math.random() * messages.length)];
        newLogs.push({ time, text });
        return newLogs;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 font-mono text-xs flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-biomarker to-transparent opacity-50" />
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest">
          <Terminal size={14} className="text-biomarker" />
          Live Blind Computation
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 font-mono">
        {logs.map((log, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className="flex gap-3 text-gray-400"
          >
            <span className="text-indigo shrink-0">[{log.time}]</span>
            <span className={log.text.includes('Result') ? 'text-biomarker drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]' : 'text-gray-300'}>
              {log.text}
            </span>
          </motion.div>
        ))}
        <div className="flex gap-3 text-gray-500 animate-pulse mt-2">
          <span className="text-indigo shrink-0">[{new Date().toTimeString().split(' ')[0]}]</span>
          <span>Awaiting next compute cycle...</span>
        </div>
      </div>
    </div>
  );
};

const IPNFTVault = () => {
  const assets = [
    { name: 'Genomic Sequence (WGS)', id: '0x7F...3B92', type: 'DNA', status: 'Active' },
    { name: 'Metabolic Profile Q1', id: '0x4A...9C11', type: 'Blood', status: 'Active' },
    { name: 'Longitudinal EHR Data', id: '0x9B...2D44', type: 'Clinical', status: 'Locked' },
  ];

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
      {/* Custodial Trust Banner */}
      <div className="absolute top-0 left-0 w-full bg-biomarker/10 border-b border-biomarker/20 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-mono text-biomarker uppercase tracking-widest">
          <Shield size={12} />
          Custodial FHE Vault
        </div>
        <span className="text-[10px] text-gray-400 font-mono">Your keys are securely managed by SYNTIX HSMs.</span>
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
        <Database size={14} className="text-indigo" />
        IP-NFT Vault
      </div>
      
      <div className="space-y-4 flex-1">
        {assets.map((asset, i) => (
          <div key={i} className="group bg-black/40 border border-white/5 hover:border-white/20 rounded-xl p-4 transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <FileCode2 size={18} className={asset.type === 'DNA' ? 'text-biomarker' : 'text-indigo'} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{asset.name}</h4>
                <div className="text-xs font-mono text-gray-500 mt-1 flex items-center gap-2">
                  <span>Vault ID: {asset.id}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  <span className={asset.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}>{asset.status}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-500 font-mono hidden md:inline-block">Custodial Sync</span>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-mono px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 transition-colors">
                <Share2 size={14} />
                License Data
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
        <div className="flex items-center gap-2">
          <span>Powered by Story Protocol</span>
        </div>
        <div className="flex items-center gap-1.5 text-biomarker bg-biomarker/10 px-3 py-1.5 rounded-full border border-biomarker/20">
          <Shield size={12} /> 100% Encrypted Custody
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-hero flex text-white font-sans">
      {/* Sidebar: The Sentinel Command */}
      <aside className="w-64 border-r border-white/5 bg-black/50 backdrop-blur-xl hidden md:flex flex-col">
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-biomarker/20 blur-md rounded-full" />
              <Fingerprint className="w-full h-full text-biomarker relative z-10" />
            </div>
            <span className="font-extrabold tracking-[0.15em] text-lg">SYNTIX</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <div className="px-3 py-2 text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Command Center</div>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white font-medium border border-white/5">
            <LayoutDashboard size={18} className="text-biomarker" strokeWidth={1.5} />
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Database size={18} strokeWidth={1.5} />
            Bio-Assets
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Server size={18} strokeWidth={1.5} />
            Compute Nodes
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Shield size={18} strokeWidth={1.5} />
            Security Settings
          </a>
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors font-medium text-sm">
            <LogOut size={18} strokeWidth={1.5} />
            Disconnect Wallet
          </Link>
        </div>
      </aside>

      {/* Main Content Grid */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Biological Intelligence</h1>
              <p className="text-gray-400 font-mono text-sm">Monitoring Encrypted Compute Network & IP Assets</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-mono">
              <div className="w-2 h-2 rounded-full bg-biomarker animate-pulse" />
              Network: <span className="text-white">Active</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feature A: Sentinel Score */}
            <div className="lg:col-span-1 h-[400px]">
              <SentinelScore />
            </div>

            {/* Feature B: Blind Compute Feed */}
            <div className="lg:col-span-2 h-[400px]">
              <BlindComputeFeed />
            </div>

            {/* Feature C: IP-NFT Vault */}
            <div className="lg:col-span-3 h-auto min-h-[350px]">
              <IPNFTVault />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
