'use client';

import ArrowLeft from '@/assets/icons/arrow-left.svg';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  actionElement?: React.ReactNode;
};

const ProfileHeader: React.FC<Props> = ({ title, actionElement }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center" onClick={() => router.back()}>
        <ArrowLeft />
        <p className="h6 text-dark-900">{title}</p>
      </div>

      {actionElement}
    </div>
  );
};

export default ProfileHeader;
