import { create } from 'zustand';

type AuthView = 'signIn' | 'signUp' | 'forgot';

type AuthModalState = {
  isOpen: boolean;
  view: AuthView;
};

type AuthModalActions = {
  open: (view: AuthView) => void;
  close: () => void;
  setView: (view: AuthView) => void;
};

type AuthModalStore = AuthModalState & AuthModalActions;

export const useAuthModalStore = create<AuthModalStore>((set) => ({
  isOpen: false,
  view: 'signIn',
  open: (view) => set({ isOpen: true, view }),
  close: () => set({ isOpen: false }),
  setView: (view) => set({ view }),
}));
