import React from 'react';
import Layout from '../components/layout';
import RotatingHeadline from '../components/headline';
import RotatingSummary from '../components/service_summary';
import { ButtonDemo } from '../ui/cta_button';

export default function HomePage() {
  return (
    <Layout>
      {/* Main Container: Centered with max-width for desktop, full-width for mobile */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 md:px-12 lg:px-24 text-center">
        
        {/* Headline Section: Large text that scales down on mobile */}
        <section className="w-full max-w-4xl mb-6 md:mb-10">
          <div className="min-h-30 md:min-h-40 flex items-center justify-center">
            <RotatingHeadline />
          </div>
        </section>

        {/* Summary Section: Adds breathing room around the rotating services */}
        <section className="w-full max-w-2xl mb-8 text-gray-700 md:text-lg">
          <RotatingSummary />
        </section>

        {/* Credentials Section: Styled as a clean card for trust */}
        <section className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm transition-hover hover:shadow-md max-w-md">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We are a certified and registered supplier of high-quality construction materials and interior design solutions.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">CAC Reg No:</span>
            <p className="text-lg font-mono font-bold text-slate-800">7888439</p>
          </div>
        </section>

        {/* Call to Action: Larger touch targets for mobile users */}
        <div className="w-full flex justify-center transform transition-transform active:scale-95">
          <ButtonDemo />
        </div>

      </main>
    </Layout>
  );
}