import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addPet = mutation({
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
      return res ? res : undefined;
    }
    return null;
  },
});

export const removePet = mutation({
  args: {
    id: v.id("pets"),
  },
  handler: async (ctx, args) => {
    const pet = await ctx.db.get(args.id);
    if (pet?.imageStorageId) await ctx.storage.delete(pet.imageStorageId);
    await ctx.db.delete(args.id);
  },
});

export const addImage = mutation({
  args: {
    pet: v.id("pets"),
    imageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.pet, {
      imageStorageId: args.imageId,
      imageUrl: await ctx.storage.getUrl(args.imageId),
    });
  },
});

export const editPet = mutation({
  args: {
    id: v.id("pets"),
    notes: v.string(),
    owner: v.string(),
    age: v.number(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id,{
      name: args.name,
      age: args.age,
      owner: args.owner,
      notes: args.notes,
    })
  }
});
