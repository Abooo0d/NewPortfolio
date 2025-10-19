import { create } from "zustand";

interface PortfolioState {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

// Create the store with types
export const usePortfolioStore = create<PortfolioState>((set) => ({
  activeIndex: null,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
