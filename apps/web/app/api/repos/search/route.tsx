import { NextResponse } from "next/server";
import repos from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.nextUrl);
  console.log(request.url);
  console.log(searchParams);
  console.log(searchParams.get("name"));
  return NextResponse.json(repos);
}
