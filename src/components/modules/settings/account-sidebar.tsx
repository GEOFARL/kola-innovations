'use client';

import { useTranslations } from 'next-intl';

const AccountSidebar: React.FC = () => {
  const t = useTranslations('settings.sidebar');

  return (
    <div className="p-6">
      <h4 className="text-primary font-[600] text-[18px] leading-[150%]">
        {t('account')}
      </h4>
    </div>
  );
};

export default AccountSidebar;
