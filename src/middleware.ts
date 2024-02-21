import { NextRequest, NextResponse } from "next/server";

export default function middleWare(req: NextRequest) {
  // console.log("request", req.url);

  return NextResponse.next();
}
