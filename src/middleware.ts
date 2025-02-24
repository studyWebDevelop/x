import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  // config 요소의 페이지에 접근할때만 session으로 분기처리
  const session = await auth();

  if (!session) {
    return NextResponse.redirect("http://localhost:3000");
  }
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
