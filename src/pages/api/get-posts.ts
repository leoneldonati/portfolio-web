import { postModel } from "@db";
import { res } from "@scripts/response";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const query = new URL(request.url).searchParams.get("q");
  const parsedQuery = query ? Number(query) : 10;
  try {
    const postsArray = await postModel.find().limit(parsedQuery).toArray();

    return res({ posts: postsArray.sort((a, b) => b.created - a.created) });
  } catch (err) {
    console.log(err);
    return res({}, 500);
  }
};
