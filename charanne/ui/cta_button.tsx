import { Button } from "../src/components/ui/button"
import { ArrowRight, Send } from "lucide-react"

export function ButtonDemo() {
  const phoneNumber = "2348033562978";
  const message = "Hello Charanne Limited, I would like to request a quote for building materials/interior services.";

  const handleWhatsAppClick = () => {
    // Encodes the message to handle spaces and special characters
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Primary CTA: Request Quote via WhatsApp */}
      <Button 
        onClick={handleWhatsAppClick}
        variant="default" 
        className="group relative h-14 px-8 bg-red-600 hover:bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] rounded-none transition-all duration-300 shadow-xl shadow-red-100"
      >
        Request a quote from us
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      {/* Icon Button: Also links to WhatsApp for consistency */}
      <Button 
        onClick={handleWhatsAppClick}
        variant="outline" 
        size="icon" 
        aria-label="Send WhatsApp"
        className="h-14 w-14 border-2 border-slate-200 hover:border-red-600 hover:text-red-600 transition-colors rounded-none"
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  )
}