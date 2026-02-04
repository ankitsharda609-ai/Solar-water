
import React from 'react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  details: string[] 
}> = ({ title, description, icon, details }) => (
  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 group">
    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-800">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">
      {description}
    </p>
    <ul className="space-y-3">
      {details.map((detail, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-slate-500">
          <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Specialized Repairs for Hawaii's Climate
        </h3>
        <p className="text-lg text-slate-600">
          Hawaii’s unique salt air and intense sun put extra stress on solar thermal systems. We specialize in the most common points of failure to get you back to zero-energy hot water.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard 
          title="Secondary Panel Leak Fix"
          description="Leaks in your secondary collector panels can lead to significant water loss and reduced system pressure."
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>}
          details={[
            "High-grade silicone seals",
            "Full pressure-testing diagnostics",
            "Joint failure & crack identification",
            "Corrosion-resistant fittings"
          ]}
        />
        <ServiceCard 
          title="Circulation Pump Replacement"
          description="The circulation pump is the heart of your active solar system. If it stops, your hot water stops."
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>}
          details={[
            "Industrial-grade replacements",
            "Energy-efficient pump models",
            "Silent operation technology",
            "Sensor & thermostat calibration"
          ]}
        />
        <ServiceCard 
          title="Full System Tune-Ups"
          description="Preventative maintenance is the best way to avoid emergency repair costs in Kailua's environment."
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}
          details={[
            "Full tank sediment flushing",
            "Anode rod inspections",
            "Isolation valve checks",
            "Thermal efficiency reporting"
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
