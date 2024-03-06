import { Id } from "../../convex/_generated/dataModel";

export type TPet = {
    _id: Id<"pets">;
    _creationTime: number;
    notes?: string | undefined;
    imageStorageId?: Id<"_storage"> | undefined;
    careTaker: Id<"users">;
    name: string;
    age: number;
    owner: string;
};