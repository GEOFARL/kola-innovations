import { PropsWithChildren } from 'react';
import OnboardingSidebar from './sidebar';
import OnboardingHeader from './header';
import OnboardingFooter from './footer';
import OnboardingHeaderMobile from './header-mobile';

type Props = PropsWithChildren;

const OnboardingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row flex-1">
      <OnboardingSidebar />
      <OnboardingHeaderMobile />
      <main className="flex-1 flex flex-col">
        <div className="px-3 py-4 flex-1 lg:py-0 lg:px-0">
          <div className="flex-1 rounded-[8px] border-[1px] border-dark-100 lg:rounded-[0px] flex flex-col py-4 lg:pt-[88px] px-3 lg:px-12 xl:px-20 pb-4 lg:pb-12">
            <OnboardingHeader />
            <div className="flex-1">{children}</div>
          </div>
        </div>
        <OnboardingFooter />
      </main>
    </div>
  );
};

export default OnboardingLayout;
