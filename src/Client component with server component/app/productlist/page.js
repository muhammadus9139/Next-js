'use client'; // client components like onclick ko use krny k liye use client likhna ha q k ye client side components hain or next js server pr b render hota ha
import { useState } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter(); // for button click navigation

      function navigate(name) {
          router.push(name)
     }

    return (
        <main>
            <h1>Root page</h1> 
            <Link href="/productlist">Go to product list</Link>
        </main>
    );
}

