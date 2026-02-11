'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  questions: { question: string; answer: string }[];
}

export const FAQBlock = ({ questions }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-10">
      <h2 className="text-navy font-cormorant font-light tracking-tight mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.25' }}>
        Questions fréquentes
      </h2>
      <p className="text-neutral-600 text-[15px] font-light mb-6">
        Les réponses aux questions les plus posées sur le sujet.
      </p>
      <div className="space-y-0">
        {questions.map((q, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              style={{
                borderBottom: '1px solid rgba(27, 58, 75, 0.08)',
                ...(i === 0 ? { borderTop: '1px solid rgba(27, 58, 75, 0.08)' } : {}),
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
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
              >
                <p className="text-neutral-600 text-base font-light leading-[1.8]" dangerouslySetInnerHTML={{ __html: q.answer }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
