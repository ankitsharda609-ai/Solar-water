
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIDiagnostic from './components/AIDiagnostic';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="ai-diagnostic" className="py-20 bg-slate-50">
          <AIDiagnostic />
        </section>

        <section id="faq" className="py-20 bg-white">
          <FAQ />
        </section>

        <section id="contact" className="py-20 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Persistent Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-orange-500 p-4 shadow-lg z-50">
        <a 
          href="tel:8443406413" 
          className="flex items-center justify-center gap-2 text-white font-bold text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          CALL NOW: (844) 340-6413
        </a>
      </div>
    </div>
  );
};

export default App;
