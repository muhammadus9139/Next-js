import { connectionStr } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);

    const data = await Product.find();

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
