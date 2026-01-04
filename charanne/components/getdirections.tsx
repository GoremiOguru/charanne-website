import { MapPin, Navigation } from "lucide-react";

export function MapSection() {
  const address = "MKK Plaza, Gudu Market, Abuja, Nigeria";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="space-y-6">
            <h4 className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Our Location</h4>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Visit the Showroom</h2>
            
            <div className="flex gap-4 items-start border-l-2 border-slate-100 pl-4">
              <MapPin className="text-red-600 shrink-0" size={20} />
              <p className="text-slate-600 text-sm leading-relaxed">
                MKK Plaza, Opposite Gudu Market,<br />
                FCT Abuja, Nigeria.
              </p>
            </div>

            {/* GET DIRECTIONS BUTTON */}
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg active:scale-95"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </div>

          <div className="lg:col-span-2 h-100 w-full rounded-sm overflow-hidden border border-slate-200">
             <iframe
              title="Charanne Limited Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4851410170564!2d7.4691463!3d9.019441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bd95fde1957%3A0xa2bfcea3795bd3a7!2sMKK%20PLAZA!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}