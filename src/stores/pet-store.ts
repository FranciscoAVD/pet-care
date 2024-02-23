import { TPet } from "@/lib/types";
import { create } from "zustand";

type TPetStore = {
    activePet: string;
    pets: TPet[];
    setActivePetId: (id: string) => void;
    getActivePet: (pets: TPet[], id: string) => TPet|null;
}
export const usePetStore = create<TPetStore>((set,get) =>({
    activePet: '-1',
    pets: [],
    setActivePetId: (id) => {
        set(()=>({activePet: id}))
    },
    getActivePet: (pets: TPet[], id) => {
        const active = pets.find(p => p.id === id);
        return active ? active : null;
    }
}))