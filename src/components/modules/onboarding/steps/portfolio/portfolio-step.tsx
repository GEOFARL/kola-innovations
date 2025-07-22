import { socialPlatforms } from '@/lib/constants/onboarding/socials-config';
import OnboardingStepForm from '../onboarding-step-form';
import AddProjectButton from './add-project-button';
import MediumPreview from './medium-preview';
import SocialLinkGrid from './social-link-grid';

const PortfolioStep: React.FC = () => {
  return (
    <OnboardingStepForm
      stepKey="portfolio"
      defaultValues={{
        links: socialPlatforms.map((p) => ({
          platform: p.name as any,
          url: '',
        })),
        projects: [],
      }}
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
