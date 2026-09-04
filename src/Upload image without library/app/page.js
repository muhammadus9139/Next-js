"use client";

import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState(null);

  async function onsubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.set("file", file);

    let result = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    result = await result.json();
    console.log(result);

    if (result.success) {
      alert("Image uploaded successfully");
    }
  }

  return (
    <main>
      <h1>Upload image</h1>

      <form onSubmit={onsubmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0])}
        />

        <button type="submit">Upload</button>
      </form>
    </main>
  );
}
