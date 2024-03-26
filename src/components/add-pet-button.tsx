"use client";
import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ImageButton from "./add-image-btn";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

export default function AddPetButton({ className, id }: { className?: string, id: Id<"users">|null }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [notes, setNotes] = useState("");
  const add = useMutation(api.pets.addPet);

  const handleSubmit = async () => {
    if(!id) return;
    const pet = {
      name: name,
      owner: owner,
      age: age,
      notes: notes,
      user: id,
    };
    const success = await add(pet);
    //will use id for success banner
  };
  const resetInputs = () => {
    setName("");
    setOwner("");
    setAge(1);
    setNotes("");
  };
  const disabled = () => {
    if (owner && name && age && age >= 1 && age <= 32) {
      return false;
    }
    return true;
  };
  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            `bg-gray-900 h-14 w-14 hover:bg-gray-900/80 p-0 ${className}`
          )}
        >
          <PlusIcon className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Guest</DialogTitle>
          <DialogDescription>
            Add new Guests to your dashboard. Be sure to fill out all fields not
            labeled as <span className="font-bold">optional</span>. Click add
            when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              resetInputs();
              setIsFormOpen(false);
            }}>
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Guest name</Label>
            <Input
              id="name"
              placeholder="Spyke"
              spellCheck={false}
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="owner">Owner Name</Label>
            <Input
              id="owner"
              placeholder="John Doe"
              value={owner ? owner : ""}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="age">
              Age <span className="font-normal opacity-70">(years)</span>
            </Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="32"
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
            <Label htmlFor="notes">
              Notes <span className="font-normal opacity-70">(optional)</span>
            </Label>
            <Textarea
              placeholder="Likes cat food. Slobbers a lot when he lays down."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-fit ml-auto"
            disabled={disabled()}
          >
            Add
          </Button>
        </form>
        
          
        
      </DialogContent>
    </Dialog>
  );
}
