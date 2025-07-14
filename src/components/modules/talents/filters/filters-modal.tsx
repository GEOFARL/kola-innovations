import Button from '@/components/ui/button/button';
import Modal from '@/components/ui/modal';
import Tabs from '@/components/ui/tabs';
import { useTalentFiltersStore } from '@/lib/stores/talents/filters';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import SearchBar from '../../shared/header/search-bar';
import LocationTab from './location-tab';
import SkillsTab from './skills-tab';

const FiltersModal: React.FC = () => {
  const { activeTab, setActiveTab, clearAll } = useTalentFiltersStore();
  const t = useTranslations('talents');

  const tabs = [
    { value: 'skills', label: t('filters.skills') },
    { value: 'location', label: t('details.location') },
  ];

  const commonTabsProps = {
    tabs,
    value: activeTab!,
    onValueChange: setActiveTab as (val: string) => void,
  };

  return (
    <Modal
      className="lg:min-w-[756px] w-[calc(100%-24px)] lg:w-auto min-h-[540px] lg:min-h-[458px] flex flex-col top-[350px] rounded-[8px]"
      open={!!activeTab}
      onOpenChange={() => setActiveTab(null)}
    >
      <div className="px-3 lg:px-6 pt-4 lg:py-4 lg:shadow-[0_4px_4px_rgba(0,0,0,0.05)] relative z-1">
        <p className="body-1 text-dark-900">{t('filters.name')}</p>

        <Tabs
          {...commonTabsProps}
          layout={'horizontal'}
          className="h-full gap-2"
          rootClassName="lg:hidden flex-1 mt-6"
          itemClassName="flex-1 py-[3px] text-[14px]! sm:text-[14px]! leading-[140%] font-semibold tracking-[-0.3px]"
        />
      </div>

      <div className="flex-1 flex">
        <Tabs
          {...commonTabsProps}
          layout={'vertical'}
          className="h-full border-r-[1px] border-[#E0E3E5] w-full"
          rootClassName="hidden lg:flex flex-1 max-w-[170px]"
        />
        <div className="flex-1 px-3 lg:px-6 py-4">
          <SearchBar className="max-w-full" onSubmit={() => {}} />
          <div className="flex flex-wrap gap-2 mt-6 max-w-[538px]">
            {activeTab === 'skills' && <SkillsTab />}
            {activeTab === 'location' && <LocationTab />}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 py-4 px-[10px] lg:px-8 relative z-1 shadow-[0_-4px_4px_rgba(0,0,0,0.05)]">
        <Button
          className="flex-1 lg:flex-auto"
          variant="secondary"
          color="black"
          onClick={() => clearAll()}
        >
          {t('filters.clear')}
        </Button>
        <Button
          className="flex-1 lg:flex-auto"
          color="black"
          onClick={() => {
            setActiveTab(null);
            clearAll();
          }}
        >
          {t('filters.apply')}
        </Button>
      </div>
    </Modal>
  );
};

export default FiltersModal;
