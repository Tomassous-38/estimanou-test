'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Trees, Building, Store } from 'lucide-react';
import { useEstimationStore } from '@/lib/store';
import { PROPERTY_TYPES, PROPERTY_SUBTYPES, CONTEXTUAL_MESSAGES } from '@/lib/constants';
import type { PropertyType, PropertySubType } from '@/lib/types';
import { SelectCard } from '../ui/SelectCard';
import { ContextualMessage } from '../ui/ContextualMessage';

const ICONS: Record<string, React.ReactNode> = {
  Home: <Home size={28} strokeWidth={1.5} />,
  Building2: <Building2 size={28} strokeWidth={1.5} />,
  Trees: <Trees size={28} strokeWidth={1.5} />,
  Building: <Building size={28} strokeWidth={1.5} />,
  Store: <Store size={28} strokeWidth={1.5} />,
};

export const Step1TypeBien = () => {
  const { formData, setField } = useEstimationStore();
  const { propertyType, propertySubType } = formData;

  const handleSelectType = (type: PropertyType) => {
    setField('propertyType', type);
    setField('propertySubType', null);
  };

  const subtypes = propertyType ? PROPERTY_SUBTYPES[propertyType] : [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-navy mb-1.5">
          Quel type de bien souhaitez-vous estimer ?
        </h2>
        <p className="text-sm font-outfit text-navy/45 font-light">
          Sélectionnez le type de bien pour commencer
        </p>
      </div>

      {/* Type cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {PROPERTY_TYPES.map((type) => (
          <SelectCard
            key={type.value}
            label={type.label}
            icon={ICONS[type.icon]}
            selected={propertyType === type.value}
            faded={!!propertyType && propertyType !== type.value}
            onClick={() => handleSelectType(type.value)}
          />
        ))}
      </div>

      {/* Contextual message */}
      <ContextualMessage
        message={propertyType ? CONTEXTUAL_MESSAGES[propertyType] : ''}
        visible={!!propertyType}
      />

      {/* Subtypes (stagger) */}
      <AnimatePresence mode="wait">
        {propertyType && subtypes.length > 0 && (
          <motion.div
            key={propertyType}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm font-outfit text-navy/60 mb-3 font-medium">Précisez :</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {subtypes.map((sub, i) => (
                <motion.div
                  key={sub.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <SelectCard
                    label={sub.label}
                    selected={propertySubType === sub.value}
                    onClick={() => setField('propertySubType', sub.value as PropertySubType)}
                    size="small"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
