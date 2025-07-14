'use client';

import Instagram from '@/assets/icons/social/instagram-color.svg';
import Linkedin from '@/assets/icons/social/linkedin.svg';
import X from '@/assets/icons/social/x-color.svg';
import Youtube from '@/assets/icons/social/youtube.svg';
import FormField from '@/components/ui/form-field';
import { useTranslations } from 'next-intl';
import CommonLayout from './common-layout';

const Socials: React.FC = () => {
  const t = useTranslations('profile');

  return (
    <CommonLayout title={t('socials.title')}>
      <FormField
        name="socials.twitter"
        label={t('socials.twitter')}
        placeholder="twitter.com/"
        leftIcon={<X className="scale-80" />}
      />
      <FormField
        name="socials.linkedin"
        label={t('socials.linkedin')}
        placeholder="linkedin.com/in/"
        leftIcon={<Linkedin className="scale-80" />}
      />
      <FormField
        name="socials.instagram"
        label={t('socials.instagram')}
        placeholder="instagram.com/"
        leftIcon={<Instagram className="scale-80" />}
      />
      <FormField
        name="socials.youtube"
        label={t('socials.youtube')}
        placeholder="Youtube.com/"
        leftIcon={<Youtube className="scale-80" />}
      />
    </CommonLayout>
  );
};

export default Socials;
