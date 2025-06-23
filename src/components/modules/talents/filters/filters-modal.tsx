import Button from '@/components/ui/button/button';
import Modal from '@/components/ui/modal';
import Tabs from '@/components/ui/tabs';
import { useTalentFiltersStore } from '@/lib/stores/talents/filters';
import SearchBar from '../../shared/header/search-bar';
import LocationTab from './location-tab';
import SkillsTab from './skills-tab';
import { useTranslations } from 'next-intl';

const FiltersModal: React.FC = () => {
  const { activeTab, setActiveTab, clearAll } = useTalentFiltersStore();
  const t = useTranslations('talents');

  const tabs = [
    { value: 'skills', label: t('filters.skills') },
    { value: 'location', label: t('details.location') },
  ];
  return (
    <Modal
      className="min-w-[756px] min-h-[458px] flex flex-col top-[350px] rounded-[8px]"
      open={!!activeTab}
      onOpenChange={() => setActiveTab(null)}
    >
      <div className="px-6 py-4 shadow-[0_4px_4px_rgba(0,0,0,0.05)] relative z-1">
        <p className="body-1 text-dark-900">{t('filters.name')}</p>
      </div>

      <div className="flex-1 flex">
        <Tabs
          tabs={tabs}
          value={activeTab!}
          onValueChange={setActiveTab as (val: string) => void}
          layout={'vertical'}
          className="h-full border-r-[1px] border-[#E0E3E5]"
          rootClassName="flex-1 max-w-[170px]"
        />
        <div className="flex-1 px-6 py-4">
          <SearchBar className="max-w-full" onSubmit={() => {}} />
          <div className="flex flex-wrap gap-2 mt-6 max-w-[538px]">
            {activeTab === 'skills' && <SkillsTab />}
            {activeTab === 'location' && <LocationTab />}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 py-4 px-8 relative z-1 shadow-[0_-4px_4px_rgba(0,0,0,0.05)]">
        <Button variant="link" color="black" onClick={() => clearAll()}>
          {t('filters.clear')}
        </Button>
        <Button
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
