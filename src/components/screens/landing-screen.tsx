import HeroSection from '../modules/landing/sections/hero-section';
import MotivationSection from '../modules/landing/sections/motivation-section';
import OpportunitiesSection from '../modules/landing/sections/opportunities-section';
import StatsSection from '../modules/landing/sections/stats-section';
import TalentByCategorySection from '../modules/landing/sections/talent-by-category-section';
import TrustedCompaniesSection from '../modules/landing/sections/trusted-companies-section';
import Footer from '../modules/shared/footer';
import Header from '../modules/shared/header/header';

const LandingScreen: React.FC = () => {
  return (
    <>
      <Header variant="landing" />
      <HeroSection />
      <StatsSection />
      <TrustedCompaniesSection />
      <OpportunitiesSection />
      <MotivationSection />
      <TalentByCategorySection />
      <Footer />
    </>
  );
};

export default LandingScreen;
