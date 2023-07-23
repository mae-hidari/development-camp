create table "public"."sentense" (
    "id" bigint generated by default as identity not null,
    "user_id" bigint,
    "story_id" bigint,
    "body" character varying,
    "created_at" timestamp with time zone default now()
);


alter table "public"."sentense" enable row level security;

create table "public"."story" (
    "id" bigint generated by default as identity not null,
    "title" character varying,
    "is_completed" boolean default false,
    "created_at" timestamp with time zone default now()
);


alter table "public"."story" enable row level security;

create table "public"."user" (
    "id" bigint generated by default as identity not null,
    "email" character varying,
    "name" character varying,
    "created_at" timestamp with time zone default now()
);


alter table "public"."user" enable row level security;

CREATE UNIQUE INDEX sentense_pkey ON public.sentense USING btree (id);

CREATE UNIQUE INDEX story_pkey ON public.story USING btree (id);

CREATE UNIQUE INDEX user_pkey ON public."user" USING btree (id);

alter table "public"."sentense" add constraint "sentense_pkey" PRIMARY KEY using index "sentense_pkey";

alter table "public"."story" add constraint "story_pkey" PRIMARY KEY using index "story_pkey";

alter table "public"."user" add constraint "user_pkey" PRIMARY KEY using index "user_pkey";

create policy "Enable insert for authenticated users only"
on "public"."user"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."user"
as permissive
for select
to public
using (true);


