import { Link } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MapPin, Home, Calendar, Download, ArrowRight, Award, Clock, CheckCircle } from "lucide-react";

const barData = [
  { label: "Bas", value: 65, amount: "295 000 €", color: "bg-[#E8EDE6]" },
  { label: "Votre estimation", value: 85, amount: "337 500 €", color: "bg-[#B8975A]" },
  { label: "Haut", value: 100, amount: "375 000 €", color: "bg-[#1B3A4B]" },
];

const trustStats = [
  { icon: CheckCircle, value: "500+", label: "estimations réalisées" },
  { icon: Clock, value: "10 ans", label: "d'expérience locale" },
  { icon: Award, value: "Membre SNPI", label: "syndicat national" },
];

export const ResultatPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F8F6F2] min-h-screen">
        {/* Top spacing for fixed header */}
        <div className="pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="container-main max-w-3xl mx-auto">
            {/* Result Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
              {/* Card Header */}
              <div className="bg-[#1B3A4B] px-8 py-6 md:px-12 md:py-8">
                <div className="text-[#B8975A] text-xs font-outfit uppercase tracking-[0.2em] font-medium mb-3">
                  /résultat de votre estimation
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <Home size={16} className="text-[#B8975A]" />
                    <span className="font-outfit text-sm font-light">Maison T4</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin size={16} className="text-[#B8975A]" />
                    <span className="font-outfit text-sm font-light">Saint-Gilles-les-Bains</span>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="px-8 py-10 md:px-12 md:py-14 text-center">
                <p className="text-[#2C2C2C]/40 text-xs font-outfit uppercase tracking-[0.15em] font-medium mb-4">
                  Fourchette estimée
                </p>
                <h1 className="font-cormorant font-light text-[#B8975A] text-[36px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-tight mb-4">
                  320 000 € — 355 000 €
                </h1>
                <div className="flex items-center justify-center gap-2 text-[#2C2C2C]/40 text-sm font-outfit font-light">
                  <Calendar size={14} />
                  <span>Estimé le 15 janvier 2025</span>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-8 md:mx-12 h-px bg-[#E8EDE6]" />

              {/* Bar Chart */}
              <div className="px-8 py-10 md:px-12 md:py-12">
                <p className="text-[#2C2C2C]/40 text-xs font-outfit uppercase tracking-[0.15em] font-medium mb-8 text-center">
                  Positionnement sur le marché
                </p>
                <div className="flex items-end justify-center gap-6 md:gap-10 h-[180px]">
                  {barData.map((bar) => (
                    <div key={bar.label} className="flex flex-col items-center gap-3 flex-1 max-w-[120px]">
                      <span className="text-[#1B3A4B] text-sm md:text-base font-cormorant font-medium">
                        {bar.amount}
                      </span>
                      <div className="w-full flex items-end justify-center" style={{ height: "120px" }}>
                        <div
                          className={`w-full max-w-[60px] ${bar.color} rounded-t-lg transition-all duration-700`}
                          style={{ height: `${bar.value}%` }}
                        />
                      </div>
                      <span
                        className={`text-xs font-outfit tracking-wide text-center ${
                          bar.label === "Votre estimation"
                            ? "text-[#B8975A] font-semibold"
                            : "text-[#2C2C2C]/40 font-medium"
                        }`}
                      >
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Below Card - CTA Section */}
            <div className="text-center space-y-10">
              {/* Explanation text */}
              <div className="max-w-lg mx-auto">
                <h2 className="font-cormorant font-light text-[#1B3A4B] text-2xl md:text-3xl leading-tight tracking-tight mb-4">
                  Pour affiner cette estimation
                </h2>
                <p className="text-[#2C2C2C]/50 text-base font-outfit font-light leading-relaxed">
                  Ce résultat est une première estimation basée sur les données du marché local.
                  Pour obtenir une évaluation précise tenant compte des spécificités de votre bien,
                  je vous propose un rendez-vous personnalisé gratuit et sans engagement.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary px-8 py-4 text-sm inline-flex items-center gap-2"
                >
                  <span className="text-white/50">/</span>prendre rendez-vous avec Valentin
                  <ArrowRight size={16} />
                </Link>
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#1B3A4B]/20 text-[#1B3A4B] text-sm font-outfit font-medium hover:border-[#1B3A4B] hover:bg-[#1B3A4B] hover:text-white transition-all duration-300"
                >
                  <span className="opacity-50">/</span>télécharger le rapport
                  <Download size={16} />
                </button>
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-[#B8975A]/30 mx-auto" />

              {/* Trust Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8EDE6] flex items-center justify-center flex-shrink-0">
                      <stat.icon size={18} className="text-[#1B3A4B]" />
                    </div>
                    <div className="text-left">
                      <div className="text-[#1B3A4B] text-sm font-outfit font-semibold leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-[#2C2C2C]/40 text-xs font-outfit font-light">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
