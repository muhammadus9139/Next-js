'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load product");
        }

        setForm({
          name: data.result.name,
          age: String(data.result.age),
          email: data.result.email,
        });
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) loadProduct();
  }, [id]);

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function updateProduct(event) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, age: Number(form.age) }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Unable to update product");
      }

      router.push("/productlist");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <main className="container"><p>Loading product...</p></main>;

  return (
    <main className="container column-layout">
      <Link href="/productlist">Back to product list</Link>
      <h1>Edit Product</h1>
      {error && <p role="alert">{error}</p>}
      <form onSubmit={updateProduct} className="form-box">
        <input name="name" value={form.name} onChange={updateField} placeholder="Name" required />
        <input name="age" type="number" value={form.age} onChange={updateField} placeholder="Age" required />
        <input name="email" type="email" value={form.email} onChange={updateField} placeholder="Email" required />
        <button type="submit" disabled={saving}>{saving ? "Saving..." : "Save changes"}</button>
      </form>
    </main>
  );
}
