import { socialPlatforms } from '@/lib/constants/onboarding/socials-config';
import OnboardingStepForm from '../onboarding-step-form';
import AddProjectButton from './add-project-button';
import MediumPreview from './medium-preview';
import SocialLinkGrid from './social-link-grid';
import { useOnboardingStore } from '@/lib/stores/onboarding/onboarding-store';

const PortfolioStep: React.FC = () => {
  const portfolioData = useOnboardingStore((s) => s.data['portfolio']);
  const setStepData = useOnboardingStore((s) => s.setStepData);

  const defaultValues = {
    links:
      portfolioData?.links ??
      socialPlatforms.map((p) => ({
        platform: p.name as any,
        url: '',
      })),
    projects: portfolioData?.projects ?? [],
  };

  return (
    <OnboardingStepForm
      stepKey="portfolio"
      defaultValues={defaultValues}
      onSubmit={(values) => setStepData('portfolio', values)}
    >
      {(methods) => (
        <>
          <AddProjectButton />
          <SocialLinkGrid control={methods.control} />
          <MediumPreview />
        </>
      )}
    </OnboardingStepForm>
  );
};

export default PortfolioStep;
