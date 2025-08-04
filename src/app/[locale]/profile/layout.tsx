import ProfileAnalytics from '@/components/modules/profile/analytics';
import ProfileSidebar from '@/components/modules/profile/sidebar';
import CommonLayout from '@/components/modules/shared/layouts/common-layout';
import { auth, currentUser } from '@clerk/nextjs/server';
import { PropsWithChildren } from 'react';

const LayoutProfile: React.FC<PropsWithChildren> = async ({ children }) => {
  const { userId } = await auth();
  const user = userId ? await currentUser() : null;

  return (
    <CommonLayout
      leftAsideContent={<ProfileSidebar />}
      rightAsideContent={<ProfileAnalytics />}
      user={user}
    >
      {children}
    </CommonLayout>
  );
};

export default LayoutProfile;
