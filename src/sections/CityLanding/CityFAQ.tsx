import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CityLanding } from "@/types/city";

interface CityFAQProps {
  city: CityLanding;
}

export const CityFAQ = ({ city }: CityFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (city.faq.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQPage JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faq.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer,
      },
    })),
  };

  return (
    <section className="relative bg-white w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="relative max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center text-center mb-12">
          <span className="pill-label">questions fréquentes</span>
          <h2 className="section-title mb-4">
            Vos questions sur l'estimation à{" "}
            <em className="font-cormorant italic font-normal text-navy/70">{city.name}</em>
          </h2>
          <p className="text-neutral-500 text-[15px] font-light max-w-md">
            Tout ce que vous devez savoir avant de faire estimer votre bien
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {city.faq.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="animate-fade-in-up"
                style={{
                  borderBottom: "1px solid rgba(27, 58, 75, 0.08)",
                  ...(i === 0 ? { borderTop: "1px solid rgba(27, 58, 75, 0.08)" } : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-navy text-[15px] font-medium pr-4 group-hover:text-navy/70 transition-colors">
                    {q.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-gold" : "text-navy/40"}`}
                    strokeWidth={1.5}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
                  <p className="text-neutral-600 text-base font-light leading-[1.8]" dangerouslySetInnerHTML={{ __html: q.answer }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
