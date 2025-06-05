import { OnboardingDataMap, StepKey } from '@/lib/types/onboarding/store';
import { create } from 'zustand';

type OnboardingState = {
  step: number;
  data: Partial<OnboardingDataMap>;
};

type OnboardingActions = {
  next: () => void;
  prev: () => void;
  setStepData: <K extends StepKey>(key: K, value: OnboardingDataMap[K]) => void;
  setStep(step: number): void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState & OnboardingActions>(
  (set) => ({
    data: {},
    step: 0,
    next: () => set((s) => ({ step: s.step + 1 })),
    prev: () => set((s) => ({ step: Math.max(0, s.step - 1) })),
    reset: () => set(() => ({ step: 0, data: {} })),
    setStep: (step) => set(() => ({ step })),
    setStepData: (key, value) =>
      set((s) => ({
        data: { ...s.data, [key]: value },
      })),
  }),
);
