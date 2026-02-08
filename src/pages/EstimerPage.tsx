import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import {
  Home,
  Building2,
  LandPlot,
  Store,
  ChevronRight,
  ChevronLeft,
  Shield,
  TrendingUp,
  CheckCircle2,
  Send,
} from "lucide-react";

type PropertyType = "maison" | "appartement" | "terrain" | "commercial" | "";

interface FormData {
  type: PropertyType;
  commune: string;
  surface: string;
  pieces: string;
  etat: string;
  nom: string;
  email: string;
  telephone: string;
}

const COMMUNES_REUNION = [
  "Saint-Denis",
  "Saint-Paul",
  "Saint-Pierre",
  "Le Tampon",
  "Saint-André",
  "Saint-Louis",
  "Le Port",
  "Saint-Benoît",
  "Saint-Joseph",
  "Saint-Leu",
  "Sainte-Marie",
  "Sainte-Suzanne",
  "Saint-Gilles-les-Bains",
  "Étang-Salé",
  "La Possession",
  "Petite-Île",
  "Bras-Panon",
  "Entre-Deux",
  "Les Avirons",
  "Trois-Bassins",
  "Cilaos",
  "Salazie",
  "Sainte-Rose",
  "Plaine-des-Palmistes",
];

const PROPERTY_TYPES: {
  value: PropertyType;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    value: "maison",
    label: "Maison",
    icon: <Home size={28} strokeWidth={1.5} />,
    description: "Villa, maison individuelle",
  },
  {
    value: "appartement",
    label: "Appartement",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    description: "Studio, T2, T3 et plus",
  },
  {
    value: "terrain",
    label: "Terrain",
    icon: <LandPlot size={28} strokeWidth={1.5} />,
    description: "Constructible, agricole",
  },
  {
    value: "commercial",
    label: "Local commercial",
    icon: <Store size={28} strokeWidth={1.5} />,
    description: "Bureau, commerce, entrepôt",
  },
];

const STEP_LABELS = [
  "Type de bien",
  "Détails du bien",
  "Vos coordonnées",
];

export const EstimerPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    type: "",
    commune: "",
    surface: "",
    pieces: "",
    etat: "",
    nom: "",
    email: "",
    telephone: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = formData.type !== "";
  const canProceedStep2 =
    formData.commune !== "" &&
    formData.surface !== "" &&
    formData.pieces !== "" &&
    formData.etat !== "";
  const canSubmit =
    formData.nom.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telephone.trim() !== "";

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((s) => s + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setIsSubmitted(true);
    }
  };

  const progressPercent = (currentStep / 3) * 100;

  return (
    <>
      <Header />

      {/* Hero - half height */}
      <section className="relative bg-[#1B3A4B] w-full overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B8975A] blur-[120px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#B8975A] blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container-main relative z-10 pt-36 pb-20 md:pt-44 md:pb-28 text-center">
          <div className="section-label text-[#B8975A]/80 mb-6">/estimation en ligne</div>
          <h1 className="font-cormorant font-light text-white text-[36px] md:text-[50px] lg:text-[60px] leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
            Estimez votre bien{" "}
            <span className="italic font-normal text-[#B8975A]">en quelques clics</span>
          </h1>
          <p className="text-white/50 text-lg font-outfit font-light leading-relaxed max-w-xl mx-auto">
            Remplissez ce formulaire en 3 étapes simples et recevez une estimation
            détaillée de votre bien immobilier à La Réunion.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative bg-[#F8F6F2] w-full py-16 md:py-24">
        <div className="container-main max-w-3xl mx-auto">
          {!isSubmitted ? (
            <>
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  {STEP_LABELS.map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = currentStep === stepNum;
                    const isCompleted = currentStep > stepNum;
                    return (
                      <div
                        key={label}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-outfit font-medium transition-all duration-300 ${
                            isCompleted
                              ? "bg-[#B8975A] text-white"
                              : isActive
                                ? "bg-[#1B3A4B] text-white"
                                : "bg-[#E8EDE6] text-[#1B3A4B]/40"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 size={16} />
                          ) : (
                            stepNum
                          )}
                        </div>
                        <span
                          className={`hidden sm:inline text-sm font-outfit transition-colors duration-300 ${
                            isActive
                              ? "text-[#1B3A4B] font-medium"
                              : isCompleted
                                ? "text-[#B8975A] font-medium"
                                : "text-[#2C2C2C]/30 font-light"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full h-1.5 bg-[#1B3A4B]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B8975A] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Form Card */}
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-2xl shadow-lg shadow-[#1B3A4B]/5 p-8 md:p-12">
                  {/* Step 1: Type de bien */}
                  {currentStep === 1 && (
                    <div>
                      <h2 className="font-cormorant text-[#1B3A4B] text-2xl md:text-3xl font-light tracking-tight mb-2">
                        Quel est le type de votre bien ?
                      </h2>
                      <p className="text-[#2C2C2C]/50 text-sm font-outfit font-light mb-8">
                        Sélectionnez la catégorie qui correspond à votre propriété.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {PROPERTY_TYPES.map((item) => {
                          const isSelected = formData.type === item.value;
                          return (
                            <button
                              key={item.value}
                              type="button"
                              onClick={() => updateField("type", item.value)}
                              className={`group relative flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? "border-[#B8975A] bg-[#B8975A]/5 shadow-md"
                                  : "border-[#E8EDE6] bg-white hover:border-[#B8975A]/30 hover:shadow-sm"
                              }`}
                            >
                              <div
                                className={`mb-3 transition-colors duration-300 ${
                                  isSelected
                                    ? "text-[#B8975A]"
                                    : "text-[#1B3A4B]/40 group-hover:text-[#1B3A4B]/70"
                                }`}
                              >
                                {item.icon}
                              </div>
                              <span
                                className={`text-sm font-outfit font-medium mb-1 transition-colors duration-300 ${
                                  isSelected
                                    ? "text-[#1B3A4B]"
                                    : "text-[#1B3A4B]/70"
                                }`}
                              >
                                {item.label}
                              </span>
                              <span className="text-[11px] font-outfit font-light text-[#2C2C2C]/40 leading-tight">
                                {item.description}
                              </span>
                              {isSelected && (
                                <div className="absolute top-2 right-2">
                                  <CheckCircle2
                                    size={16}
                                    className="text-[#B8975A]"
                                  />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Details du bien */}
                  {currentStep === 2 && (
                    <div>
                      <h2 className="font-cormorant text-[#1B3A4B] text-2xl md:text-3xl font-light tracking-tight mb-2">
                        Décrivez votre bien
                      </h2>
                      <p className="text-[#2C2C2C]/50 text-sm font-outfit font-light mb-8">
                        Ces informations nous permettent d'affiner votre estimation.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Commune */}
                        <div className="md:col-span-2">
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            Localisation
                          </label>
                          <select
                            value={formData.commune}
                            onChange={(e) =>
                              updateField("commune", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Sélectionnez une commune</option>
                            {COMMUNES_REUNION.map((commune) => (
                              <option key={commune} value={commune}>
                                {commune}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Surface */}
                        <div>
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            Surface (m²)
                          </label>
                          <input
                            type="number"
                            min="1"
                            placeholder="Ex : 120"
                            value={formData.surface}
                            onChange={(e) =>
                              updateField("surface", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all"
                          />
                        </div>

                        {/* Nombre de pieces */}
                        <div>
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            Nombre de pièces
                          </label>
                          <select
                            value={formData.pieces}
                            onChange={(e) =>
                              updateField("pieces", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Sélectionnez</option>
                            <option value="1">1 pièce</option>
                            <option value="2">2 pièces</option>
                            <option value="3">3 pièces</option>
                            <option value="4">4 pièces</option>
                            <option value="5">5 pièces</option>
                            <option value="6+">6 pièces et plus</option>
                          </select>
                        </div>

                        {/* Etat */}
                        <div className="md:col-span-2">
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            État du bien
                          </label>
                          <select
                            value={formData.etat}
                            onChange={(e) =>
                              updateField("etat", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Sélectionnez l'état</option>
                            <option value="neuf">Neuf</option>
                            <option value="bon">Bon état</option>
                            <option value="rafraichir">À rafraîchir</option>
                            <option value="renover">À rénover</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Coordonnees */}
                  {currentStep === 3 && (
                    <div>
                      <h2 className="font-cormorant text-[#1B3A4B] text-2xl md:text-3xl font-light tracking-tight mb-2">
                        Vos coordonnées
                      </h2>
                      <p className="text-[#2C2C2C]/50 text-sm font-outfit font-light mb-8">
                        Nous vous enverrons votre estimation détaillée par email.
                      </p>

                      <div className="space-y-6">
                        {/* Nom */}
                        <div>
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            Nom complet
                          </label>
                          <input
                            type="text"
                            placeholder="Jean Dupont"
                            value={formData.nom}
                            onChange={(e) =>
                              updateField("nom", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            Adresse email
                          </label>
                          <input
                            type="email"
                            placeholder="jean.dupont@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              updateField("email", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all"
                          />
                        </div>

                        {/* Telephone */}
                        <div>
                          <label className="block text-[#1B3A4B] text-xs font-outfit font-semibold uppercase tracking-[0.1em] mb-2">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            placeholder="06 93 XX XX XX"
                            value={formData.telephone}
                            onChange={(e) =>
                              updateField("telephone", e.target.value)
                            }
                            className="w-full bg-[#F8F6F2] text-[#1B3A4B] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-10 pt-8 border-t border-[#E8EDE6]">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="flex items-center gap-2 text-[#1B3A4B]/60 text-sm font-outfit font-medium hover:text-[#1B3A4B] transition-colors group"
                      >
                        <ChevronLeft
                          size={18}
                          className="transition-transform group-hover:-translate-x-0.5"
                        />
                        Précédent
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && !canProceedStep1) ||
                          (currentStep === 2 && !canProceedStep2)
                        }
                        className="flex items-center gap-2 bg-[#1B3A4B] text-white text-sm font-outfit font-medium px-8 py-3 rounded-full hover:bg-[#1B3A4B]/90 transition-all hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                      >
                        Suivant
                        <ChevronRight
                          size={18}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className="flex items-center gap-2 bg-[#B8975A] text-white text-sm font-outfit font-medium px-8 py-3 rounded-full hover:bg-[#a6854d] transition-all hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                      >
                        <span className="text-white/60">/</span>recevoir mon
                        estimation
                        <Send
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </form>

              {/* Trust Elements */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
                <div className="flex items-center gap-3 text-[#2C2C2C]/40">
                  <Shield size={18} className="text-[#B8975A]/60" />
                  <span className="text-sm font-outfit font-light">
                    Vos données restent confidentielles
                  </span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-[#E8EDE6]" />
                <div className="flex items-center gap-3 text-[#2C2C2C]/40">
                  <TrendingUp size={18} className="text-[#B8975A]/60" />
                  <span className="text-sm font-outfit font-light">
                    500+ estimations réalisées
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="bg-white rounded-2xl shadow-lg shadow-[#1B3A4B]/5 p-12 md:p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#B8975A]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-[#B8975A]" />
              </div>
              <h2 className="font-cormorant text-[#1B3A4B] text-3xl md:text-4xl font-light tracking-tight mb-4">
                Demande envoyée avec succès
              </h2>
              <p className="text-[#2C2C2C]/50 text-base font-outfit font-light leading-relaxed max-w-md mx-auto mb-8">
                Merci {formData.nom.split(" ")[0]} ! Vous recevrez votre estimation
                détaillée à l'adresse{" "}
                <span className="text-[#1B3A4B] font-medium">
                  {formData.email}
                </span>{" "}
                dans les prochaines 48 heures.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    type: "",
                    commune: "",
                    surface: "",
                    pieces: "",
                    etat: "",
                    nom: "",
                    email: "",
                    telephone: "",
                  });
                }}
                className="inline-flex items-center gap-2 bg-[#1B3A4B] text-white text-sm font-outfit font-medium px-8 py-3 rounded-full hover:bg-[#1B3A4B]/90 transition-all hover:scale-[1.02]"
              >
                Nouvelle estimation
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};
