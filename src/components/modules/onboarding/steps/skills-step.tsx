'use client';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';

const SkillsStep: React.FC = () => {
  const { data } = useOnboardingStore();
  console.log('DAta: ', data);

  return <></>;
};

export default SkillsStep;
