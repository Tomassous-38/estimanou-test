import type { Metadata } from "next";
import dynamic from "next/dynamic";

const WizardContainer = dynamic(
  () => import("@/sections/Estimation/WizardContainer").then((mod) => mod.WizardContainer),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Estimer mon bien gratuitement",
  description: "Formulaire d'estimation immobilière gratuite à La Réunion. Réponse personnalisée par un expert local sous 48h. Sans engagement.",
  alternates: { canonical: "https://estimanou.re/estimer" },
};

export default function EstimerPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#FAFAF8]">
      <div className="max-w-2xl mx-auto px-5 mb-6 text-center">
        <span className="pill-label">Estimation gratuite · 2 min</span>
        <h1 className="font-cormorant text-3xl md:text-4xl font-light text-navy tracking-tight mt-4 mb-3">
          Estimation <em>personnalisée</em> par un expert local
        </h1>
        <p className="text-sm font-outfit text-navy/45 font-light max-w-md mx-auto">
          Pas un algorithme. Valentin analyse personnellement votre bien. Résultat sous 48h.
        </p>
      </div>
      <div className="bg-white rounded-3xl shadow-[0_2px_40px_rgba(0,0,0,0.04)] border border-navy/[0.04] max-w-2xl mx-auto">
        <WizardContainer />
      </div>
      <div className="max-w-2xl mx-auto px-5 mt-8 flex flex-wrap items-center justify-center gap-6 text-[12px] font-outfit text-navy/30">
        <span className="flex items-center gap-1.5">🔒 100% confidentiel</span>
        <span className="flex items-center gap-1.5">⚡ Résultat sous 48h</span>
        <span className="flex items-center gap-1.5">🎯 Expert local</span>
        <span className="flex items-center gap-1.5">💰 Gratuit, sans engagement</span>
      </div>
    </main>
  );
}
