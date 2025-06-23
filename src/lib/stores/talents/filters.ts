import { create } from 'zustand';

type FilterBar = 'skills' | 'location';

type TalentFiltersState = {
  activeTab: FilterBar | null;
  activeLocationTab: string;
  activeSkills: string[];
  selectedCitiesByProvince: Record<string, string[]>;
};

type TalentFiltersActions = {
  setActiveTab: (bar: FilterBar | null) => void;
  setActiveLocationTab: (tab: string) => void;
  toggleActiveSkill: (skill: string) => void;
  toggleCity: (city: string) => void;
  clearAll: () => void;
};

export const useTalentFiltersStore = create<
  TalentFiltersState & TalentFiltersActions
>((set) => ({
  activeTab: null,
  activeSkills: [],
  selectedCitiesByProvince: {},
  activeLocationTab: 'nova-scotia',
  setActiveTab: (bar) => set(() => ({ activeTab: bar })),
  setActiveLocationTab: (tab) => set(() => ({ activeLocationTab: tab })),
  toggleCity: (city) =>
    set((state) => {
      const province = state.activeLocationTab;
      const current = state.selectedCitiesByProvince[province] ?? [];
      const updated = current.includes(city)
        ? current.filter((c) => c !== city)
        : [...current, city];

      return {
        selectedCitiesByProvince: {
          ...state.selectedCitiesByProvince,
          [province]: updated,
        },
      };
    }),
  toggleActiveSkill: (skill) =>
    set(({ activeSkills }) => ({
      activeSkills: activeSkills.includes(skill)
        ? activeSkills.filter((v) => v !== skill)
        : [...activeSkills, skill],
    })),
  clearAll: () =>
    set(() => ({
      activeSkills: [],
      selectedCitiesByProvince: {},
      activeLocationTab: 'nova-scotia',
    })),
}));
