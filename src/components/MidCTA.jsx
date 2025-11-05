import React from 'react';
import { motion } from 'framer-motion';

export default function MidCTA() {
  return (
    <section id="explore" className="py-16 px-6 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-2"
        style={{
          background: 'linear-gradient(90deg, #93c5fd, #5ee7ff, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        Glide through a cosmic interface
      </motion.h2>
      <motion.p
        className="text-white/70 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Crafted with subtle motion and glass surfaces to keep things elegant while preserving the dark, neon-futuristic aura.
      </motion.p>
    </section>
  );
}
