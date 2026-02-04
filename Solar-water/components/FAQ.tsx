
import React, { useState } from 'react';

const FAQItemComponent: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-slate-100 transition-all ${isOpen ? 'pb-6' : 'pb-0'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-orange-500 transition-colors group"
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-orange-500">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180 bg-orange-500 text-white border-orange-500' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Why is my water not getting hot even when it's sunny?",
      answer: "This is often caused by a failed circulation pump or air pockets in the lines. In Hawaii's climate, pump gaskets can wear out or the pump motor can fail due to power surges. If the pump isn't circulating the fluid, the heat from the panels never reaches your tank."
    },
    {
      question: "How often should I have my panels checked for leaks?",
      answer: "We recommend a professional tune-up every 3-5 years, but you should do a visual inspection once a year. Kailua's salty air accelerates corrosion on metal connections. Look for white crusty deposits (mineral buildup) around panel joints—this is a sign of a slow leak."
    },
    {
      question: "What are the signs of a failing circulation pump?",
      answer: "Loud grinding or humming noises from the pump unit are classic signs of mechanical failure. Also, if your backup electric heater is running much more frequently than usual despite clear sunny days, your solar side is likely not contributing heat."
    },
    {
      question: "Is it worth repairing an old solar water heater?",
      answer: "Absolutely. Most Hawaii solar thermal systems have a chassis that lasts 15-20 years. If your tank is sound, replacing components like the pump, sensors, or fixing a panel leak is far more cost-effective (and environmentally friendly) than a full replacement."
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">Troubleshooting</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Common Questions</h3>
          <p className="text-lg text-slate-600 mb-8">
            Get quick answers to common issues we see every day in the Kailua and Windward area.
          </p>
          <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
            <h4 className="font-bold text-orange-900 mb-2">Still need help?</h4>
            <p className="text-orange-800/80 mb-6">Our technicians are standing by for emergency repairs.</p>
            <a 
              href="tel:8443406413" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all"
            >
              Call (844) 340-6413
            </a>
          </div>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FAQItemComponent key={idx} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
