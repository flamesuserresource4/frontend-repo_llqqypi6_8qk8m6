import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 pt-16 pb-8 px-6 relative overflow-hidden border-t border-[#1b2542]">
      {/* subtle aurora wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 40% at 15% 20%, rgba(167,139,250,0.14), transparent), radial-gradient(35% 35% at 85% 30%, rgba(94,231,255,0.14), transparent)'
        }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-wrap justify-between gap-10">
        <div className="min-w-[240px]">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-teal-200 to-purple-300 bg-clip-text text-transparent mb-3">
            NorthernGlow
          </h3>
          <p className="text-white/70 leading-relaxed max-w-xs">
            A dark, neon-futuristic theme enhanced with glass surfaces and soft motion for an immersive experience.
          </p>
        </div>

        <div>
          <h4 className="text-lg text-cyan-300 mb-3">Explore</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#explore" className="hover:text-teal-200 transition">Overview</a></li>
            <li><a href="#categories" className="hover:text-teal-200 transition">Categories</a></li>
            <li><a href="#" className="hover:text-teal-200 transition">Showcase</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg text-cyan-300 mb-3">Resources</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#" className="hover:text-teal-200 transition">Docs</a></li>
            <li><a href="#" className="hover:text-teal-200 transition">Guides</a></li>
            <li><a href="#" className="hover:text-teal-200 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg text-cyan-300 mb-3">Follow</h4>
          <div className="flex items-center gap-2">
            <a href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[#26365a] text-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[#26365a] text-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[#26365a] text-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative text-center text-white/60 text-sm mt-10 pt-6 border-t border-[#1b2542]">
        © {new Date().getFullYear()} NorthernGlow. All rights reserved.
      </div>
    </footer>
  );
}
