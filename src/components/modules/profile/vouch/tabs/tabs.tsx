'use client';

import Tabs from '@/components/ui/tabs';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import MyTab from './my';
import ReceivedTab from './received';
import RequestedTab from './requested';

const VouchTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('received');
  const t = useTranslations('profile.vouch.tabs');

  const tabs = [
    { value: 'received', label: t('received') },
    { value: 'requested', label: t('requested') },
    { value: 'my', label: t('my') },
  ];

  return (
    <>
      <Tabs
        tabs={tabs}
        value={selectedTab}
        onValueChange={setSelectedTab}
        itemClassName="py-2 px-1 sm:py-0 sm:pb-3 sm:px-4"
      />
      {selectedTab === 'received' && <ReceivedTab />}
      {selectedTab === 'requested' && <RequestedTab />}
      {selectedTab === 'my' && <MyTab />}
    </>
  );
};

export default VouchTabs;
