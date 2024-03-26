"use client";

import { TPet } from "@/lib/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { placeholderUrl } from "@/lib/constants";
import ImageButton from "./add-image-btn";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";
import { usePetStore } from "@/stores/pet-store";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

export default function PetDetails({ pet }: { pet: TPet | null }) {
  return (
    <section className="flex flex-col h-full w-full">
      {pet ? (
        <>
          <TopBar pet={pet} />
          <OtherInfo owner={pet.owner} age={pet.age} />
          <Notes notes={pet.notes ? pet.notes : ""} />
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
      <h2 className="text-3xl font-semibold leading-7 ml-5">No Pet Selected</h2>
    </section>
  );
}

function TopBar({ pet }: { pet: TPet }) {
  
  const url = pet.imageUrl ? pet.imageUrl : placeholderUrl;
  return (
    <section className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between px-8 py-5 bg-white border-b border-black/10">
      <div className="sm:flex sm:items-center text-center">
        <div className="relative">
          <Image
            src={url}
            alt="Pet Image"
            width={75}
            height={75}
            className="mx-auto sm:mx-0 w-[75px] h-[75px] rounded-full object-cover"
          />
          {url === placeholderUrl && (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black/50 hover:text-accent transition">
              <ImageButton />
            </div>
          )}
        </div>

        <h2 className="text-3xl font-semibold leading-7 sm:ml-5">{pet.name}</h2>
      </div>
      <div className="space-x-2 text-center">
        <EditPet pet={pet} />
        
        <CheckoutPet name={pet.name}/>
      </div>
    </section>
  );
}

function OtherInfo({ owner, age }: { owner: string; age: number }) {
  return (
    <section className="flex justify-between px-8 py-10">
      <div>
        <h3 className="text-[13px] text-left font-medium uppercase text-gray-700">
          owner name
        </h3>
        <p className="mt-1 text-lg text-gray-700 ">{owner}</p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-gray-700 ">
          age
        </h3>
        <p className="mt-1 text-lg text-gray-700 text-center">{age}</p>
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

function EditPet({ pet }: { pet: TPet }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [owner, setOwner] = useState(pet.owner);
  const [name, setName] = useState(pet.name);
  const [age, setAge] = useState(pet.age);
  const [notes, setNotes] = useState(pet.notes ? pet.notes : "");
  const edit = useMutation(api.pets.editPet);
  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Guest Details</DialogTitle>
          <DialogDescription>
            Edit your guest&apos;s details. Edit any field and click save when you&apos;re
            done to persist the changes.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={(e) => {
            e.preventDefault();
            edit({
              id: pet._id,
              name: name,
              age: age,
              notes: notes,
              owner: owner,
            });
            setIsFormOpen(false);
          }}
        >
          <div className="flex flex-col gap-4">
            <Label htmlFor="edit-name">Guest name</Label>
            <Input
              id="edit-name"
              placeholder="Spyke"
              spellCheck={false}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="edit-owner">Owner Name</Label>
            <Input
              id="edit-owner"
              placeholder="John Doe"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="edit-age">
              Age <span className="font-normal opacity-70">(years)</span>
            </Label>
            <Input
              id="edit-age"
              value={age ? age : 0}
              onChange={(e) => {
                if (e.target.valueAsNumber) {
                  if (e.target.valueAsNumber < 0 || e.target.valueAsNumber > 32)
                    return;
                  setAge(e.target.valueAsNumber);
                } else setAge(0);
              }}
              inputMode="numeric"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="edit-notes">
              Notes <span className="font-normal opacity-70">(optional)</span>
            </Label>
            <Textarea
              id="edit-notes"
              placeholder="Likes cat food. Slobbers a lot when he lays down."
              value={notes ? notes : ""}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-fit ml-auto">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function CheckoutPet({name}: { name: string }) {
  const remove = useMutation(api.pets.removePet);
  const activePet = usePetStore((state) => state.activePet);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Checkout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Checkout {name}?</AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            This action cannot be undone. This will remove {name} from your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {
            //activePet will always be of type Id<"pets"> when button is visible
            //@ts-ignore
            remove({ id: activePet });
          }}>Checkout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
