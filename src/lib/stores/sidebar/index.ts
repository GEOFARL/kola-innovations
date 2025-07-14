import { create } from 'zustand';

type OpenState =
  | 'filters'
  | 'analytics'
  | 'profile-analytics'
  | 'sidebar'
  | 'similar-talents'
  | null;

type SidebarState = {
  state: OpenState;
};
type SidebarActions = {
  open: (value: OpenState) => void;
  close: () => void;
};

const initialState: SidebarState = {
  state: null,
};

export const useSidebar = create<SidebarState & SidebarActions>()((set) => ({
  ...initialState,
  open: (value) => set(() => ({ state: value })),
  close: () => set(() => ({ state: null })),
}));
