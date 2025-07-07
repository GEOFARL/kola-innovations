'use client';

import Button from '@/components/ui/button/button';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { useTranslations } from 'next-intl';
import { ComponentProps } from 'react';

const SignUpButton: React.FC<ComponentProps<typeof Button>> = (props) => {
  const tAuth = useTranslations('common.auth');
  const { open } = useAuthModalStore();

  return (
    <Button onClick={() => open('signUp')} {...props}>
      {tAuth('signup')}
    </Button>
  );
};

export default SignUpButton;
