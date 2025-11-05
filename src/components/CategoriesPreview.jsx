import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Cosmic Landscapes',
    desc: 'Explore surreal horizons painted by auroras and galactic hues.',
    img: 'https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Neon City Nights',
    desc: 'Dive into future metropolises with holographic glows.',
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Stellar Trails',
    desc: 'Follow light paths and liquid gradients across the sky.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
];

function Card({ title, desc, img, index }) {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-[#0f1424] to-[#0b1322] w-[300px] rounded-2xl p-4 border border-[#1b2542] overflow-hidden hover:-translate-y-1.5 transition shadow-[0_0_35px_rgba(126,249,200,0.18)]/0 hover:shadow-[0_0_35px_rgba(126,249,200,0.18)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <div
        className="absolute -inset-[40%] opacity-0 hover:opacity-40 transition pointer-events-none"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(94,231,255,0.25), rgba(167,139,250,0.25), rgba(126,249,200,0.25), transparent)'
        }}
      />
      <img src={img} alt={title} className="w-full h-44 object-cover rounded-xl mb-4 relative" />
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-white/70 text-sm">{desc}</p>
    </motion.div>
  );
}

export default function CategoriesPreview() {
  return (
    <section id="categories" className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold">Featured Categories</h2>
      <div className="flex flex-wrap gap-7 justify-center mt-10">
        {cards.map((c, i) => (
          <Card key={c.title} {...c} index={i} />
        ))}
      </div>
    </section>
  );
}
