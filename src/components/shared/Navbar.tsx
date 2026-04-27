import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-hero/90 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="flex items-center gap-3 text-white font-bold text-xl tracking-wide">
        <Image src="/SYNTIX.svg" alt="SYNTIX Logo" width={32} height={32} />
        SYNTIX<span className="text-biomarker">_</span>LAYER
      </Link>
      <ul className="hidden md:flex gap-10 font-mono text-xs uppercase tracking-widest text-gray-400">
        <li><Link href="/#problem" className="hover:text-biomarker transition-colors">Problem</Link></li>
        <li><Link href="/#mechanism" className="hover:text-biomarker transition-colors">Protocol</Link></li>
        <li><Link href="/#roi" className="hover:text-biomarker transition-colors">Economics</Link></li>
        <li><Link href="/#stack" className="hover:text-biomarker transition-colors">Tech</Link></li>
        <li><Link href="/about" className="hover:text-biomarker transition-colors text-white">About Us</Link></li>
      </ul>
      <a href="#cta" className="font-mono text-xs uppercase tracking-widest text-hero bg-biomarker hover:bg-green-400 px-6 py-3 rounded-sm transition-all font-semibold">
        Connect Wallet
      </a>
    </nav>
  );
};
