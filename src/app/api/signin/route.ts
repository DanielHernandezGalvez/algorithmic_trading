import { signinMock } from "@/services/signin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    console.log(request)

    const body = await request.json()
    const { email, password } = body

    const logged = await signinMock(email, password)

    if(!logged) {
        return NextResponse.json({success: false})
    }

    const cookiesHandler = await cookies()
    cookiesHandler.set("isLogged", "ok")
    cookiesHandler.set("username", "Dinz Kramer")

    return NextResponse.json({success: true})
}