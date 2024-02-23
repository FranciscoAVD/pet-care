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
        console.log(get().activePet, "from setter")
    },
    getActivePet: (pets: TPet[], id) => {
        console.log(get().activePet, "from filter")
        const active = pets.filter(p => p.id === id);
        return active.length === 1 ? active[0] : null;
    }
}))