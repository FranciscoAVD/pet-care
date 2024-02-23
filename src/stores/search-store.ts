import { TPet } from "@/lib/types";
import { create } from "zustand";

type TSearchStore = {
  search: string;
  setSearch: (search: string) => void;
  filterSearch: (p: TPet[], s: string) => TPet[];
};
export const useSearchStore = create<TSearchStore>((set, get) => ({
  search: "",
  setSearch: (s) => {
    set(() => ({ search: s }));
  },
  filterSearch: (pets: TPet[], s) => {
    const filtered = pets.filter((p) =>
      p.name.toLocaleLowerCase().includes(s.toLowerCase())
    );
    return filtered;
  },
}));
