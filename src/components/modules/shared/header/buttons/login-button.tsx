'use client';

import Button from '@/components/ui/button/button';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { useTranslations } from 'next-intl';
import { ComponentProps } from 'react';

const LoginButton: React.FC<ComponentProps<typeof Button>> = (props) => {
  const tAuth = useTranslations('common.auth');
  const { open } = useAuthModalStore();

  return (
    <Button
      color="black"
      variant="link"
      onClick={() => open('signIn')}
      {...props}
    >
      {tAuth('login')}
    </Button>
  );
};

export default LoginButton;
