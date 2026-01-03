import React, { useState, useEffect } from 'react';


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
    <div className="min-h-16 flex items-center"> 
      <h1 
        key={currentIndex} 
        className="text-3xl font-bold text-red-500 underline animate-fade-in"
      >
        {headlines[currentIndex]}
      </h1>
    </div>
  );
};

export default RotatingHeadline;