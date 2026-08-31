import { NextResponse } from "next/server";


export async function GET(request) {
    return NextResponse.json({name:"usama",age:20,city:"lahore"}, {status:200})
}
