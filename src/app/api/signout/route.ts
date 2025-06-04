import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {


    const cookiesHandler = await cookies()
    cookiesHandler.delete("isLogged")

    return NextResponse.json({success: true})
}