'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditUserPage() {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", age: "", email: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/users/${params.id}`);
        const data = await res.json();
        const user = data[0];

        if (user) {
          setFormData({
            name: user.name,
            age: user.age,
            email: user.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) fetchUser();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/users/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      router.push("/user");
    } else {
      alert(data.message);
    }
  };

  if (loading) return <div className="container"><h3>Loading user details...</h3></div>;

  return (
    <div className="container">
      <div className="form-box">
        <h1>Edit User</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />

          <button type="submit">Update User</button>
          <Link href="/user" className="secondary-btn">
            <button type="button" style={{ marginTop: "12px" }}>Back to Users</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
