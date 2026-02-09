import { motion, AnimatePresence } from 'framer-motion';
import { useEstimationStore } from '@/lib/store';
import { OBJECTIF_OPTIONS, DELAI_OPTIONS, OCCUPATION_BIEN_OPTIONS } from '@/lib/constants';
import { SelectCard } from '../ui/SelectCard';
import { ContextualMessage } from '../ui/ContextualMessage';
import type { Objectif, Delai, OccupationBien } from '@/lib/types';

export const Step5Projet = () => {
  const { formData, setField } = useEstimationStore();
  const { propertyType } = formData;

  const showOccupation = propertyType === 'maison' || propertyType === 'appartement' || propertyType === 'local_commercial';

  const delaiMessage = formData.delai
    ? DELAI_OPTIONS.find((d) => d.value === formData.delai)?.message || ''
    : '';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-navy mb-1.5">
          Parlez-nous de votre projet
        </h2>
        <p className="text-sm font-outfit text-navy/45 font-light">
          Pour adapter notre estimation à votre situation
        </p>
      </div>

      {/* Objectif */}
      <div className="space-y-3">
        <label className="text-sm font-outfit font-medium text-navy/80">Quel est votre objectif ?</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OBJECTIF_OPTIONS.map((opt, i) => (
            <motion.button
              key={opt.value}
              type="button"
              onClick={() => setField('objectif', opt.value as Objectif)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`
                flex items-start gap-3 p-4 rounded-2xl border text-left cursor-pointer
                transition-all duration-300
                ${formData.objectif === opt.value
                  ? 'border-navy bg-navy/[0.04] shadow-md'
                  : 'border-navy/8 bg-white hover:border-navy/15 hover:shadow-sm'
                }
              `}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{opt.icon}</span>
              <div>
                <span className="text-sm font-outfit font-medium text-navy block">{opt.label}</span>
                <span className="text-[12px] font-outfit text-navy/45 font-light">{opt.description}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Délai */}
      <div className="space-y-3">
        <label className="text-sm font-outfit font-medium text-navy/80">Dans quel délai ?</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {DELAI_OPTIONS.map((opt) => (
            <SelectCard
              key={opt.value}
              label={opt.label}
              selected={formData.delai === opt.value}
              onClick={() => setField('delai', opt.value as Delai)}
              size="small"
            />
          ))}
        </div>
        <ContextualMessage message={delaiMessage} visible={!!formData.delai} />
      </div>

      {/* Occupation du bien */}
      <AnimatePresence>
        {showOccupation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2.5"
          >
            <label className="text-sm font-outfit font-medium text-navy/80">Le bien est actuellement…</label>
            <div className="grid grid-cols-3 gap-2.5">
              {OCCUPATION_BIEN_OPTIONS
                .filter((opt) => propertyType === 'local_commercial' ? opt.value !== 'occupe_par_moi' || true : true)
                .map((opt) => (
                  <SelectCard
                    key={opt.value}
                    label={propertyType === 'local_commercial' && opt.value === 'occupe_par_moi' ? 'Exploité par moi' : opt.label}
                    selected={formData.occupationBien === opt.value}
                    onClick={() => setField('occupationBien', opt.value as OccupationBien)}
                    size="small"
                  />
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
