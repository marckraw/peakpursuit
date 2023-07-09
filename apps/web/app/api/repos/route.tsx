import { NextResponse } from "next/server";
import repos from "./data.json";

export async function GET(request) {
  return NextResponse.json(repos);
}

export async function POST(request) {
  const course = await request.json();
  return NextResponse.json(repos);
}
