import {NextResponse} from "next/server";
import repos from "./data.json"

export async function GET(request) {
    return NextResponse.json(repos)
}