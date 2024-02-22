import { TPet } from "@/lib/types";
import { create } from "zustand";

type TPetStore = {
    activePet: string;
    pets: TPet[];
    setActivePet: (id: string) => void;
    setPets: (pets: TPet[]) => void;
}
export const usePetStore = create<TPetStore>((set,get) =>({
    activePet: '-1',
    pets: [],
    setActivePet: (id) => set(()=>({activePet: id})),
    setPets: (pets) => {
        set(() => ({pets: [...pets]}))
    }
}))