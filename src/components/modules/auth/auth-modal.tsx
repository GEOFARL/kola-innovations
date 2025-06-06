'use client';

import Modal from '@/components/ui/modal';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import peopleImage from '@/assets/images/people.png';
import ramonImage from '@/assets/images/ramon.png';
import starsRatingImage from '@/assets/images/stars-rating.png';
import formBgImage from '@/assets/images/form-bg.png';
import LogoIcon from '@/assets/icons/logo.svg';
import VerifiedIcon from '@/assets/icons/verified.svg';
import Image from 'next/image';
import Button from '@/components/ui/button/button';
import SignInForm from './sign-in-form';
import SignUpForm from './sign-up-form';
import { useTranslations } from 'next-intl';
import ForgotPasswordForm from './forgot-password-form';

const AuthModal: React.FC = () => {
  const { close, view, isOpen } = useAuthModalStore();
  const t = useTranslations('landing.authModal');

  const renderForm = () => {
    switch (view) {
      case 'signIn':
        return <SignInForm />;
      case 'signUp':
        return <SignUpForm />;
      case 'forgot':
        return <ForgotPasswordForm />;
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={close} showClose ariaTitle="Auth modal">
      <div className="w-[90vw] max-w-[1200px] min-h-[665px] rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 bg-primary-100 hidden md:flex flex-col gap-[78px] relative overflow-hidden">
          <LogoIcon />

          <Image
            src={formBgImage}
            alt="form bg image"
            width={306}
            height={306}
            className="absolute -right-[240px] top-[50%] translate-y-[-50%] z-0 md:block hidden"
          />

          <div className="flex-1 max-w-[360px] mx-auto">
            <div className="mb-[53px] text-center">
              <h6 className="h6 mb-2 text-dark-900">{t('left.title')}</h6>
              <p className="text-dark-700 small-2-rg font-[400]!">
                {t('left.description')}
              </p>
            </div>
            <ConnectCard />
          </div>

          <div className="flex items-center gap-4">
            <Image src={peopleImage} alt="people" width={132} height={42} />
            <p className="max-w-[132px] small-1 font-[400]! text-dark-900">
              <span className="font-[600]">100+</span> {t('left.bubble')}
            </p>
          </div>
        </div>

        {renderForm()}
      </div>
    </Modal>
  );
};

export default AuthModal;

const ConnectCard: React.FC = () => {
  const t = useTranslations('landing.authModal.connectCard');

  return (
    <div className="relative p-4 rounded-[16px] border-[1px] border-dark-100 bg-dark-white shadow-[0_0px_4px_rgba(0,0,0,0.12)]">
      <div className="flex justify-between items-start mb-4">
        <Image src={ramonImage} alt="Ramon Alberto" width={48} height={48} />
        <Button>{t('connect')}</Button>
      </div>

      <div className="mb-6">
        <h6 className="h6 text-dark-900">{t('name')}</h6>
        <p className="text-dark-600 small-1">{t('title')}</p>
      </div>

      <p className="line-clamp-3 small-1-md text-dark-700">{t('bio')}</p>

      <div className="absolute bg-dark-white rounded-[8px] -left-[30px] -bottom-[10px] p-2 flex flex-col gap-[12px] shadow-[0_0px_4px_rgba(0,0,0,0.12)]">
        <Image
          src={starsRatingImage}
          alt="stars rating"
          width={103}
          height={16}
        />
        <p className="small-1-md text-dark-700">{t('rating')}</p>
      </div>

      <div className="absolute bg-dark-white items-center rounded-[8px] -right-[30px] top-[80px] p-2 flex gap-[12px] shadow-[0_0px_4px_rgba(0,0,0,0.12)]">
        <p className="small-1-md text-dark-700">{t('verified')}</p>
        <VerifiedIcon />
      </div>
    </div>
  );
};
