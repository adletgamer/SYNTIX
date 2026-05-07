'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/#problem',        label: 'Problem'      },
  { href: '/#mechanism',      label: 'Protocol'     },
  { href: '/#protocol-stack', label: 'Architecture' },
  { href: '/#roi',            label: 'Economics'    },
  { href: '/#privacy-demo',   label: 'Demo'         },
  { href: '/about',           label: 'About Us'     },
];

export const Navbar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-hero/90 backdrop-blur-md border-b border-white/[0.05]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
            <Image src="/SYNTIX.svg" alt="SYNTIX Logo" fill className="object-contain drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
          </div>
          <span className="text-xl tracking-[0.15em] font-extrabold text-white">SYNTIX</span>
        </Link>

        <ul className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-400">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`hover:text-biomarker transition-colors ${l.label === 'About Us' ? 'text-white' : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/auth')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-biomarker text-hero text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            Connect BioWallet
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[61px] left-0 right-0 z-40 bg-hero/95 backdrop-blur-xl border-b border-white/[0.07] px-6 py-4 md:hidden"
          >
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-gray-300 hover:text-biomarker transition-colors uppercase tracking-widest text-xs"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.07]">
                <button
                  onClick={() => { setMobileOpen(false); router.push('/auth'); }}
                  className="w-full px-5 py-2.5 bg-biomarker text-hero text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-cyan-300 transition-colors"
                >
                  Connect BioWallet
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
