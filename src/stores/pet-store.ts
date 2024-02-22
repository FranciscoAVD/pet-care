import { TPet } from "@/lib/types";
import { create } from "zustand";

type TPetStore = {
    activePet: number | null;
    pets: TPet[];
    setActivePet: (id: number) => void;
    setPets: (pet: TPet) => void;
}
export const usePetStore = create<TPetStore>((set,get) =>({
    activePet: null,
    pets: [],
    setActivePet: (id) => set(()=>({activePet: id})),
    setPets: (pet) => {
        set(state => ({pets: [...state.pets, pet]}))
    }
}))