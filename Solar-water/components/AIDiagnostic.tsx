
import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService';
import { Message } from '../types';

const AIDiagnostic: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Aloha! I'm your Solar Diagnostic Assistant. Is your water heater leaking, making noise, or just not getting hot enough?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await getDiagnosticResponse(input);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
        {/* Sidebar Info */}
        <div className="md:w-1/3 bg-orange-500 p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Smart Diagnostic Assistant</h2>
            <p className="text-orange-100 text-sm leading-relaxed mb-8">
              Troubleshoot your solar water heater instantly. Our AI understands Hawaii's specific systems and common failures.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-sm">Describe the issue</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-sm">Get expert suggestions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-sm">Call for quick repair</span>
              </div>
            </div>
          </div>
          <div className="mt-12 hidden md:block">
            <p className="text-xs uppercase tracking-widest font-bold opacity-75 mb-2">Emergency?</p>
            <a href="tel:8443406413" className="text-xl font-bold hover:underline">
              (844) 340-6413
            </a>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="md:w-2/3 flex flex-col h-[600px]">
          <div 
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto bg-slate-50 space-y-4"
          >
            {messages.map((m, idx) => (
              <div 
                key={idx} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="e.g. My solar panel is leaking near the joint..."
              className="flex-grow px-6 py-3 bg-slate-50 rounded-full border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-slate-700"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:opacity-50 transition-colors shadow-lg shadow-orange-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDiagnostic;
