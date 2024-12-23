"use server"

import { db } from "@/db/connection"
import { blogPost, insertBlogPostSchema, newInserBlogPostSchema } from "@/db/schema"

export const addBlogPost = async (post: unknown) => {
  const parsedPost = insertBlogPostSchema.parse({
    title: "",
    content: "",
    author: "",
    views: null,
  })

  await db.insert(blogPost).values(parsedPost)
}
