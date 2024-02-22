import { TPet } from "@/lib/types";
import { create } from "zustand";

type TPetStore = {
    activePet: string;
    pets: TPet[];
    setActivePet: (id: string) => void;
    setPets: (pet: TPet) => void;
}
export const usePetStore = create<TPetStore>((set,get) =>({
    activePet: '-1',
    pets: [],
    setActivePet: (id) => set(()=>({activePet: id})),
    setPets: (pet) => {
        set(state => ({pets: [...state.pets, pet]}))
    }
}))