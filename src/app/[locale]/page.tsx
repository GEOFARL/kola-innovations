import LandingScreen from '@/components/screens/landing-screen';
import { auth, currentUser } from '@clerk/nextjs/server';
import { User } from '@/lib/models/user';

const LandingPage = async () => {
  const { userId } = await auth();
  const clerkUser = userId ? await currentUser() : null;

  const user = clerkUser ? User.fromClerk(clerkUser).toJSON() : null;

  return <LandingScreen user={user} />;
};

export default LandingPage;
