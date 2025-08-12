import { Place } from '@/interfaces/place';
import { create } from 'zustand';

interface AppState {
  Places: Place[];
  AddPlaces: (places: Place[]) => void;
  clearList: () => void;
}

export const useStore = create<AppState>((set) => ({
    Places: [],
    AddPlaces: (places: Place[]) => set((state) => ({
        Places: [...places]
    })),        
    clearList: () => set({ Places: [] }),
}));

