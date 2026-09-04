import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json(
      {
        success: false,
        message: "No file uploaded",
      },
      { status: 400 }
    );
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  const path = `public/uploads/${file.name}`;

  await writeFile(path, buffer);

  return NextResponse.json({
    success: true,
    message: "File uploaded successfully",
  });
}
