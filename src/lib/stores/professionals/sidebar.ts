import { create } from 'zustand';

type OpenState = 'filters' | 'analytics' | 'sidebar' | null;

type ProfessionalsSidebarState = {
  state: OpenState;
};
type ProfessionalsSidebarActions = {
  open: (value: OpenState) => void;
  close: () => void;
};

const initialState: ProfessionalsSidebarState = {
  state: null,
};

export const useProfessionalsSidebar = create<
  ProfessionalsSidebarState & ProfessionalsSidebarActions
>()((set) => ({
  ...initialState,
  open: (value) => set(() => ({ state: value })),
  close: () => set(() => ({ state: null })),
}));
