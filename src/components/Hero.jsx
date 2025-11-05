import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';

const FloatingCard = ({ size = 'small', className = '', delay = 0 }) => {
  const dims = {
    small: 'w-[140px] h-[140px]',
    medium: 'w-[220px] h-[220px]',
    large: 'w-[300px] h-[300px]',
  }[size];

  return (
    <motion.div
      className={`absolute rounded-[22px] bg-white/5 border border-[#1b2542] shadow-[0_0_50px_rgba(94,231,255,0.18)] backdrop-blur-xl ${dims} ${className}`}
      initial={{ y: 0, opacity: 0.9 }}
      animate={{ y: [0, -25, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(120px 120px at 30% 30%, rgba(94,231,255,0.15), transparent), radial-gradient(160px 160px at 70% 70%, rgba(167,139,250,0.15), transparent)'
      }} />
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Spline 3D scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient aura overlay (non-blocking) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 10% 10%, rgba(167,139,250,0.18), transparent), radial-gradient(50% 50% at 90% 30%, rgba(94,231,255,0.15), transparent), radial-gradient(40% 40% at 70% 80%, rgba(126,249,200,0.12), transparent)'
        }}
      />

      <div className="relative z-10 px-6 md:px-10 max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md inline-block text-teal-200/90 text-sm font-medium px-3 py-1 rounded-lg mb-4">
          NorthernGlow
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-teal-200 to-purple-300 bg-clip-text text-transparent mb-3">
          Enhanced Aurora Homepage
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
          A futuristic, cosmic landing experience with immersive visuals, soft glass surfaces, and liquid-gradient highlights.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-400/30 transition shadow-[0_0_25px_rgba(94,231,255,0.18)]"
          >
            <Rocket className="w-5 h-5" />
            Get Started
          </a>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition"
          >
            <Play className="w-5 h-5" />
            Explore
          </a>
        </div>
      </div>

      {/* Floating aurora cards */}
      <FloatingCard size="small" className="right-[12%] top-[18%]" />
      <FloatingCard size="medium" className="right-[5%] top-[46%]" delay={0.8} />
      <FloatingCard size="large" className="right-[14%] top-[68%]" delay={1.6} />
    </section>
  );
}
