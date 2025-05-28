import HeroSection from '../modules/landing/sections/hero-section';
import StatsSection from '../modules/landing/sections/stats-section';
import TrustedCompaniesSection from '../modules/landing/sections/trusted-companies-section';
import HeaderV2 from '../modules/shared/header-v2';

const LandingScreen: React.FC = () => {
  return (
    <>
      <HeaderV2 />
      <HeroSection />
      <StatsSection />
      <TrustedCompaniesSection />
    </>
  );
};

export default LandingScreen;
