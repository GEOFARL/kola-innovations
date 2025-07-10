'use client';

import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import ForgotPasswordForm from './forgot-password-form';
import SignInForm from './sign-in-form';
import SignUpForm from './sign-up-form';

const ActiveAuthForm: React.FC = () => {
  const { view } = useAuthModalStore();

  return (
    <>
      {view === 'signIn' && <SignInForm />}
      {view === 'signUp' && <SignUpForm />}
      {view === 'forgot' && <ForgotPasswordForm />}
    </>
  );
};

export default ActiveAuthForm;
