import {
  pgTable,
  serial,
  varchar,
  integer,
  text,
  timestamp,
} from "drizzle-orm/pg-core"
import { InferSelectModel, InferInsertModel } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const blogPost = pgTable("blog_post", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  title: varchar("title").notNull(),
  content: text("content").notNull(),
  author: varchar("author"),
  views: integer("views"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export type SelectBlogPost = InferSelectModel<typeof blogPost>
export type InsertBlogPost = InferInsertModel<typeof blogPost>

export const insertBlogPostSchema = createInsertSchema(blogPost)

export const newInserBlogPostSchema = z.object({
  id: z.number().optional(),
  title: z.string().nonempty(),
  content: z.string().nonempty(),
  author: z.string().optional(),
  views: z.coerce.number().optional(),
  createdAt: z.date().optional(),
})
