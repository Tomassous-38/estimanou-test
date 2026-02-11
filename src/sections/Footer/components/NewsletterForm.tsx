import { ArrowRight } from "lucide-react";

export const NewsletterForm = () => {
  return (
    <div className="relative flex flex-col gap-y-5 w-full max-w-lg mx-auto">
      <h3 className="text-navy font-cormorant font-light tracking-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
        Recevez nos{" "}
        <em className="font-cormorant italic font-normal text-navy/70">analyses</em>{" "}
        du marché
      </h3>
      <p className="text-neutral-500 text-[13px] font-light max-w-sm mx-auto">
        Restez informé des tendances du marché réunionnais et de nos dernières estimations
      </p>
      <form className="flex flex-col md:flex-row gap-2.5 mt-1">
        <input
          type="email"
          name="fields[email]"
          placeholder="Votre adresse email"
          className="text-navy text-sm bg-white flex-1 border border-neutral-200 px-5 py-3.5 rounded-full focus:outline-none focus:ring-1 focus:ring-gold/40 transition-shadow placeholder:text-neutral-300"
        />
        <button
          type="submit"
          className="group text-white items-center bg-navy inline-flex justify-center text-[12px] text-center px-6 py-3.5 rounded-full hover:bg-navy/90 transition-all font-normal tracking-[0.1em]"
        >
          /s'inscrire
          <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
        </button>
      </form>
      <p className="text-neutral-500 text-[11px] font-light">
        Pas de spam, uniquement du contenu pertinent. Désinscription en un clic.
      </p>
    </div>
  );
};
