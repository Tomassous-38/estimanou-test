import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { ExploreButton } from "@/components/ExploreButton";

export const Hero = () => {
  return (
    <section className="relative bg-[#F8F6F2] w-full overflow-hidden min-h-screen">
      <div className="container-main relative flex flex-col lg:flex-row items-center pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 gap-12 lg:gap-0">
        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-xl lg:max-w-[55%]">
          <div className="section-label mb-6">/estimation immobilière</div>

          <h1 className="font-cormorant font-light text-[#1B3A4B] text-[42px] md:text-[56px] lg:text-[68px] leading-[1.08] tracking-tight mb-8">
            Connaissez la valeur réelle de votre bien{" "}
            <span className="italic font-normal">à La Réunion</span>
          </h1>

          <p className="text-[#2C2C2C]/60 text-lg font-light leading-relaxed mb-10 max-w-md">
            Estimation gratuite et personnalisée par un expert local. Résultat détaillé en moins de 48h.
          </p>

          <Link
            to="/estimer"
            className="btn-primary px-10 py-5 text-base"
          >
            <span className="text-white/50 mr-1">/</span>lancer mon estimation
          </Link>

          {/* Side vertical text */}
          <div className="hidden lg:flex flex-col gap-6 absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
            <span className="text-[10px] font-outfit tracking-[0.2em] text-[#1B3A4B]/30 uppercase">
              rejoindre /estimanou
            </span>
          </div>
        </div>

        {/* Right Image - Asymmetric floating */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-center">
          <div className="relative">
            {/* Background shape */}
            <div className="absolute -top-8 -right-8 w-[90%] h-[90%] bg-[#1B3A4B]/5 rounded-[2rem]" />

            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden w-[340px] h-[440px] md:w-[400px] md:h-[520px] lg:w-[440px] lg:h-[560px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&crop=center"
                alt="Villa à La Réunion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A4B]/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl z-10">
              <div className="text-[#1B3A4B] font-cormorant text-3xl font-light">500+</div>
              <div className="text-[#2C2C2C]/50 text-xs font-outfit tracking-wide uppercase">estimations réalisées</div>
            </div>

            {/* Explore button */}
            <div className="absolute -top-4 -right-4 z-10">
              <ExploreButton text="  Explorer les secteurs  " size="sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Mini estimation form - Search bar overlay */}
      <div className="relative z-20 -mt-8 mb-12">
        <div className="container-main">
          <div className="bg-white rounded-2xl shadow-xl p-2 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch gap-2">
              <div className="flex-1 flex items-center gap-2 px-5 py-3 bg-[#F8F6F2] rounded-xl">
                <span className="text-[#2C2C2C]/40 text-sm whitespace-nowrap">Type de bien</span>
                <select className="flex-1 bg-transparent text-[#1B3A4B] text-sm font-medium outline-none cursor-pointer">
                  <option>Maison</option>
                  <option>Appartement</option>
                  <option>Terrain</option>
                  <option>Local commercial</option>
                </select>
                <ChevronDown size={14} className="text-[#2C2C2C]/30" />
              </div>
              <div className="flex-1 flex items-center gap-2 px-5 py-3 bg-[#F8F6F2] rounded-xl">
                <span className="text-[#2C2C2C]/40 text-sm whitespace-nowrap">Ville</span>
                <select className="flex-1 bg-transparent text-[#1B3A4B] text-sm font-medium outline-none cursor-pointer">
                  <option>Saint-Gilles</option>
                  <option>Saint-Leu</option>
                  <option>Étang-Salé</option>
                  <option>Saint-Paul</option>
                  <option>La Possession</option>
                </select>
                <ChevronDown size={14} className="text-[#2C2C2C]/30" />
              </div>
              <div className="flex-1 flex items-center gap-2 px-5 py-3 bg-[#F8F6F2] rounded-xl">
                <span className="text-[#2C2C2C]/40 text-sm whitespace-nowrap">Surface</span>
                <input
                  type="text"
                  placeholder="120 m²"
                  className="flex-1 bg-transparent text-[#1B3A4B] text-sm font-medium outline-none"
                />
              </div>
              <Link
                to="/estimer"
                className="flex items-center justify-center gap-2 bg-[#1B3A4B] text-white px-8 py-3 rounded-xl hover:bg-[#1B3A4B]/90 transition-colors text-sm font-medium"
              >
                <Search size={16} />
                <span className="text-white/60">/</span>estimer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info line */}
      <div className="container-main pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] font-outfit tracking-[0.15em] text-[#1B3A4B]/30 uppercase">
          <span>secteurs couverts</span>
          <span>© 2025 /estimanou • Tous droits réservés</span>
        </div>
      </div>
    </section>
  );
};
