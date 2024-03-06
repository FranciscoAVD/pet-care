"use client";

import { usePetStore } from "@/stores/pet-store";
import { useSearchStore } from "@/stores/search-store";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUserStore } from "@/stores/user-store";
import { placeholderUrl } from "@/lib/constants";

export default function PetList() {

  const currUser = useUserStore(state=>state.currentUserId)
  const pets = useQuery(api.pets.getPets, { user: currUser });

  const setNum = usePetStore((state) => state.setNumberOfGuests);
  const filtered = useSearchStore((state) => state.filterSearch);
  const search = useSearchStore((state) => state.search);

  console.log(pets)
  return pets && pets.length > 0 ? (
    <ul className="bg-white border-b border-black/10">
      {filtered(pets, search).map((p) => (
        <Li
          key={p._id}
          imgSrc={p.imageStorageId ? p.imageStorageId : placeholderUrl}
          petName={p.name}
          petId={p._id}
        />
      ))}
    </ul>
  ) : (
    <NoPets />
  );
}

function Li({
  imgSrc,
  petName,
  petId,
}: {
  imgSrc: string;
  petName: string;
  petId: string;
}) {
  const active = usePetStore((state) => state.activePet);
  const setPet = usePetStore((state) => state.setActivePetId);
  return (
    <li>
      <button
        className={cn(
          "flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-x-3 hover:bg-[#eff1f2] focus:bg-[#eff1f2] transition",
          {
            "bg-accent/90 hover:bg-accent/90 focus:bg-accent/90 text-white":
              petId === active,
          }
        )}
        onClick={() => setPet(petId)}
      >
        <Image
          src={imgSrc}
          alt="pet image"
          className="w-[45px] h-[45px] rounded-full object-cover"
          width={45}
          height={45}
        />
        <p className="font-semibold">{petName}</p>
      </button>
    </li>
  );
}

function NoPets() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <span className="text-lg ">Currently, no pets</span>
    </div>
  );
}
