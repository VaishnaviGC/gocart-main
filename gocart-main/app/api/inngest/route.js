export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

let handler;

async function getHandler() {
  if (!handler) {
    const { serve } = await import("inngest/next");
    const { inngest } = await import("@/inngest/client");
    const {
      syncUserCreation,
      syncUserUpdation,
      syncUserDeletion,
    } = await import("@/inngest/functions");

    handler = serve({
      client: inngest,
      functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
    });
  }
  return handler;
}

export async function GET(req) {
  const h = await getHandler();
  return h.GET(req);
}

export async function POST(req) {
  const h = await getHandler();
  return h.POST(req);
}

export async function PUT(req) {
  const h = await getHandler();
  return h.PUT(req);
}