import { res } from "@scripts/response";
import type { APIRoute } from "astro";

export const GET:APIRoute = async ({ request }) => {
  try {
    // const borrors = await db.select().from(Borrors)

    return res({})
  }
  catch (err) {
    console.log(err)
    return res({}, 500);
  }
}