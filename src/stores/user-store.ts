import { create } from "zustand";
import { Id } from "../../convex/_generated/dataModel";
type TUserStore = {
    currentUserId: Id<"users"> | null,
    setCurrentUserId: (id: Id<"users">) => void
}
export const useUserStore = create<TUserStore>((set) => ({
    currentUserId: null,
    setCurrentUserId: (id) => {
        set(()=>({currentUserId: id}))
    }
}))