import { TPet } from "@/lib/types";
import { create } from "zustand";

type TPetStore = {
    activePet: string;
    pets: TPet[];
    setActivePetId: (id: string) => void;
    getActivePet: (pets: TPet[]) => TPet;
}
export const usePetStore = create<TPetStore>((set,get) =>({
    activePet: '-1',
    pets: [],
    setActivePetId: (id) => set(()=>({activePet: id})),
    getActivePet: (pets: TPet[]) => {
        const active = pets.filter(p => p.id === get().activePet)
        return active[0];
    }
}))