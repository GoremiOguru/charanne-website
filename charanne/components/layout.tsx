import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Menu, X } from 'lucide-react'; 


interface LayoutProps {
  children: ReactNode;
}
const phoneNumber = "2348033562978";
  const message = "Hello Charanne Limited, I would like to request a quote for building materials/interior services.";

  const handleWhatsAppClick = () => {
    // Encodes the message to handle spaces and special characters
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Supplies', href: '#materials' },
    { name: 'Interiors', href: '#interiors' },
    { name: 'Our Process', href: '#our-process' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link 
            to="/" 
            className="flex flex-col leading-none group cursor-pointer transition-opacity hover:opacity-90"
            >
              <span className="text-xl font-black tracking-tighter text-slate-900">
                CHARANNE<span className="text-red-600">LIMITED</span>
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-slate-500">
                Building Materials & Interior Excellence
              </span>
            </Link>

            {/* Desktop Nav (Hidden on Mobile) */}
            <nav className="hidden lg:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-slate-600">
              {navLinks.map((link) => {
                const isInternalPage = link.href.startsWith('/');
                return isInternalPage ? (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="hover:text-red-600 transition-all underline-offset-4 hover:underline"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="hover:text-red-600 transition-all underline-offset-4 hover:underline"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Actions & Mobile Toggle */}
            <div className="flex items-center gap-2">
              <button className="hidden sm:block px-5 py-2 text-[10px] font-black uppercase tracking-widest border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                Quote
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`
          lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}>
          <nav className="flex flex-col p-6 space-y-4 bg-white">
            {navLinks.map((link) => {
              const isInternalPage = link.href.startsWith('/');
              const className = "text-lg font-bold text-slate-800 hover:text-red-600 border-b border-slate-50 pb-2";
              
              return isInternalPage ? (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={className}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={className}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <button 
              onClick={handleWhatsAppClick}
          
              className="w-full py-4 text-xs font-black uppercase tracking-widest bg-red-600 text-white rounded-sm">
                Design Inquiry
              </button>
              <button 
               onClick={handleWhatsAppClick}
              className="w-full py-4 text-xs font-black uppercase tracking-widest border-2 border-slate-900 text-slate-900 rounded-sm">
                Bulk Quote
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT Area */}
      <main className="grow w-full">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            <div className="space-y-6">
              <div className="text-white font-black text-2xl tracking-tighter">
                CHARANNE<span className="text-red-600">.</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Direct importers of industrial-grade building materials and bespoke interior furnishing. Quality certified, globally sourced.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Supply Division</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Polystyrene Sheets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industrial Fasteners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bond Gums & Beads</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Design Studio</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Luxury Furniture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Site Consultations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bespoke Fittings</a></li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-sm border border-slate-800">
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">Get in Touch With us</h4>
              <p className="text-brand-highlight font-black text-xl mb-2 text-red-500">+234 (0) 803 356 2978</p>
              <p className="text-xs opacity-60 leading-relaxed uppercase tracking-widest">
                MKK plaza, opposite Gudu Market FCT Abuja
              </p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
            <span>&copy; {new Date().getFullYear()} Charanne Limited</span>
            <span className="hidden md:block">|</span>
            <span>Premium Building Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;