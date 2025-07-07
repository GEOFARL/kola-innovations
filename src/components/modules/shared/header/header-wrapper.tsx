import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const HeaderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <header className="lg:h-[88px] py-[10px] lg:py-6 border-b-[1.5px] border-dark-100 sticky top-0 bg-white z-100">
      <MaxWidthWrapper className="flex items-center justify-between">
        {children}
      </MaxWidthWrapper>
    </header>
  );
};

export default HeaderWrapper;
