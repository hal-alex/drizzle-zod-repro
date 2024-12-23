CREATE TABLE "blog_post" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "blog_post_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar NOT NULL,
	"content" text NOT NULL,
	"author" varchar,
	"views" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
