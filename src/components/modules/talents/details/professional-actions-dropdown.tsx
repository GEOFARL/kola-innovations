'use client';

import ShareIcon from '@/assets/icons/talents/share.svg';
import RequestVouchIcon from '@/assets/icons/talents/badge.svg';
import VouchIcon from '@/assets/icons/talents/vouch.svg';
import DropdownMenu from '@/components/ui/dropdown-menu';
import Button from '@/components/ui/button/button';
import MoreIcon from '@/assets/icons/talents/more.svg';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import VouchProfessionalModal from '../vouch-professional-modal';

const ProfessionalActionsDropdown: React.FC = () => {
  const t = useTranslations('talents.details');
  const [isVouchOpen, setIsVouchOpen] = useState(false);

  return (
    <>
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
            onClick: () => setIsVouchOpen(true),
          },
        ]}
      />

      <VouchProfessionalModal
        open={isVouchOpen}
        onClose={() => setIsVouchOpen(false)}
      />
    </>
  );
};

export default ProfessionalActionsDropdown;
