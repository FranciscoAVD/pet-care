import { Id } from "../../convex/_generated/dataModel";

export type TPet = {
  _id: Id<"pets">;
  _creationTime: number;
  notes?: string | undefined;
  imageStorageId?: Id<"_storage"> | undefined;
  imageUrl?: string | null | undefined;
  careTaker: Id<"users">;
  name: string;
  age: number;
  owner: string;
};

/*{ _id: Id<"pets">; 
_creationTime: number; 
notes?: string | undefined;
 imageStorageId?: Id<"_storage"> | undefined;
  imageUrl?: string | null | undefined;
   careTaker: Id<"users">;
    name: string;
     age: number;
      owner: string;
     }[] | null | undefined */
