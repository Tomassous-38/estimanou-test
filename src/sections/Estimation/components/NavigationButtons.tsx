'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  canProceed: boolean;
  onNext: () => void;
  onPrev: () => void;
  isLastStep?: boolean;
  lastStepLabel?: string;
}

export const NavigationButtons = ({
  currentStep,
  canProceed,
  onNext,
  onPrev,
  isLastStep = false,
  lastStepLabel = 'Recevoir mon estimation gratuite',
}: NavigationButtonsProps) => {
  return (
    <div className="flex items-center justify-between pt-6 mt-6 border-t border-navy/5">
      {/* Prev */}
      {currentStep > 0 ? (
        <button
          type="button"
          onClick={onPrev}
          className="flex items-center gap-2 text-sm font-outfit text-navy/50 hover:text-navy transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          Retour
        </button>
      ) : (
        <div />
      )}

      {/* Next */}
      <motion.button
        type="button"
        onClick={onNext}
        disabled={!canProceed}
        animate={canProceed ? { scale: [1, 1.02, 1] } : {}}
        transition={canProceed ? { duration: 0.4, delay: 0.1 } : {}}
        className={`
          flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-outfit font-medium tracking-wide
          transition-all duration-300 cursor-pointer
          ${canProceed
            ? isLastStep
              ? 'bg-navy text-white shadow-lg hover:shadow-xl hover:bg-navy/90'
              : 'bg-navy text-white shadow-md hover:shadow-lg hover:bg-navy/90'
            : 'bg-navy/10 text-navy/30 cursor-not-allowed'
          }
        `}
      >
        {isLastStep ? lastStepLabel : 'Suivant'}
        {!isLastStep && <ArrowRight size={16} />}
        {isLastStep && <ArrowRight size={16} />}
      </motion.button>
    </div>
  );
};
