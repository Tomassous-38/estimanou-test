'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Mail } from 'lucide-react';
import { useEstimationStore } from '@/lib/store';
import { CONTACT_PREF_OPTIONS } from '@/lib/constants';
import type { ContactPreference } from '@/lib/types';

export const Step6Coordonnees = () => {
  const { formData, setField, toggleContactPreference } = useEstimationStore();
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  const validatePhone = (val: string) => {
    const cleaned = val.replace(/\s/g, '');
    // Accept 06/07/02 formats and +262 etc.
    return /^(\+?\d{10,13}|0[1-9]\d{8})$/.test(cleaned);
  };

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setField('telephone', val);
    if (val.length > 5) setPhoneValid(validatePhone(val));
    else setPhoneValid(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setField('email', val);
    if (val.length > 3) setEmailValid(validateEmail(val));
    else setEmailValid(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-navy mb-1.5">
          Dernière étape !
        </h2>
        <p className="text-sm font-outfit text-navy/45 font-light">
          Vos coordonnées restent confidentielles et ne sont jamais partagées.
        </p>
      </div>

      {/* Reassurance */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-navy/[0.03] border border-navy/5">
        <div className="w-8 h-8 rounded-full bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
          <span className="text-sm">🔒</span>
        </div>
        <p className="text-[12px] font-outfit text-navy/50 leading-relaxed">
          Vos informations sont utilisées uniquement pour vous transmettre votre estimation. Aucune donnée n'est partagée avec des tiers.
        </p>
      </div>

      <div className="space-y-4">
        {/* Prénom / Nom */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-outfit font-medium text-navy/80">Prénom</label>
            <input
              type="text"
              value={formData.prenom}
              onChange={(e) => setField('prenom', e.target.value)}
              placeholder="Prénom"
              className="w-full h-[48px] px-4 rounded-xl border border-navy/10 bg-white text-navy font-outfit text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-outfit font-medium text-navy/80">Nom</label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) => setField('nom', e.target.value)}
              placeholder="Nom"
              className="w-full h-[48px] px-4 rounded-xl border border-navy/10 bg-white text-navy font-outfit text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
          </div>
        </div>

        {/* Téléphone */}
        <div className="space-y-1.5">
          <label className="text-sm font-outfit font-medium text-navy/80">
            Téléphone <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/25" />
            <input
              type="tel"
              value={formData.telephone}
              onChange={handlePhoneChange}
              placeholder="06 93 XX XX XX"
              className="w-full h-[48px] pl-10 pr-10 rounded-xl border border-navy/10 bg-white text-navy font-outfit text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
            {phoneValid !== null && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {phoneValid ? (
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">!</span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-sm font-outfit font-medium text-navy/80">
            Email <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/25" />
            <input
              type="email"
              value={formData.email}
              onChange={handleEmailChange}
              placeholder="votre@email.com"
              className="w-full h-[48px] pl-10 pr-10 rounded-xl border border-navy/10 bg-white text-navy font-outfit text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
            {emailValid !== null && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {emailValid ? (
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">!</span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact preferences */}
        <div className="space-y-2.5">
          <label className="text-sm font-outfit font-medium text-navy/80">
            Comment préférez-vous être contacté ?
          </label>
          <div className="flex gap-2">
            {CONTACT_PREF_OPTIONS.map((opt) => {
              const isSelected = formData.contactPreferences.includes(opt.value);
              return (
                <motion.button
                  key={opt.value}
                  type="button"
                  onClick={() => toggleContactPreference(opt.value as ContactPreference)}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-outfit cursor-pointer
                    transition-all duration-200 border
                    ${isSelected
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-navy/60 border-navy/10 hover:border-navy/20'
                    }
                  `}
                >
                  <span>{opt.icon}</span>
                  {opt.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Commentaire */}
        <div className="space-y-1.5">
          <label className="text-sm font-outfit font-medium text-navy/80">
            Un commentaire à ajouter ? <span className="text-navy/30 font-normal">(optionnel)</span>
          </label>
          <textarea
            value={formData.commentaire}
            onChange={(e) => setField('commentaire', e.target.value)}
            placeholder="Informations supplémentaires sur votre bien, votre projet..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy font-outfit text-sm placeholder:text-navy/25 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
};
