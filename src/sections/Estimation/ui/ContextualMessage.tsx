import { motion, AnimatePresence } from 'framer-motion';

interface ContextualMessageProps {
  message: string;
  visible: boolean;
}

export const ContextualMessage = ({ message, visible }: ContextualMessageProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="text-center py-3 px-5 rounded-xl bg-navy/[0.04] text-navy/70 text-sm font-outfit"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
