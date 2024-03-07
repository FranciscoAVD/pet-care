import { TPet } from "@/lib/types";
import { create } from "zustand";

type TSearchStore = {
  search: string;
  setSearch: (search: string) => void;
  filterSearch: (p: TPet[] | undefined | null, s: string) => TPet[]|null|undefined;
};
export const useSearchStore = create<TSearchStore>((set, get) => ({
  search: "",
  setSearch: (s) => {
    set(() => ({ search: s }));
  },
  filterSearch: (pets, s) => {
    //if pets is null, the id is still unset and the pets are being queried from db
    if(pets === null) return null;
    //if pets is undefined, the id was set but query threw an error
    if(pets === undefined) return undefined;
    //else there is an array of pets
    else {
      const filtered = pets.filter((p) =>
        p.name.toLocaleLowerCase().includes(s.toLowerCase())
      );
      return filtered;
    }
  },
}));
