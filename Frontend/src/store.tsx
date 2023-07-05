import { create } from 'zustand';

interface UiState {
  hasRegistered: boolean;
  setHasRegistered: (value: boolean) => void;
}

export const useUiStore = create<UiState>()((set) => ({
  hasRegistered: false,
  setHasRegistered: (value) => set(() => ({ hasRegistered: value })),
}));
