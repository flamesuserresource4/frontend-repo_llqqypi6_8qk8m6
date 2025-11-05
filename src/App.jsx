import React from 'react';
import Hero from './components/Hero';
import MidCTA from './components/MidCTA';
import CategoriesPreview from './components/CategoriesPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white font-inter">
      <Hero />
      <MidCTA />
      <CategoriesPreview />
      <Footer />
    </div>
  );
}
