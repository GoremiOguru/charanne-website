
import { useForm, ValidationError } from '@formspree/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '../components/layout';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrebngey");

  if (state.succeeded) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-600 rounded-full mb-6">
            <Mail size={40} />
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">Message Received.</h2>
          <p className="mt-4 text-slate-500 font-medium max-w-md mx-auto">
            Thank you for reaching out to Charanne Limited. Our Project Coordination Team will review your inquiry and get back to you within 24 hours.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: THE FORM (Spans 7/12) */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4">
                  Thank You for Choosing Charanne, We Value Your Inquiry
                </h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                  Send us an <span className="text-slate-400">Email.</span>
                </h3>
                <div className="h-1.5 w-40 bg-slate-900 mt-6"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input id="name" type="text" name="name" placeholder="John Doe" required className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all font-medium rounded-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input id="email" type="email" name="email" placeholder="john@company.com" required className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all font-medium rounded-none" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs font-bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Inquiry Type</label>
                  <select name="subject" className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all font-medium rounded-none appearance-none">
                    <option>Building Materials Supply</option>
                    <option>Interior Design Consultation</option>
                    <option>Bespoke Installations and Site Management</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Provide details about your project..." className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 focus:border-slate-900 focus:outline-none transition-all font-medium rounded-none resize-none" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-xs font-bold" />
                </div>

                <button type="submit" disabled={state.submitting} className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all disabled:opacity-50">
                  {state.submitting ? "Processing..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: CONTACT INFO (Spans 5/12) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 p-10 lg:p-12 text-white h-full relative overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-8">Contact Information</h4>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <MapPin className="text-red-600 shrink-0" size={24} />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Office Location</p>
                      <p className="text-sm font-bold leading-relaxed">MKK Plaza, opposite Gudu Market<br />FCT Abuja, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Phone className="text-red-600 shrink-0" size={24} />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Direct Lines</p>
                      <p className="text-sm font-bold leading-loose">
                        +234 (0) 803 356 2978<br />
                        +234 (0) 806 242 0252
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Clock className="text-red-600 shrink-0" size={24} />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Working Hours</p>
                      <p className="text-sm font-bold">Mon - Sat: 08:00 AM - 06:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-800">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Core Excellence</p>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    "Direct importers of industrial-grade building materials and bespoke interior furnishing. Quality certified, globally sourced."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactForm;