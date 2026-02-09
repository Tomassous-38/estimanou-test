// ==========================================
// Zustand Store — Estimation Form
// ==========================================

import { create } from 'zustand';
import type { EstimationFormData, PropertyType } from './types';
import { initialFormData } from './types';

interface EstimationStore {
  currentStep: number;
  formData: EstimationFormData;
  direction: number; // 1 = forward, -1 = backward (for animations)
  submitted: boolean;

  // Navigation
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;

  // Form data
  setField: <K extends keyof EstimationFormData>(key: K, value: EstimationFormData[K]) => void;
  toggleExtra: (extra: string) => void;
  toggleContactPreference: (pref: EstimationFormData['contactPreferences'][number]) => void;
  resetForPropertyType: (type: PropertyType) => void;

  // Submit
  setSubmitted: (value: boolean) => void;
  reset: () => void;
}

export const useEstimationStore = create<EstimationStore>((set) => ({
  currentStep: 0,
  formData: { ...initialFormData },
  direction: 1,
  submitted: false,

  nextStep: () => set((state) => ({
    currentStep: Math.min(state.currentStep + 1, 5),
    direction: 1,
  })),

  prevStep: () => set((state) => ({
    currentStep: Math.max(state.currentStep - 1, 0),
    direction: -1,
  })),

  goToStep: (step) => set((state) => ({
    currentStep: step,
    direction: step > state.currentStep ? 1 : -1,
  })),

  setField: (key, value) => set((state) => ({
    formData: { ...state.formData, [key]: value },
  })),

  toggleExtra: (extra) => set((state) => {
    const current = state.formData.extras;
    const newExtras = current.includes(extra)
      ? current.filter((e) => e !== extra)
      : [...current, extra];
    return { formData: { ...state.formData, extras: newExtras } };
  }),

  toggleContactPreference: (pref) => set((state) => {
    const current = state.formData.contactPreferences;
    const newPrefs = current.includes(pref)
      ? current.filter((p) => p !== pref)
      : [...current, pref];
    return { formData: { ...state.formData, contactPreferences: newPrefs } };
  }),

  resetForPropertyType: (type) => set((state) => ({
    formData: {
      ...initialFormData,
      propertyType: type,
      // Keep type and subtype, reset everything else
    },
  })),

  setSubmitted: (value) => set({ submitted: value }),

  reset: () => set({
    currentStep: 0,
    formData: { ...initialFormData },
    direction: 1,
    submitted: false,
  }),
}));
