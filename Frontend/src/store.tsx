import { create } from 'zustand';

interface UiState {
  hasRegistered: boolean;
  setHasRegistered: (value: boolean) => void;
  startAddress: string;
  destinationAddress: string;
  setStartLocation: (value: string) => void;
  setDestinationLocation: (value: string) => void;
}

export const useUiStore = create<UiState>()((set) => ({
  hasRegistered: false,
  setHasRegistered: (value) => set(() => ({ hasRegistered: value })),
  startAddress: '',
  destinationAddress: '',
  setStartLocation: (value) => set(() => ({ startAddress: value })),
  setDestinationLocation: (value) => set(() => ({ destinationAddress: value })),
}));
