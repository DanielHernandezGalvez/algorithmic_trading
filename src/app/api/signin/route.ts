import { signinMock } from "@/services/signin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    console.log(request)

    const body = await request.json()
    const { email, password } = body

    const logged = await signinMock(email, password)

    if(!logged) {
        return NextResponse.json({success: false})
    }

    return NextResponse.json({success: true})
}