import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addPet = mutation({
  // You can customize these as you like
  args: {
    storageId: v.optional(v.id("_storage")),
    name: v.string(),
    owner: v.string(),
    age: v.number(),
    notes: v.optional(v.string()),
    user: v.id("users"),
  },
  handler: async (ctx, args) => {
    const res = await ctx.db.insert("pets", {
      imageStorageId: args.storageId,
      owner: args.owner,
      age: args.age,
      notes: args.notes,
      name: args.name,
      careTaker: args.user,
    });
    return res;
  },
});
export const getPets = query({
  args: {
    user: v.union(v.id("users"), v.null()),
  },
  handler: async (ctx, args) => {
    if (args.user !== null) {
      const res = await ctx.db
        .query("pets")
        //@ts-ignore
        .withIndex("by_careTaker", (q) => q.eq("careTaker", args.user))
        .collect();
      return res;
    }
    return [];
  },
});
