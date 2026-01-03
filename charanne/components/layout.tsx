import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-brand-primary">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-brand-primary">
                CHARANNE<span className="text-brand-highlight">LIMITED</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-secondary">
                Materials & Design
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wide">
              <a href="#materials" className="hover:text-brand-highlight transition-colors">Supplies</a>
              <a href="#interiors" className="hover:text-brand-highlight transition-colors">Interiors</a>
              <a href="#about" className="hover:text-brand-highlight transition-colors">Our Process</a>
            </nav>

            {/* Header CTAs */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:block px-5 py-2.5 text-sm font-bold border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all rounded-sm">
                BULK QUOTE
              </button>
              <button className="px-5 py-2.5 text-sm font-bold bg-brand-highlight text-white hover:bg-brand-primary transition-all rounded-sm shadow-lg shadow-amber-200/50">
                DESIGN INQUIRY
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-primary text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="text-white font-bold text-xl mb-4">CHARANNE LIMITED</div>
              <p className="text-sm leading-relaxed opacity-70">
                Direct importers of industrial-grade building materials and bespoke interior furnishing. Quality certified, globally sourced.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Building Materials</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-brand-highlight">Polystyrene Sheets</a></li>
                <li><a href="#" className="hover:text-brand-highlight">Nails & Screw Nails</a></li>
                <li><a href="#" className="hover:text-brand-highlight">Bond Gums & Corner Beads</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Interior Design</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-brand-highlight">Imported Furniture</a></li>
                <li><a href="#" className="hover:text-brand-highlight">Interior Consultations</a></li>
                <li><a href="#" className="hover:text-brand-highlight">Custom Fittings</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Office</h4>
              <p className="text-sm mb-2">Available Mon - Sat</p>
              <p className="text-brand-highlight font-bold text-lg">+234 123 456 7890</p>
              <p className="text-sm opacity-70">Abuja, Nigeria | Import Hub</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-center opacity-50 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Kleidon Agora Limited. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;