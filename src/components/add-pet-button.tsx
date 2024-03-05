"use client";

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

export default function AddPetButton({ className }: { className?: string }) {
  return (
    <Dialog>
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
            Add new Guests to your dashboard. Click "Add" when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Guest name</Label>
            <Input id="name" placeholder="Spyke" spellCheck={false} />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="owner">Owner Name</Label>
            <Input id="owner" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="3" type="number" min="0" max="32" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="notes">
              Notes <span className="font-normal opacity-70">(optional)</span>
            </Label>
            <Textarea placeholder="Likes cat food. Slobers a lot when he lays down." />
          </div>

          <Label>
            Guest Image{" "}
            <span className="font-normal opacity-70">(optional)</span>
          </Label>
          <ImageButton />
        </div>

        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
