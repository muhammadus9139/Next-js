import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const data = user;

  const { id } = await params;

  const userdata = data.filter((item) => {
    return item.id === parseInt(id);
  });

  return NextResponse.json(userdata, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const payload = await request.json();

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { message: "All fields are required", success: false },
      { status: 400 }
    );
  }

  const userIndex = user.findIndex((item) => item.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json(
      { message: "User not found", success: false },
      { status: 404 }
    );
  }

  user[userIndex] = {
    ...user[userIndex],
    name: payload.name,
    age: Number(payload.age),
    email: payload.email,
  };

  return NextResponse.json(
    { message: "User updated successfully", success: true, data: user[userIndex] },
    { status: 200 }
  );
}
