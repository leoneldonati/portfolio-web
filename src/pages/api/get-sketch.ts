import { res } from "@scripts/response";
import type { APIRoute } from "astro";
import { Borrors, db } from "astro:db";

export const GET:APIRoute = async ({ request }) => {
  try {
    const borrors = await db.select().from(Borrors)

    return res({borrors})
  }
  catch (err) {
    console.log(err)
    return res({}, 500);
  }
}