import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    clerkId: v.string(),       
  }).index("by_clerk_id", ["clerkId"]),

  conversations: defineTable({
    userId: v.string(),        
    mood: v.string(),   
    situation: v.string(),     
    advice: v.string(),       
    createdAt: v.number(),    
  })
  .index("by_user_id", ["userId"])
  .index("by_created_at", ["createdAt"]),
});
