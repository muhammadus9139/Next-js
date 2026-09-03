import { connectionStr } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

export async function GET() {
  try {
    await mongoose.connect(connectionStr, {
      serverSelectionTimeoutMS: 5000,
      bufferTimeoutMS: 5000,
    });

    const data = await Product.find();

    return NextResponse.json({ result: data }, { headers: noCacheHeaders });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload.name || !Number.isFinite(Number(payload.age)) || !payload.email) {
      return NextResponse.json(
        { success: false, message: "Name, age, and email are required" },
        { status: 400 }
      );
    }

    await mongoose.connect(connectionStr, {
      serverSelectionTimeoutMS: 5000,
      bufferTimeoutMS: 5000,
    });
    const product = new Product({
      name: payload.name,
      age: Number(payload.age),
      email: payload.email,
    });

    const result = await product.save();
    return NextResponse.json({ success: true, result: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
