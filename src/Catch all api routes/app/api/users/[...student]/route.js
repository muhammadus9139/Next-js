import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { student } = await params;
    console.log(student);

    return NextResponse.json({ message: "Student data fetched successfully", student }, { status: 200 });
}
