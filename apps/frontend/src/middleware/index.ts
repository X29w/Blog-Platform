import { getSession } from "@/utils/config/session";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (!session || !session.user)
    return NextResponse.redirect(new URL("/auth/signin", request.url));
}

export const config = {
  matcher: "/user/:path*",
};
