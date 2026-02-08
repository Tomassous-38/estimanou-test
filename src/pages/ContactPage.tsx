import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28">
        {/* Split Layout */}
        <section className="min-h-[calc(100vh-7rem)]">
          <div className="grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
            {/* Left Side — Contact Info (Navy) */}
            <div className="bg-[#1B3A4B] text-white px-8 md:px-16 lg:px-20 py-20 lg:py-28 flex flex-col justify-center">
              <div className="max-w-md mx-auto lg:mx-0 w-full">
                <div className="section-label !text-[#B8975A] mb-6">
                  /contact
                </div>

                <h1 className="font-cormorant font-light text-white text-[40px] md:text-[52px] leading-[1.1] tracking-tight mb-6">
                  Contactez-nous
                </h1>

                <p className="text-white/50 text-base font-outfit font-light leading-relaxed mb-14">
                  Une question, un projet immobilier ou simplement envie
                  d'échanger ? N'hésitez pas à nous contacter.
                </p>

                {/* Contact Details */}
                <div className="space-y-8 mb-16">
                  <a
                    href="tel:+33693488883"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8975A]/20 transition-colors">
                      <Phone size={18} className="text-[#B8975A]" />
                    </div>
                    <div>
                      <span className="block text-white/40 text-xs font-outfit uppercase tracking-[0.12em] mb-1">
                        Téléphone
                      </span>
                      <span className="text-white font-outfit font-light text-base group-hover:text-[#B8975A] transition-colors">
                        06 93 48 88 83
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:valentinbourassin@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8975A]/20 transition-colors">
                      <Mail size={18} className="text-[#B8975A]" />
                    </div>
                    <div>
                      <span className="block text-white/40 text-xs font-outfit uppercase tracking-[0.12em] mb-1">
                        Email
                      </span>
                      <span className="text-white font-outfit font-light text-base group-hover:text-[#B8975A] transition-colors">
                        valentinbourassin@gmail.com
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#B8975A]" />
                    </div>
                    <div>
                      <span className="block text-white/40 text-xs font-outfit uppercase tracking-[0.12em] mb-1">
                        Localisation
                      </span>
                      <span className="text-white font-outfit font-light text-base">
                        Secteur Ouest, Île de La Réunion
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <span className="block text-white/40 text-xs font-outfit uppercase tracking-[0.12em] mb-4">
                    Suivez-nous
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8975A] text-white/70 hover:text-white transition-all"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8975A] text-white/70 hover:text-white transition-all"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8975A] text-white/70 hover:text-white transition-all"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side — Form (White) */}
            <div className="bg-white px-8 md:px-16 lg:px-20 py-20 lg:py-28 flex flex-col justify-center">
              <div className="max-w-lg mx-auto lg:mx-0 w-full">
                <h2 className="font-cormorant font-light text-[#1B3A4B] text-[28px] md:text-[36px] leading-[1.15] tracking-tight mb-3">
                  Envoyez-nous un message
                </h2>
                <p className="text-[#2C2C2C]/50 text-sm font-outfit font-light mb-10">
                  Nous vous répondrons dans les meilleurs délais.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-[#1B3A4B] text-xs font-outfit uppercase tracking-[0.12em] font-medium mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      className="w-full bg-[#F8F6F2] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all placeholder:text-[#2C2C2C]/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#1B3A4B] text-xs font-outfit uppercase tracking-[0.12em] font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full bg-[#F8F6F2] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all placeholder:text-[#2C2C2C]/30"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-[#1B3A4B] text-xs font-outfit uppercase tracking-[0.12em] font-medium mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className="w-full bg-[#F8F6F2] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all placeholder:text-[#2C2C2C]/30"
                    />
                  </div>

                  {/* Objet (Dropdown) */}
                  <div>
                    <label
                      htmlFor="objet"
                      className="block text-[#1B3A4B] text-xs font-outfit uppercase tracking-[0.12em] font-medium mb-2"
                    >
                      Objet
                    </label>
                    <select
                      id="objet"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      className="w-full bg-[#F8F6F2] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all appearance-none cursor-pointer text-[#2C2C2C]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%232C2C2C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1.25rem center",
                      }}
                    >
                      <option value="" disabled>
                        Sélectionnez un objet
                      </option>
                      <option value="estimation">Estimation</option>
                      <option value="question">Question</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#1B3A4B] text-xs font-outfit uppercase tracking-[0.12em] font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Décrivez votre projet ou votre question..."
                      className="w-full bg-[#F8F6F2] text-sm font-outfit px-5 py-3.5 rounded-xl border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all resize-none placeholder:text-[#2C2C2C]/30"
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-primary w-full mt-2">
                    <span className="text-white/50 mr-1">/</span>envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
