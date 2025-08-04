'use client';

import Header from '@/components/modules/shared/header/header';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';
import { User } from '@/lib/models/user';
import { User as ClerkUser } from '@clerk/nextjs/server';
import { PropsWithChildren } from 'react';

type Props = {
  leftAsideContent?: React.ReactNode;
  rightAsideContent?: React.ReactNode;
  user: ClerkUser | null;
} & PropsWithChildren;

const CommonLayout: React.FC<Props> = ({
  children,
  user,
  leftAsideContent,
  rightAsideContent,
}) => {
  return (
    <>
      <Header user={user ? User.fromClerk(user) : null} />
      <MaxWidthWrapper className="grid lg:grid-cols-[220px_1fr_342px] h-[calc(100vh-53px)] lg:h-[calc(100vh-88px)] px-0 sm:px-0 lg:px-4 xl:px-8">
        <aside className="sticky hidden lg:block top-0 h-full overflow-y-auto border-r border-dark-100 bg-white">
          {leftAsideContent}
        </aside>

        <section className="overflow-y-auto px-3 lg:p-6 bg-[#FAFAFA]">
          {children}
        </section>

        <aside className="sticky hidden lg:block top-0 h-full overflow-y-auto border-l border-dark-100 bg-white">
          {rightAsideContent}
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default CommonLayout;
