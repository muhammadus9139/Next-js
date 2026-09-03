'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load products");
        }

        setProducts(data.result || []);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  async function deleteProduct(id) {
    if (!window.confirm("Delete this product?")) return;

    try {
      const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to delete product");
      }

      setProducts((currentProducts) =>
        currentProducts.filter((product) => product._id !== id)
      );
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  return (
    <main className="container column-layout">
      <Link href="/">Back to home</Link>
      <h1>Product List</h1>
      <Link href="/addproduct">Add product</Link>

      {loading && <p>Loading products...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      {!loading && !error && products.map((product) => (
        <article className="user-row" key={product._id}>
          <div>
            <strong>{product.name}</strong>
            <p>Age: {product.age}</p>
            <p>Email: {product.email}</p>
          </div>
          <Link href={`/product/edit/${product._id}`}>Edit</Link>
          <button type="button" onClick={() => deleteProduct(product._id)}>
            Delete
          </button>
        </article>
      ))}
    </main>
  );
}
