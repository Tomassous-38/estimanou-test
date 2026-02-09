import { motion } from 'framer-motion';

interface ToggleCardProps {
  label: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export const ToggleCard = ({ label, icon, selected, onClick }: ToggleCardProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.96 }}
      className={`
        relative flex items-center gap-2.5 px-4 py-3 rounded-xl border cursor-pointer
        transition-all duration-300 text-left overflow-hidden
        ${selected
          ? 'bg-navy/[0.06] border-navy/30 shadow-sm'
          : 'bg-white border-navy/8 hover:border-navy/15 hover:bg-navy/[0.02] hover:shadow-sm'
        }
      `}
    >
      {/* Glow effect on select */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-navy/[0.04] to-transparent pointer-events-none"
        />
      )}

      <motion.span
        className="text-lg flex-shrink-0 relative z-10"
        animate={selected ? { scale: [1, 1.4, 1], rotate: [0, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.span>
      <span className={`text-[13px] font-outfit relative z-10 ${selected ? 'font-medium text-navy' : 'text-navy/60'}`}>
        {label}
      </span>
      {selected && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          className="ml-auto relative z-10 w-5 h-5 rounded-full bg-navy/80 flex items-center justify-center"
        >
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-white">
            <motion.path
              d="M1 4L3.5 6.5L9 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </svg>
        </motion.span>
      )}
    </motion.button>
  );
};
