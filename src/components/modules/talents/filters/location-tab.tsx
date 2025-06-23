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

  const locationTab =
    activeLocationTab.length === 0 ? tabs[0].value : activeLocationTab;
  const cities = citiesByProvince[locationTab] || [];
  const selected = selectedCitiesByProvince[locationTab] || [];

  return (
    <div className="flex w-full">
      <Tabs
        tabs={tabs}
        value={locationTab}
        onValueChange={setActiveLocationTab}
        layout="vertical"
        className="h-full border-r-[1px] border-[#E0E3E5]"
        rootClassName="flex-1 w-full max-w-[170px]"
        itemClassName="pl-0 py-2"
      />
      <div className="flex-1 grid grid-cols-2 px-4 gap-x-4 gap-y-3 content-start">
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
