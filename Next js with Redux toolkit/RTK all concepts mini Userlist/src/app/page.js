"use client";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";

export default function Page() {
  return (
    <main className="users-page">
      <AddUsers/>
      <DisplayUsers/>
   </main>
  );
}
