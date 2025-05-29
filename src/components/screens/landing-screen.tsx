import HeroSection from '../modules/landing/sections/hero-section';
import OpportunitiesSection from '../modules/landing/sections/opportunities-section';
import StatsSection from '../modules/landing/sections/stats-section';
import TrustedCompaniesSection from '../modules/landing/sections/trusted-companies-section';
import Footer from '../modules/shared/footer';
import HeaderV2 from '../modules/shared/header-v2';

const LandingScreen: React.FC = () => {
  return (
    <>
      <HeaderV2 />
      <HeroSection />
      <StatsSection />
      <TrustedCompaniesSection />
      <OpportunitiesSection />ø
      <Footer />
    </>
  );
};

export default LandingScreen;
