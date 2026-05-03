'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Server, Shield, Lock, Fingerprint, Terminal, Share2, LogOut, LayoutDashboard, Globe, Building2, Key } from 'lucide-react';
import Link from 'next/link';

// Component: Global Heatmap
const BiomarkerHeatmap = () => {
  return (
    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
          <Globe size={14} className="text-indigo" />
          Global Biomarker Heatmap
        </div>
        <div className="text-[10px] font-mono text-indigo bg-indigo/10 px-2 py-1 rounded">
          Anonymized Feed
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center border border-white/5 rounded-xl bg-[url('/grid.svg')] bg-center overflow-hidden bg-white/5">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-indigo/30 via-transparent to-biomarker/30" />
        
        {/* Simulated heatmap nodes */}
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[30%] left-[40%] w-24 h-24 bg-indigo/40 rounded-full blur-2xl" />
        <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-[60%] left-[20%] w-32 h-32 bg-indigo/30 rounded-full blur-2xl" />
        <motion.div animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute top-[40%] right-[30%] w-20 h-20 bg-indigo/50 rounded-full blur-2xl" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
          <p className="text-white font-semibold text-lg tracking-wide mb-1 shadow-black drop-shadow-md">North America Data Cluster</p>
          <p className="text-gray-400 font-mono text-xs shadow-black drop-shadow-md">1.2M Active Nodes • 450Tb Encrypted Storage</p>
        </div>
      </div>
    </div>
  );
};

// Component: Active Licenses
const ActiveLicenses = () => {
  const licenses = [
    { target: 'Metabolic Syndrome Study Q3', provider: 'Stanford Protocol', status: 'Processing FHE', cost: '1,200 SP' },
    { target: 'Longevity Gene Mapping', provider: 'Global Node Pool', status: 'Active Access', cost: '3,450 SP' },
    { target: 'Neurodegenerative Analysis', provider: 'Oxford Biobank', status: 'Awaiting Validation', cost: '890 SP' },
  ];

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 h-full flex flex-col relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
          <Key size={14} className="text-indigo" />
          Active IP Licenses
        </div>
        <div className="text-xs text-gray-500 font-mono">
          Via Story Protocol
        </div>
      </div>
      
      <div className="space-y-4 flex-1">
        {licenses.map((lic, i) => (
          <div key={i} className="group bg-black/40 border border-white/5 hover:border-indigo/30 rounded-xl p-4 transition-all">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">{lic.target}</h4>
              <span className="text-xs font-mono text-indigo font-bold">{lic.cost}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">{lic.provider}</span>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${lic.status.includes('Active') ? 'bg-green-400' : lic.status.includes('Processing') ? 'bg-indigo animate-pulse' : 'bg-yellow-400'}`} />
                <span className="text-gray-400">{lic.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function InstituteDashboard() {
  return (
    <div className="min-h-screen bg-hero flex text-white font-sans">
      {/* Sidebar: The Curator Command */}
      <aside className="w-64 border-r border-white/5 bg-black/50 backdrop-blur-xl hidden md:flex flex-col">
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-indigo/20 blur-md rounded-full" />
              <Building2 className="w-full h-full text-indigo relative z-10" />
            </div>
            <span className="font-extrabold tracking-[0.15em] text-lg">SYNTIX</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <div className="px-3 py-2 text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Institutional Node</div>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo/10 text-white font-medium border border-indigo/20">
            <LayoutDashboard size={18} className="text-indigo" strokeWidth={1.5} />
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Database size={18} strokeWidth={1.5} />
            Data Marketplace
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Terminal size={18} strokeWidth={1.5} />
            Active Compute
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
            <Shield size={18} strokeWidth={1.5} />
            Ethical Governance
          </a>
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors font-medium text-sm">
            <LogOut size={18} strokeWidth={1.5} />
            Disconnect Node
          </Link>
        </div>
      </aside>

      {/* Main Content Grid */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Curator Analytics</h1>
              <p className="text-gray-400 font-mono text-sm">Ethical Access & Distributed Compute Monitoring</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-mono">
              <div className="w-2 h-2 rounded-full bg-indigo animate-pulse" />
              Node Status: <span className="text-white">Validated</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Feature A: Heatmap */}
            <div className="lg:col-span-2 h-[450px]">
              <BiomarkerHeatmap />
            </div>

            {/* Feature B: Active Licenses */}
            <div className="lg:col-span-1 h-[450px]">
              <ActiveLicenses />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
