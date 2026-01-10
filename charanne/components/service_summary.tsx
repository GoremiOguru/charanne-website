import  { useState, useEffect } from 'react';

const RotatingSummary = () => {
  const Service_summary = [
    "We simplify your project by providing high-performance construction supplies—including Polystyrene sheets, fasteners, and bond gums—alongside a curated selection of premium imported furniture and interior design solutions. Quality materials, imported directly for you.",
    "We supply the core essentials that keep your site running—Polystyrene sheets, bond gums, and high-grade fasteners—paired with a professional interior division offering exclusive POP ceiling installations with bespoke fire-proof finishing. From the first screw to the final sofa, we’ve got you covered."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Service_summary.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [Service_summary.length]);

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      {/* Container with a fixed minimum height to prevent layout shift */}
      <div className="min-h-35 md:min-h-25 flex items-center border-l-4 border-red-600 pl-6">
        <p
          key={currentIndex}
          className="text-lg md:text-xl text-slate-600 leading-relaxed italic animate-fade-in"
        >
          {Service_summary[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default RotatingSummary;