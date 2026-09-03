'use client';

import { useState } from "react";
import Link from "next/link";

export default function AddProduct() {

    const [name, setName]= useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    async function addProduct() {
        const payload = { name, age: Number(age), email };
        const response = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const result = await response.json();

        if (!response.ok) {
            alert(result.error || result.message || "Unable to add product");
            return;
        }

        alert("Record added");
        setName("");
        setAge("");
        setEmail("");
    }

    return(
        <div>
            <Link href="/productlist">View product list</Link>
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input> <br/><br/>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age"></input><br/><br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input> <br/><br/>
            <button onClick={addProduct}>Add record</button>
        </div>
    )
 }
