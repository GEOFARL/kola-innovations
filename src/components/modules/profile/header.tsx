'use client';

import { useSidebar } from '@/lib/stores/sidebar';
import SubHeader from '../shared/subheader';
import MoreButton from '../talents/search/more-button';

type Props = {
  title: string;
  actionElement?: React.ReactNode;
  moreButton?: React.ReactNode;
  withoutBackButton?: boolean;
};

const ProfileHeader: React.FC<Props> = ({
  title,
  actionElement,
  moreButton,
  withoutBackButton,
}) => {
  return (
    <SubHeader
      title={
        <p className="h6 text-dark-900 font-[500]! sm:font-semibold!">
          {title}
        </p>
      }
      rightContent={actionElement}
      moreButton={moreButton ?? <ProfileMoreButton />}
      withoutBackButton={withoutBackButton}
    />
  );
};

const ProfileMoreButton: React.FC = () => {
  const { open } = useSidebar();
  return <MoreButton onClick={() => open('profile-analytics')} />;
};

export default ProfileHeader;
