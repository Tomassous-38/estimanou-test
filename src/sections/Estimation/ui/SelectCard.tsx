'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SelectCardProps {
  label: string;
  icon?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  faded?: boolean;
  colorAccent?: string;
  size?: 'default' | 'small';
}

export const SelectCard = ({ label, icon, selected, onClick, faded, colorAccent, size = 'default' }: SelectCardProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`
        relative flex flex-col items-center justify-center gap-2 rounded-2xl border cursor-pointer
        transition-all duration-300 overflow-hidden
        ${size === 'small' ? 'px-4 py-3 min-h-[56px]' : 'px-5 py-5 min-h-[100px]'}
        ${selected
          ? 'border-navy bg-navy/[0.04] shadow-md'
          : faded
            ? 'border-transparent bg-white/60 opacity-40'
            : 'border-navy/10 bg-white hover:shadow-lg hover:border-navy/20'
        }
      `}
      style={selected && colorAccent ? { borderColor: colorAccent, backgroundColor: `${colorAccent}08` } : undefined}
    >
      {/* Check mark */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2"
        >
          <div className="w-5 h-5 rounded-full bg-navy flex items-center justify-center" style={colorAccent ? { backgroundColor: colorAccent } : undefined}>
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Check size={12} className="text-white" strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>
      )}

      {icon && (
        <span className={`${size === 'small' ? 'text-lg' : 'text-2xl'}`}>{icon}</span>
      )}
      <span className={`font-outfit font-medium text-navy ${size === 'small' ? 'text-[13px]' : 'text-sm'}`}>
        {label}
      </span>
    </motion.button>
  );
};
