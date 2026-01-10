import  { useState, useEffect } from 'react';

const RotatingHeadline = () => {
  const headlines = [
    "From Foundation to Finishes: Your Premier Source for Quality Building Materials & Interior Excellence.",
    "Build Better. Live Beautifully. Leading Importers of Professional Supplies and Luxury Interiors."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8 overflow-hidden">
      {/* Visual Accent: A small top label */}
      <div className="flex justify-center mb-4">
        <span className="text-xs uppercase tracking-[0.3em] text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Charanne Excellence
        </span>
      </div>

      <div className="min-h-40 md:min-h-30 flex items-center justify-center text-center"> 
        <h1 
          key={currentIndex} 
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2] animate-fade-in"
        >
          {/* Using a span for the red accent to make it look professional */}
          <span className="bg-linear-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            {headlines[currentIndex]}
          </span>
        </h1>
      </div>
      
      {/* Animated underline indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {headlines.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 transition-all duration-500 rounded-full ${
              idx === currentIndex ? "w-8 bg-red-600" : "w-2 bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingHeadline;