import { user } from "@/util/db";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";


export async function GET(request) {
  const data=user;
  return NextResponse.json(data,{status:200});
}

export async function POST(request){
  let payload= await request.json(); // store whole json which we write in postman 
  console.log(payload.name); // console only name from thunder client

  if(!payload.name  || !payload.age || !payload.email){
    return NextResponse.json({message:"All fields are required", success:false},{status:400});
  }
  
  return NextResponse.json({message:"User added successfully", success:true},{status:200});
}
