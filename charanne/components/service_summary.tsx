import React, { useState, useEffect } from 'react';

const RotatingSummary = () => {
  const Service_summary = [
    "We simplify your project by providing high-performance construction supplies—including Polystyrene sheets, fasteners, and bond gums—alongside a curated selection of premium imported furniture and interior design solutions. Quality materials, imported directly for you.",
    "We supply the core essentials that keep your site running—Polystyrene sheets, bond gums, and high-grade fasteners—paired with a professional interior division offering exclusive furniture and bespoke finishes. From the first screw to the final sofa, we’ve got you covered."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Service_summary.length);
    }, 10000); // 10000ms = 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [Service_summary.length]);

  return (
   
      <div>
        <h2 className="text-2xl font-bold text-red-500 underline transition-all duration-500">
          {Service_summary[currentIndex]}
        </h2>
      </div>
  
  );
};

export default RotatingSummary;