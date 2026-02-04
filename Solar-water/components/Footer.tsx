
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 md:pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 text-white p-1.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 19.07-1.41-1.41"/><path d="M12 20v2"/><path d="m6.34 17.66-1.41 1.41"/><path d="M2 12h2"/><path d="m7.76 7.76-1.41-1.41"/><circle cx="12" cy="12" r="4"/><path d="M12 8V6a4 4 0 0 1 4 4"/></svg>
              </div>
              <span className="brand text-xl font-extrabold tracking-tight text-slate-900">
                Kailua<span className="text-orange-500">Solar</span>
              </span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
              Expert solar thermal solutions dedicated to keeping Kailua homes energy-efficient. Specializing in high-performance repairs for Hawaii's unique climate.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-contain opacity-50" />
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-500 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#ai-diagnostic" className="text-slate-500 hover:text-orange-500 transition-colors">AI Troubleshooting</a></li>
              <li><a href="#faq" className="text-slate-500 hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Service Areas</h4>
            <ul className="space-y-4">
              <li className="text-slate-500">Kailua Proper</li>
              <li className="text-slate-500">Lanikai</li>
              <li className="text-slate-500">Maunawili</li>
              <li className="text-slate-500">Windward Oahu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2024 Solar Water Heater Repair Kailua. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
