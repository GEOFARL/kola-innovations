import PeopleLayout from '@/components/modules/profile/people-layout';
import { auth, currentUser } from '@clerk/nextjs/server';
import { PropsWithChildren } from 'react';

const LayoutProfessionals: React.FC<PropsWithChildren> = async ({
  children,
}) => {
  const { userId } = await auth();
  const user = userId ? await currentUser() : null;
  return <PeopleLayout user={user}>{children}</PeopleLayout>;
};

export default LayoutProfessionals;
