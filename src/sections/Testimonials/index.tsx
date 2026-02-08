import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-white w-full">
      <div ref={ref} className="container-narrow py-24 md:py-32 text-center">
        <div className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="section-label mb-4">/témoignages</div>
          <h2 className="section-heading text-[32px] md:text-[40px] mb-16 max-w-2xl mx-auto">
            Ce que disent les propriétaires qui ont fait estimer avec /estimanou
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto fade-in-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <div className="w-12 h-12 rounded-full bg-[#E8EDE6] flex items-center justify-center mx-auto mb-8">
            <Quote size={20} className="text-[#B8975A]" />
          </div>

          <p className="text-[#1B3A4B] text-xl md:text-2xl font-cormorant italic leading-[1.6] mb-10 font-light tracking-tight">
            "Merci pour votre professionnalisme et votre réactivité. L'estimation était très détaillée et nous a permis de fixer un prix juste. Nous n'hésiterons pas à recommander Estimanou."
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Jean L."
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#E8EDE6]"
            />
            <div className="text-left">
              <div className="text-[#1B3A4B] font-cormorant font-medium text-lg">Jean L.</div>
              <div className="text-[#2C2C2C]/40 text-sm font-light">Saline-les-Bains, La Réunion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
