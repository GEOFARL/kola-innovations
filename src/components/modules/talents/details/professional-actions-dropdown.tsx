'use client';

import ShareIcon from '@/assets/icons/talents/share.svg';
import RequestVouchIcon from '@/assets/icons/talents/badge.svg';
import VouchIcon from '@/assets/icons/talents/vouch.svg';
import DropdownMenu from '@/components/ui/dropdown-menu';
import Button from '@/components/ui/button/button';
import MoreIcon from '@/assets/icons/talents/more.svg';
import { useTranslations } from 'next-intl';

const ProfessionalActionsDropdown: React.FC = () => {
  const t = useTranslations('talents.details');

  return (
    <DropdownMenu
      trigger={
        <Button
          size="sm"
          iconOnly
          iconCircle
          className="bg-white border border-dark-200"
        >
          <MoreIcon />
        </Button>
      }
      items={[
        {
          icon: <ShareIcon />,
          label: t('share'),
          onClick: () => console.log('Share clicked'),
        },
        {
          icon: <RequestVouchIcon />,
          label: t('requestVouch'),
          onClick: () => console.log('Request Vouch clicked'),
        },
        {
          icon: <VouchIcon />,
          label: t('vouch'),
          onClick: () => console.log('Vouch clicked'),
        },
      ]}
    />
  );
};

export default ProfessionalActionsDropdown;
