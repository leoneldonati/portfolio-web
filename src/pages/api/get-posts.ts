import { res } from "@scripts/response";
import type { APIRoute } from "astro";
import { db, Post } from "astro:db";

export const GET: APIRoute = async ({ request }) => {
  const query = new URL(request.url).searchParams.get("q");
  const parsedQuery = query ? Number(query) : 10;
  try {
    const postsArray = await db.select().from(Post).limit(parsedQuery)
    return res({ posts: postsArray });
  } catch (err) {
    console.log(err)
    return res({}, 500);
  }
};
