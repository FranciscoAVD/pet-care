"use client";
import AddPetButton from "@/components/add-pet-button";
import Branding from "@/components/branding";
import ContentBlock from "@/components/content-block";
import PetDetails from "@/components/pet-details";
import PetList from "@/components/pet-list";
import SearchForm from "@/components/search-form";
import Stats from "@/components/stats";
import useStoreUserEffect from "@/hooks/useStoreUser";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { usePetStore } from "@/stores/pet-store";
import { useSearchStore } from "@/stores/search-store";

export default function Dashboard() {
  const id = useStoreUserEffect();
  const pets = useQuery(api.pets.getPets, { user: id });
  const getPet = usePetStore((state) => state.getActivePet);
  const active = usePetStore((state) => state.activePet);
  const pet = getPet(pets, active);
  const filtered = useSearchStore((state) => state.filterSearch);
  const search = useSearchStore((state) => state.search);

  return (
    <main>
      <div className="flex justify-between sm:items-center py-8">
        <Branding />
        <Stats guests={pets?.length} />
      </div>
      <div className="grid md:grid-cols-3 grid-rows-[45px_300px_500px] md:grid-rows-[45px_1fr] md:h-[600px] gap-4">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <SearchForm />
        </div>
        <ContentBlock className="relative md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <PetList pets={filtered(pets, search)} />
          <AddPetButton className="absolute right-4 bottom-4 z-10" id={id} />
        </ContentBlock>
        <ContentBlock className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
          <PetDetails pet={pet} />
        </ContentBlock>
      </div>
    </main>
  );
}
