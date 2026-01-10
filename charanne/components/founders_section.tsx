import  { useState } from 'react';
import { Plus, Minus } from "lucide-react";

export function FounderSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* The Photo Container (Aspect Ratio 4:5) */}
        <div className="relative group max-w-sm mx-auto md:ml-0">
          {/* Architectural Background Accent */}
          <div className="absolute -inset-4 border-2 border-red-600/10 translate-x-6 translate-y-6 -z-10" />
          
          <div className="aspect-4/5 overflow-hidden bg-slate-200 shadow-2xl relative">
             {/* Replace with your actual image path */}
            <img 
              src="/founder-portrait.webp" 
              alt="Founders of Charanne Limited"
              className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700 ease-in-out"
              loading="lazy"
            />
          </div>
        </div>

        {/* The Text Content */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h4 className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">The Leadership</h4>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Engineered for Quality. <br/> Designed for Life.
            </h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-red-600 pl-6">
            "At Charanne Limited, we don't just import materials; we curate the foundation of your space."
          </p>

          <div className="space-y-4">
            <div className="flex flex-col">
              <p className="font-black text-slate-900 uppercase tracking-widest text-sm">Charles Ugochukwu Uruakpa</p>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">CEO & Founder</p>
            </div>

            {/* Expandable Bio Section */}
            <div className="pt-2">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:text-red-600 transition-colors"
              >
                {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                {isExpanded ? "Close Bio" : "Read Full Vision"}
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 text-sm leading-relaxed space-y-4">
                  With over 20 years of combined experience in the construction and logistics sector, Mr. Charles Ugochukwu Uruakpa and Mrs. Anne Charles Uruakpa established Charanne Limited to solve a critical gap in the West African market: the availability of world-class building materials paired with bespoke luxury interiors. 
                  <br /><br />
                  Under their leadership, the company has become a trusted partner for developers and homeowners alike, ensuring every project—from industrial builds to luxury residences—is executed with precision and elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}