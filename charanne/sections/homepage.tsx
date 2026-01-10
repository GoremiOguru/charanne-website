
import Layout from '../components/layout';
import RotatingHeadline from '../components/headline';
import RotatingSummary from '../components/service_summary';
import { ButtonDemo } from '../ui/cta_button';

export default function HomePage() {
  return (
    <Layout>
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
           <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full blur-3xl" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200 rounded-full blur-3xl" />
        </div>

        <section className="relative z-10 w-full max-w-7xl px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT SIDE: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.3em] bg-red-600 text-white">
              Established Excellence
            </div>
            
            <div className="min-h-[120px] mb-6">
              <RotatingHeadline />
            </div>

            <div className="max-w-xl mb-10 text-gray-600 md:text-lg lg:mx-0 mx-auto">
              <RotatingSummary />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
               <ButtonDemo />
            </div>
          </div>

          {/* RIGHT SIDE: Visual Content */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
              <img 
                src="/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor.webp" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-8 border-white"
                alt="A Charanne Project"
              />

              {/* MOVED: CAC Registered Badge - Now floating on the top-right of the image */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-3 shadow-xl rounded-xl border border-slate-100 flex flex-col items-end">
                 <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">CAC Registered</span>
                 <span className="text-sm font-mono font-bold text-slate-800">RC 7888439</span>
              </div>

              {/* Decorative floating badge (Bottom Left) */}
              <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 shadow-xl rounded-xl border border-slate-50">
                <p className="text-2xl md:text-3xl font-black text-red-600 leading-none">100%</p>
                <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">
                  Genuine Materials
                </p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </Layout>
  );
}