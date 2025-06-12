import Header from '@/components/modules/shared/header/header';
import TalentsFilters from '@/components/modules/talents/filters';
import TalentsSidebar from '@/components/modules/talents/sidebar';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { PropsWithChildren } from 'react';

const LayoutTalents: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <MaxWidthWrapper className="grid grid-cols-[220px_1fr_342px] h-[calc(100vh-88px)]">
        <aside className="sticky top-0 h-full overflow-y-auto border-r border-dark-100 bg-white">
          <TalentsSidebar />
        </aside>

        <section className="overflow-y-auto p-6 bg-[#FAFAFA]">
          {children}
        </section>

        <aside className="sticky top-0 h-full overflow-y-auto border-l border-dark-100 bg-white">
          <TalentsFilters />
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default LayoutTalents;
