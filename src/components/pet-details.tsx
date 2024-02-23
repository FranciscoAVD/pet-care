"use client";

import { TPet } from "@/lib/types";
import Image from "next/image";
import { usePetStore } from "@/stores/pet-store";
import { Button } from "./ui/button";
import { placeholderUrl } from "@/lib/constants";

export default function PetDetails({ pets }: { pets: TPet[] }) {
  const getPet = usePetStore((state) => state.getActivePet);
  const id = usePetStore((state) => state.activePet);
  const pet = getPet(pets, id);
  return (
    <section className="flex flex-col h-full w-full">
      {pet ? (
        <>
          <TopBar url={pet.imageUrl} name={pet.name} />
          <OtherInfo owner={pet.ownerName} age={pet.age} />
          <Notes notes={pet.notes} />
        </>
      ) : (
        <NoPet />
      )}
    </section>
  );
}

function NoPet() {
  return (
    <section className="flex items-center px-8 py-5 bg-white border-b border-black/10">
        <Image
          src={placeholderUrl}
          alt="Pet Image"
          width={75}
          height={75}
          className="w-[75px] h-[75px] rounded-full object-cover"
        />
        <h2 className="text-3xl font-semibold leading-7 ml-5">
          No Pet Selected
        </h2>      
    </section>
  );
}

function TopBar({ url, name }: { url: string; name: string }) {
  return (
    <section className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between px-8 py-5 bg-white border-b border-black/10">
      <div className="sm:flex sm:items-center text-center">
        <Image
          src={url}
          alt="Pet Image"
          width={75}
          height={75}
          className="mx-auto sm:mx-0 w-[75px] h-[75px] rounded-full object-cover"
        />
        <h2 className="text-3xl font-semibold leading-7 sm:ml-5">{name}</h2>
      </div>
      <div className="space-x-2 mx-auto sm:mx-0 w-fit">
        <Button>Edit</Button>
        <Button variant="secondary" className="hover:text-accent">
          Checkout
        </Button>
      </div>
    </section>
  );
}

function OtherInfo({ owner, age }: { owner: string; age: number }) {
  return (
    <section className="flex justify-between px-8 py-10 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-gray-700 ">
          owner name
        </h3>
        <p className="mt-1 text-lg text-gray-700 ">{owner}</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-gray-700 ">
          age
        </h3>
        <p className="mt-1 text-lg text-gray-700 ">{age}</p>
      </div>
    </section>
  );
}

function Notes({ notes }: { notes: string }) {
  return (
    <section className="grow bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-black/10">
      {notes}
    </section>
  );
}
