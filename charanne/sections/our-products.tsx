import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info, X, MessageCircle } from 'lucide-react';
import Layout from '../components/layout';
import {MapSection} from "../components/getdirections";

const products = [
  {
    id: 1,
    name: "High-Density Polystyrene",
    category: "Building Supplies",
    description: "Our premium polystyrene sheets offer superior thermal insulation and structural integrity for modern floor and wall systems. Imported to meet international fire-safety standards.",
    image: "/charanne-high-quality-polysterene-sheet.webp",
    features: ["Fire Retardant", "Moisture Resistant", "Lightweight Structural Fill"]
  },

  {
    id: 2,
    name: "Industrial Concrete Nails",
    category: "Building Supplies",
    description: "High-strength carbon steel nails engineered for penetrating concrete, brick, and hard masonry. Zinc-coated for maximum corrosion resistance.",
    image: "/charanne-high-quality-concrete-nails.webp",
    features: ["High Carbon Steel", "Corrosion Resistant", "Impact Durable"]
  },
  {
    id: 3,
    name: "Precision Corner Beads",
    category: "Building Supplies",
    description: "Premium edge protection for drywall and plastering. Ensures sharp, professional corners that are resistant to chipping and cracking.",
    image: "/charanne-high-quality-cornerbeads.webp",
    features: ["Rust-Proof Coating", "Perfect Alignment", "Heavy-Duty Gauge"]
  },
  {
    id: 4,
    name: "Reinforced Fiberglass Tape",
    category: "Building Supplies",
    description: "Professional-grade mesh tape for reinforcing wall joints and repairing cracks in drywall. Self-adhesive for easy application and high tensile strength.",
    image: "/charanne-high-quality-fiberglas-tape.webp",
    features: ["Self-Adhesive Mesh", "Crack Prevention", "Alkali Resistant"]
  },
  {
    id: 5,
    name: "Industrial Silicone Sealant",
    category: "Building Supplies",
    description: "Multi-purpose high-performance silicone gum for waterproof sealing in kitchens, bathrooms, and structural glazing.",
    image: "/charanne-silicone-gum.webp",
    features: ["100% Waterproof", "UV Stable", "Flexible Bonding"]
  },
  
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const next = () => setCurrent((current + 1) % products.length);
  const prev = () => setCurrent((current - 1 + products.length) % products.length);

  return (
    <Layout>
      <section className="relative w-full h-[80vh] md:h-[85vh] bg-slate-950 overflow-hidden flex items-center justify-center">
        
        {/* Main Product Image Transition */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Dark Overlay Gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 z-10" />
            
            <motion.img
              src={products[current].image}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1, opacity: 0.5 }} // Kept opacity low to maintain luxury "dark" vibe
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-red-500 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-4">
              {products[current].category}
            </h4>
            
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-none">
              {products[current].name.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-white" : "text-white/90"}>
                  {word}{' '}
                </span>
              ))}
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button 
                onClick={() => setShowDetails(true)}
                className="w-full sm:w-auto px-12 py-4 bg-white text-slate-900 font-black uppercase tracking-widest text-[11px] hover:bg-red-600 hover:text-white transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
              >
                <Info size={16} /> View Specifications
              </button>
              <a 
                href="https://wa.me/2348033562978"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-12 py-4 border-2 border-white/30 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle size={16} /> Instant Quote
              </a>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators (Dashes) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {products.map((_, i) => (
            <div 
              key={i} 
              className={`h-[2px] transition-all duration-500 ${i === current ? 'w-12 bg-red-600' : 'w-6 bg-white/20'}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-4 md:left-8 z-30 p-2 text-white/50 hover:text-red-500 transition-colors">
          <ChevronLeft size={40} strokeWidth={1} />
        </button>
        <button onClick={next} className="absolute right-4 md:right-8 z-30 p-2 text-white/50 hover:text-red-500 transition-colors">
          <ChevronRight size={40} strokeWidth={1} />
        </button>

        {/* DETAILS OVERLAY */}
        <AnimatePresence>
          {showDetails && (
            <>
              {/* Backdrop blur when modal is open */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowDetails(false)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="absolute top-0 right-0 w-full md:w-[500px] h-full bg-white z-50 p-8 md:p-16 shadow-2xl flex flex-col"
              >
                <button onClick={() => setShowDetails(false)} className="self-end p-2 hover:rotate-90 transition-transform duration-300 text-slate-400 hover:text-red-600">
                  <X size={32} />
                </button>
                
                <div className="mt-4">
                  <span className="text-red-600 font-black uppercase tracking-[0.2em] text-[10px] block mb-4">Engineering Details</span>
                  <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">{products[current].name}</h3>
                  
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 border-l-4 border-slate-100 pl-6">
                    {products[current].description}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {products[current].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-sm">
                        <div className="w-2 h-2 bg-red-600 rotate-45" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <a 
                    href="https://wa.me/2348033562978"
                    className="w-full block text-center py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-[11px] hover:bg-red-600 transition-colors"
                  >
                    Confirm Stock Availability
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* TRANSITION SECTION */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Visit Us</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            We would love to show you more
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>
        <MapSection />
      </section>

      
    </Layout>
  );
};

export default ProductCarousel;