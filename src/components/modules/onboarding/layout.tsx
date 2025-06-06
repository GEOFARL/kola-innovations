import { PropsWithChildren } from 'react';
import OnboardingSidebar from './sidebar';
import OnboardingHeader from './header';
import OnboardingFooter from './footer';

type Props = PropsWithChildren;

const OnboardingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-1">
      <OnboardingSidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col pt-[88px] px-12 xl:px-20 pb-12">
          <OnboardingHeader />
          <div className="flex-1">{children}</div>
        </div>
        <OnboardingFooter />
      </main>
    </div>
  );
};

export default OnboardingLayout;
