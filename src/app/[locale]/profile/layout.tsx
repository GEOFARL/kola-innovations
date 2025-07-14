import ProfileAnalytics from '@/components/modules/profile/analytics';
import ProfileSidebar from '@/components/modules/profile/sidebar';
import CommonLayout from '@/components/modules/shared/layouts/common-layout';
import { PropsWithChildren } from 'react';

const LayoutProfile: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <CommonLayout
      leftAsideContent={<ProfileSidebar />}
      rightAsideContent={<ProfileAnalytics />}
    >
      {children}
    </CommonLayout>
  );
};

export default LayoutProfile;
