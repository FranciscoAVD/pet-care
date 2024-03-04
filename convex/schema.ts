import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userName: v.string(),
    tokenIdentifier: v.string(),
  }).index('by_token', ['tokenIdentifier']),
  pets: defineTable({
    careTaker: v.id("users"),
    name: v.string(),
    age: v.number(),
    owner: v.string(),
    notes: v.optional(v.string()),
    // profileImage: v.optional()
  }).index('by_careTaker', ['careTaker'])
});
