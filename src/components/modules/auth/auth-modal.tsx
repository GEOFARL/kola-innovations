'use client';

import Modal from '@/components/ui/modal';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import ActiveAuthForm from './active-auth-form';
import AuthNetworkingOpportunities from './auth-networking-opportunities';

const AuthModal: React.FC = () => {
  const { close, isOpen } = useAuthModalStore();
  const isMobile = useMediaQuery('(max-width: 1023px)');

  if (isMobile) {
    return null;
  }

  return (
    <Modal open={isOpen} onOpenChange={close} showClose ariaTitle="Auth modal">
      <div className="w-[90vw] max-w-[1200px] min-h-[665px] rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <AuthNetworkingOpportunities />
        <ActiveAuthForm />
      </div>
    </Modal>
  );
};

export default AuthModal;
