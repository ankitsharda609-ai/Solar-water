
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-widest">Available for Emergency Repair</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Professional Solar Hot Water <span className="text-orange-500">Repairs in Kailua</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            From secondary panel leaks to circulation pump failures, we restore your home's hot water efficiency with island-wide expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:8443406413" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20"
            >
              Call Now: (844) 340-6413
            </a>
            <a 
              href="#ai-diagnostic" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg text-center transition-all"
            >
              AI Troubleshooting
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800" 
                  src={`https://picsum.photos/100/100?random=${i}`} 
                  alt="Customer" 
                />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              <span className="text-white font-bold block">500+ Local Repairs</span>
              Trusted by your neighbors in Kailua & Lanikai
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full text-white fill-current">
          <path d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
