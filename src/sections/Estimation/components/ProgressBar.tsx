import { motion } from 'framer-motion';
import { STEP_LABELS } from '@/lib/constants';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="space-y-3">
      {/* Step label + time */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-outfit text-navy/50 tracking-wide">
          Étape {currentStep + 1}/{totalSteps} — {STEP_LABELS[currentStep]}
        </span>
        <span className="text-[11px] font-outfit text-navy/35 tracking-wider">
          ≈ 2 min
        </span>
      </div>

      {/* Bar */}
      <div className="h-1 bg-navy/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-navy rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </div>
    </div>
  );
};
