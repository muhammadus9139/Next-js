import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const data = user;

  const { id } = await params;

  console.log(data, id);

  const userdata = data.filter((item) => {
    return item.id === parseInt(id);
  });

  return NextResponse.json(userdata, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = await params;
  let payload = await request.json();
  console.log(payload.name, id);

  if(!payload.id || !payload.name  || !payload.age || !payload.email){
    return NextResponse.json({message:"All fields are required", success:false},{status:400});
  }
  else{
      return NextResponse.json({ message: "User updated successfully", success: true }, { status: 200 });

  }

}
