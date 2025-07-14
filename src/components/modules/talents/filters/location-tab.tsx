'use client';

import Checkbox from '@/components/ui/checkbox';
import Tabs from '@/components/ui/tabs';
import { useTalentFiltersStore } from '@/lib/stores/talents/filters';
import { useTranslations } from 'next-intl';

const citiesByProvince: Record<string, string[]> = {
  'nova-scotia': ['halifax', 'sydney', 'dartmouth', 'truro', 'new_glasgow'],
  alberta: ['calgary', 'edmonton'],
  ontario: ['toronto', 'ottawa'],
  quebec: ['montreal', 'quebec_city'],
  saskatchewan: ['regina', 'saskatoon'],
};

const LocationTab: React.FC = () => {
  const tProvince = useTranslations('talents.provinces');
  const tCity = useTranslations('talents.cities');

  const {
    activeLocationTab,
    setActiveLocationTab,
    selectedCitiesByProvince,
    toggleCity,
  } = useTalentFiltersStore();

  const tabs = Object.keys(citiesByProvince).map((key) => ({
    value: key,
    label: tProvince(key),
  }));

  const cities = citiesByProvince[activeLocationTab] || [];
  const selected = selectedCitiesByProvince[activeLocationTab] || [];

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <Tabs
        tabs={tabs}
        value={activeLocationTab}
        onValueChange={setActiveLocationTab}
        layout="vertical"
        className="h-full lg:border-r-[1px] lg:border-[#E0E3E5] flex-row lg:flex-col flex-wrap lg:flex-nowrap"
        rootClassName="flex-1 w-full lg:max-w-[170px] pb-6 lg:pb-0 border-b-[1px] lg:border-b-0 border-dark-200"
        itemClassName="w-auto p-0 lg:py-3 lg:px-5 lg:pl-0 lg:py-2 border-r-0 pr-[28px] py-2"
      />
      <div className="flex-1 grid grid-cols-2 pt-6 lg:pt-0 lg:px-4 gap-x-4 gap-y-3 content-start">
        {cities.map((city) => (
          <Checkbox
            key={city}
            label={tCity(city)}
            checked={selected.includes(city)}
            onChange={() => toggleCity(city)}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationTab;
