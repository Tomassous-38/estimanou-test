import { ArrowRight } from "lucide-react";

interface CTABlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const CTABlock = ({ title, description, buttonText, buttonHref }: CTABlockProps) => {
  return (
    <div className="my-10 bg-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
        style={{ backgroundColor: 'rgba(184, 151, 90, 0.06)' }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full"
        style={{ backgroundColor: 'rgba(184, 151, 90, 0.04)' }}
      />

      <div className="relative z-10">
        <h3 className="text-white/90 font-cormorant font-light text-xl md:text-2xl tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-white/60 text-base font-light mb-7 max-w-md mx-auto">
          {description}
        </p>
        <a
          href={buttonHref}
          className="group text-navy text-[13px] items-center bg-white inline-flex justify-center text-center px-8 py-3.5 rounded-full hover:bg-navy-100 hover:shadow-lg transition-all duration-300 font-normal uppercase tracking-[0.15em]"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};
