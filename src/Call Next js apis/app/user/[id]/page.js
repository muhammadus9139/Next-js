'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UserDetail() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/users/${params.id}`);
        const data = await res.json();
        setUser(data[0]); // API returns array, get first item
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div style={{ padding: "20px" }}>
      <Link href="/user">← Back to User List</Link>
      <h1>User Detail</h1>
      <div style={{ marginTop: "20px", borderLeft: "4px solid #007bff", paddingLeft: "15px" }}>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}
