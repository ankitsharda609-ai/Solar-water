
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Ready to fix?</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Contact Kailua's Premier Solar Team</h3>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Our Location</h4>
                <p className="text-slate-400">600 Kailua Rd, Kailua, HI 96734</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                <a href="tel:8443406413" className="text-orange-500 text-2xl font-bold hover:underline">(844) 340-6413</a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Service Hours</h4>
                <p className="text-slate-400">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-xs text-orange-500 mt-1 uppercase font-bold tracking-widest">Available for After-Hours Emergencies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-4 rounded-[2rem] border border-white/10 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-[1.5rem] h-96 overflow-hidden relative">
            {/* Mock map interface */}
            <div className="absolute inset-0 bg-slate-700">
               <img src="https://picsum.photos/800/600?grayscale" className="w-full h-full object-cover opacity-50" alt="Map Area" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-2xl animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
               </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur p-4 rounded-2xl border border-white/10">
              <p className="text-sm font-bold mb-1">Kailua Solar Repair Center</p>
              <p className="text-xs text-slate-400">600 Kailua Rd, Kailua, Hawaii 96734</p>
              <button className="mt-3 w-full bg-orange-500 text-white text-xs font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
