import { TPet } from "@/lib/types";
import { create } from "zustand";
import { Id } from "../../convex/_generated/dataModel";

type TPetStore = {
  activePet: Id<"pets"> | string;
  pets: TPet[];
  setActivePetId: (id: Id<"pets">) => void;
  getActivePet: (pets: TPet[] | null | undefined, id: string) => TPet | null;
};
export const usePetStore = create<TPetStore>((set) => ({
  activePet: "",
  pets: [],
  setActivePetId: (id) => {
    set(() => ({ activePet: id }));
  },
  getActivePet: (pets, id) => {
    const active = pets?.find((p) => p._id === id);
    return active ? active : null;
  },
}));
