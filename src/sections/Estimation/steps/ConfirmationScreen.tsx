'use client';

import { motion } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Home } from 'lucide-react';
import { useEstimationStore } from '@/lib/store';
import { PROPERTY_TYPES, PROPERTY_SUBTYPES, ETAT_OPTIONS } from '@/lib/constants';

export const ConfirmationScreen = () => {
  const { formData } = useEstimationStore();

  const typeLabel = PROPERTY_TYPES.find((t) => t.value === formData.propertyType)?.label || '';
  const subTypeLabel = formData.propertyType && formData.propertySubType
    ? PROPERTY_SUBTYPES[formData.propertyType]?.find((s) => s.value === formData.propertySubType)?.label || ''
    : '';
  const etatLabel = ETAT_OPTIONS.find((e) => e.value === formData.etatGeneral)?.label || '';

  return (
    <div className="flex flex-col items-center text-center py-8">
      {/* Success animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-6"
      >
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Check size={36} className="text-white" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-cormorant text-3xl md:text-4xl font-light text-navy mb-2"
      >
        C'est envoyé !
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-sm font-outfit text-navy/50 mb-8 max-w-sm"
      >
        Valentin vous recontacte sous 48h avec votre estimation personnalisée.
      </motion.p>

      {/* Recap card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md bg-navy/[0.02] border border-navy/8 rounded-2xl p-5 text-left space-y-4"
      >
        <h3 className="text-[12px] font-outfit text-navy/40 tracking-wider uppercase">Récapitulatif</h3>

        {/* Property */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
            <Home size={16} className="text-navy/50" />
          </div>
          <div>
            <p className="text-sm font-outfit font-medium text-navy">
              {typeLabel}{subTypeLabel ? ` · ${subTypeLabel}` : ''}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {formData.surfaceHabitable && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-navy/[0.05] text-navy/50 font-outfit">{formData.surfaceHabitable} m²</span>
              )}
              {formData.nombrePieces && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-navy/[0.05] text-navy/50 font-outfit">{formData.nombrePieces} pièces</span>
              )}
              {formData.nombreChambres && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-navy/[0.05] text-navy/50 font-outfit">{formData.nombreChambres} ch.</span>
              )}
              {etatLabel && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-navy/[0.05] text-navy/50 font-outfit">{etatLabel}</span>
              )}
            </div>
            {formData.extras.length > 0 && (
              <p className="text-[11px] font-outfit text-navy/35 mt-1">
                + {formData.extras.length} extras
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        {formData.adresse && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
              <MapPin size={16} className="text-navy/50" />
            </div>
            <div>
              <p className="text-sm font-outfit text-navy/70">{formData.adresse}</p>
              {(formData.quartier || formData.commune) && (
                <p className="text-[11px] font-outfit text-navy/40 mt-0.5">
                  {formData.quartier}{formData.quartier && formData.commune ? ', ' : ''}{formData.commune}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
            <Phone size={16} className="text-navy/50" />
          </div>
          <div>
            <p className="text-sm font-outfit text-navy/70">
              {formData.prenom} {formData.nom}
            </p>
            <p className="text-[12px] font-outfit text-navy/40">
              {formData.telephone} · {formData.email}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Back to home */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-sm font-outfit text-navy/40 hover:text-navy transition-colors"
      >
        ← Retour à l'accueil
      </motion.a>
    </div>
  );
};
