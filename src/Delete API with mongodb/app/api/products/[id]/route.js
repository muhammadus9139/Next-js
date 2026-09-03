import { connectionStr } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";

const connectionOptions = {
  serverSelectionTimeoutMS: 5000,
  bufferTimeoutMS: 5000,
};

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

function invalidId(id) {
  return !mongoose.Types.ObjectId.isValid(id);
}

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (invalidId(id)) {
      return NextResponse.json({ error: "Invalid product id" }, { status: 400 });
    }

    await mongoose.connect(connectionStr, connectionOptions);
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ result: product }, { status: 200, headers: noCacheHeaders });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const payload = await request.json();

    if (invalidId(id)) {
      return NextResponse.json({ success: false, error: "Invalid product id" }, { status: 400 });
    }

    if (!payload.name || !Number.isFinite(Number(payload.age)) || !payload.email) {
      return NextResponse.json(
        { success: false, message: "Name, age, and email are required" },
        { status: 400 }
      );
    }

    await mongoose.connect(connectionStr, connectionOptions);
    const product = await Product.findByIdAndUpdate(
      id,
      { name: payload.name, age: Number(payload.age), email: payload.email },
      { new: true, runValidators: true }
    );

    if (!product) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, result: product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    if (invalidId(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid product id" },
        { status: 400 }
      );
    }

    await mongoose.connect(connectionStr, connectionOptions);
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Product deleted successfully", result: product },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
