// import { NextResponse } from "next/server";

import { CAHCE_TAGS_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const payload = await request.json();
  if (payload.model === "review") {
    revalidateTag(CAHCE_TAGS_REVIEWS);
  }
  console.log("payload: ", payload);
  return new Response(null, { status: 204 });
}
