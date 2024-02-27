import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function AddPetButton({ className }: { className?: string }) {
  return (
    <Button
      className={cn(
        `bg-gray-900 h-14 w-14 hover:bg-gray-900/80 p-0 ${className}`
      )}
    >
      <PlusIcon className="h-6 w-6" />
    </Button>
  );
}
