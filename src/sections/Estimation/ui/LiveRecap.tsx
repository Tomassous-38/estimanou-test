import { motion, AnimatePresence } from 'framer-motion';

interface LiveRecapProps {
  items: string[];
}

export const LiveRecap = ({ items }: LiveRecapProps) => {
  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center gap-1.5 pt-4 mt-2 border-t border-navy/5"
    >
      <span className="text-[10px] font-outfit text-navy/30 uppercase tracking-wider mr-1">Récap</span>
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.span
            key={item}
            layout
            initial={{ opacity: 0, scale: 0.7, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-navy/[0.05] text-navy/70 text-[12px] font-outfit font-medium"
          >
            {item}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
