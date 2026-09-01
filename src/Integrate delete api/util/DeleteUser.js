"use client";

import { useRouter } from "next/navigation";

export default function DeleteUser({ id }) {
  const router = useRouter();

  const deleteuser = async () => {
    const result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    });

    const data = await result.json();

    if (data.success) {
      alert(data.message);
      router.refresh();
    } else {
      alert(data.message);
    }
  };

  return <button onClick={deleteuser}>Delete</button>;
}
