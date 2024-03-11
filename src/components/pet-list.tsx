"use client";

import { usePetStore } from "@/stores/pet-store";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { placeholderUrl } from "@/lib/constants";
import { TPet } from "@/lib/types";
import { Id } from "../../convex/_generated/dataModel";

export default function PetList({ pets }: { pets: TPet[] | null | undefined }) {
  return pets && pets.length > 0 ? (
    <ul
      className={cn("h-full border-b border-black/10", {
        //for mobile devices
        "overflow-y-scroll overscroll-contain": pets.length > 4,
      })}
    >
      {pets.map((p) => (
        <Li
          key={p._id}
          imgSrc={p.imageUrl ? p.imageUrl : placeholderUrl}
          petName={p.name}
          petId={p._id}
        />
      ))}
    </ul>
  ) : pets === null ? (
    <LoadingPets />
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
  petId: Id<"pets">;
}) {
  const active = usePetStore((state) => state.activePet);
  const setPet = usePetStore((state) => state.setActivePetId);
  return (
    <li>
      <button
        className={cn(
          "flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-x-3 bg-white hover:bg-[#eff1f2] focus:bg-[#eff1f2] transition",
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

function LoadingPets() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-10 w-10 border-4 border-t-main animate-spin rounded-full" />
    </div>
  );
}
function NoPets() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <span className="text-lg mb-[100px]">No pets</span>
    </div>
  );
}
