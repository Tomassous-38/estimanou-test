import { motion } from 'framer-motion';

interface NumberButtonGroupProps {
  label: string;
  options: string[];
  value: string | number | null;
  onChange: (value: string) => void;
}

export const NumberButtonGroup = ({ label, options, value, onChange }: NumberButtonGroupProps) => {
  const strValue = value?.toString() ?? null;

  return (
    <div className="space-y-2.5">
      <label className="text-sm font-outfit font-medium text-navy/80">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => {
          const isSelected = strValue === option;
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03, type: 'spring', stiffness: 400, damping: 20 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className={`
                relative min-w-[48px] h-[48px] px-3 rounded-xl text-sm font-outfit font-medium cursor-pointer
                transition-colors duration-200 border overflow-hidden
                ${isSelected
                  ? 'bg-navy text-white border-navy shadow-lg'
                  : 'bg-white text-navy/70 border-navy/10 hover:border-navy/25 hover:bg-navy/[0.03]'
                }
              `}
            >
              {/* Ripple on select */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0.3 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white/30 pointer-events-none"
                />
              )}
              <motion.span
                className="relative z-10"
                animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.25 }}
              >
                {option}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
