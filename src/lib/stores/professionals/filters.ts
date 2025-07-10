import { create } from 'zustand';

type ProfessionalsFiltersState = {
  isOpen: boolean;
};
type ProfessionalsFiltersActions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const initialState: ProfessionalsFiltersState = {
  isOpen: false,
};

export const useProfessionalsFilters = create<
  ProfessionalsFiltersState & ProfessionalsFiltersActions
>()((set) => ({
  ...initialState,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
