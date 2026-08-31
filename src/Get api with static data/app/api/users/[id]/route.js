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
