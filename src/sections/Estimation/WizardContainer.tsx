import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEstimationStore } from '@/lib/store';
import { ProgressBar } from './components/ProgressBar';
import { NavigationButtons } from './components/NavigationButtons';
import { Step1TypeBien } from './steps/Step1TypeBien';
import { Step2Caracteristiques } from './steps/Step2Caracteristiques';
import { Step3EtatExtras } from './steps/Step3EtatExtras';
import { Step4Localisation } from './steps/Step4Localisation';
import { Step5Projet } from './steps/Step5Projet';
import { Step6Coordonnees } from './steps/Step6Coordonnees';
import { ConfirmationScreen } from './steps/ConfirmationScreen';

const TOTAL_STEPS = 6;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export const WizardContainer = () => {
  const { currentStep, direction, formData, submitted, nextStep, prevStep, setSubmitted } = useEstimationStore();

  // Validation per step
  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 0: // Type de bien
        return !!formData.propertyType && !!formData.propertySubType;
      case 1: // Caractéristiques
        if (formData.propertyType === 'maison') {
          return !!formData.surfaceHabitable;
        }
        if (formData.propertyType === 'appartement') {
          return !!formData.surfaceHabitable;
        }
        if (formData.propertyType === 'terrain') {
          return !!formData.surfaceTerrain;
        }
        if (formData.propertyType === 'immeuble') {
          return !!formData.surfaceHabitable;
        }
        if (formData.propertyType === 'local_commercial') {
          return !!formData.surfaceUtile;
        }
        return false;
      case 2: // État & Extras
        if (formData.propertyType === 'terrain') return true; // Pas de champ obligatoire
        return !!formData.etatGeneral;
      case 3: // Localisation
        return !!formData.coordinates;
      case 4: // Projet
        return !!formData.objectif;
      case 5: // Coordonnées
        return (
          formData.telephone.replace(/\s/g, '').length >= 10 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        );
      default:
        return false;
    }
  }, [currentStep, formData]);

  const handleNext = () => {
    if (!canProceed) return;
    if (currentStep === TOTAL_STEPS - 1) {
      // Submit
      console.log('📋 Estimation Estimanou — Données soumises:', JSON.stringify(formData, null, 2));
      setSubmitted(true);
    } else {
      nextStep();
    }
  };

  const steps = [
    <Step1TypeBien key="step1" />,
    <Step2Caracteristiques key="step2" />,
    <Step3EtatExtras key="step3" />,
    <Step4Localisation key="step4" />,
    <Step5Projet key="step5" />,
    <Step6Coordonnees key="step6" />,
  ];

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-5 py-8">
        <ConfirmationScreen />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      {/* Progress bar */}
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {/* Step content */}
      <div className="mt-8 relative overflow-hidden min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <NavigationButtons
        currentStep={currentStep}
        canProceed={canProceed}
        onNext={handleNext}
        onPrev={prevStep}
        isLastStep={currentStep === TOTAL_STEPS - 1}
      />
    </div>
  );
};
