import { motion, AnimatePresence } from 'framer-motion';
import { useEstimationStore } from '@/lib/store';
import {
  ETAT_OPTIONS, ANNEE_OPTIONS, DPE_OPTIONS,
  EXTRAS_MAISON, EXTRAS_APPARTEMENT, EXTRAS_TERRAIN, EXTRAS_LOCAL,
  OCCUPATION_OPTIONS,
} from '@/lib/constants';
import { SelectCard } from '../ui/SelectCard';
import { ToggleCard } from '../ui/ToggleCard';
import { SurfaceInput } from '../ui/SurfaceInput';
import type { EtatGeneral, AnneeConstruction, DPE, Occupation } from '@/lib/types';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const Step3EtatExtras = () => {
  const { formData, setField, toggleExtra } = useEstimationStore();
  const { propertyType } = formData;

  const getExtras = () => {
    switch (propertyType) {
      case 'maison': return EXTRAS_MAISON;
      case 'appartement': return EXTRAS_APPARTEMENT;
      case 'terrain': return EXTRAS_TERRAIN;
      case 'local_commercial': return EXTRAS_LOCAL;
      default: return [];
    }
  };

  const extras = getExtras();
  const showEtat = propertyType !== 'terrain';
  const showAnnee = propertyType !== 'terrain';
  const showDPE = propertyType === 'maison' || propertyType === 'appartement';
  const showOccupation = propertyType === 'immeuble';
  const showPermis = propertyType === 'terrain';
  const showBail = propertyType === 'local_commercial';

  let sectionIndex = 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-navy mb-1.5">
          État et caractéristiques supplémentaires
        </h2>
        <p className="text-sm font-outfit text-navy/45 font-light">
          Ces détails font la différence dans l'estimation
        </p>
      </div>

      {/* État général */}
      {showEtat && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-2.5">
          <label className="text-sm font-outfit font-medium text-navy/80">État général</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {ETAT_OPTIONS
              .filter((opt) => propertyType === 'immeuble' ? opt.value !== 'neuf' : true)
              .map((opt) => (
                <SelectCard
                  key={opt.value}
                  label={opt.label}
                  selected={formData.etatGeneral === opt.value}
                  onClick={() => setField('etatGeneral', opt.value as EtatGeneral)}
                  colorAccent={opt.color}
                  size="small"
                />
              ))}
          </div>
        </motion.div>
      )}

      {/* Année de construction */}
      {showAnnee && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-2.5">
          <label className="text-sm font-outfit font-medium text-navy/80">Année de construction</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {ANNEE_OPTIONS.map((opt) => (
              <SelectCard
                key={opt.value}
                label={opt.label}
                selected={formData.anneeConstruction === opt.value}
                onClick={() => setField('anneeConstruction', opt.value as AnneeConstruction)}
                size="small"
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* DPE */}
      {showDPE && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-2.5">
          <label className="text-sm font-outfit font-medium text-navy/80">DPE (si connu)</label>
          <div className="flex flex-wrap gap-2">
            {DPE_OPTIONS.map((opt, i) => (
              <motion.button
                key={opt.value}
                type="button"
                onClick={() => setField('dpe', opt.value as DPE)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  min-w-[44px] h-[44px] rounded-xl text-sm font-outfit font-semibold cursor-pointer
                  transition-all duration-200 border
                  ${formData.dpe === opt.value
                    ? 'text-white shadow-lg border-transparent'
                    : 'bg-white text-navy/60 border-navy/10 hover:border-navy/20 hover:shadow-sm'
                  }
                  ${opt.value === 'inconnu' ? 'px-3 text-[12px] font-normal' : 'px-2'}
                `}
                style={formData.dpe === opt.value ? { backgroundColor: opt.color, borderColor: opt.color } : undefined}
              >
                {opt.label}
              </motion.button>
            ))}
          </div>
          {/* DPE contextual feedback */}
          <AnimatePresence>
            {formData.dpe && formData.dpe !== 'inconnu' && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-[12px] font-outfit text-navy/40 font-light pt-1"
              >
                {(formData.dpe === 'A' || formData.dpe === 'B') && '✨ Excellent DPE — un atout majeur pour la valorisation'}
                {formData.dpe === 'C' && '👍 Bon DPE — dans la moyenne haute'}
                {formData.dpe === 'D' && 'DPE moyen — des travaux pourraient améliorer la valeur'}
                {(formData.dpe === 'E' || formData.dpe === 'F' || formData.dpe === 'G') && '⚠️ DPE énergivore — un facteur à prendre en compte'}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Occupation (Immeuble) */}
      {showOccupation && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-2.5">
          <label className="text-sm font-outfit font-medium text-navy/80">Occupation</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {OCCUPATION_OPTIONS.map((opt) => (
              <SelectCard
                key={opt.value}
                label={opt.label}
                selected={formData.occupation === opt.value}
                onClick={() => setField('occupation', opt.value as Occupation)}
                size="small"
              />
            ))}
          </div>
          <AnimatePresence>
            {(formData.occupation === 'entierement_loue' || formData.occupation === 'partiellement_loue') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <SurfaceInput
                  label="Revenus locatifs mensuels (optionnel)"
                  value={formData.revenusLocatifs}
                  onChange={(v) => setField('revenusLocatifs', v)}
                  unit="€/mois"
                  placeholder="3500"
                  showSlider={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Bail commercial */}
      {showBail && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-3">
          <div className="space-y-2.5">
            <label className="text-sm font-outfit font-medium text-navy/80">Bail commercial en cours</label>
            <div className="grid grid-cols-2 gap-2.5">
              <SelectCard label="Oui" selected={formData.bailCommercial === true} onClick={() => setField('bailCommercial', true)} size="small" />
              <SelectCard label="Non" selected={formData.bailCommercial === false} onClick={() => setField('bailCommercial', false)} size="small" />
            </div>
          </div>
          <AnimatePresence>
            {formData.bailCommercial && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <SurfaceInput
                  label="Loyer mensuel actuel (optionnel)"
                  value={formData.loyerMensuel}
                  onChange={(v) => setField('loyerMensuel', v)}
                  unit="€/mois"
                  placeholder="2000"
                  showSlider={false}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Permis de construire (Terrain) */}
      {showPermis && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-2.5">
          <label className="text-sm font-outfit font-medium text-navy/80">Permis de construire déjà déposé ?</label>
          <div className="grid grid-cols-2 gap-2.5">
            <SelectCard label="Oui" selected={formData.permisDepose === true} onClick={() => setField('permisDepose', true)} size="small" />
            <SelectCard label="Non" selected={formData.permisDepose === false} onClick={() => setField('permisDepose', false)} size="small" />
          </div>
        </motion.div>
      )}

      {/* Extras */}
      {extras.length > 0 && (
        <motion.div custom={sectionIndex++} initial="hidden" animate="visible" variants={sectionVariants} className="space-y-3">
          <label className="text-sm font-outfit font-medium text-navy/80">
            {propertyType === 'terrain' ? 'Caractéristiques' : 'Extras & équipements'}
            {formData.extras.length > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-navy text-white text-[10px] font-semibold align-middle"
              >
                {formData.extras.length}
              </motion.span>
            )}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {extras.map((extra, i) => (
              <motion.div
                key={extra.value}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <ToggleCard
                  label={extra.label}
                  icon={extra.icon}
                  selected={formData.extras.includes(extra.value)}
                  onClick={() => toggleExtra(extra.value)}
                />
              </motion.div>
            ))}
          </div>

          {/* Badges */}
          <AnimatePresence mode="popLayout">
            {formData.extras.length > 0 && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-1.5 pt-2"
              >
                {formData.extras.map((e) => {
                  const found = extras.find((x) => x.value === e);
                  return found ? (
                    <motion.span
                      key={e}
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-navy/[0.06] text-[11px] font-outfit text-navy/60 font-medium"
                    >
                      {found.icon} {found.label} ✓
                    </motion.span>
                  ) : null;
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};
