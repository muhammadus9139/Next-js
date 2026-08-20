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
            // Linking to login page using next js link component <br/>
            <Link href="/login">Go to login</Link>
            <br />
            <Link href="/about">Go to about</Link>
            <br/>
            <br/>

            // Navigation using userouter hook <br/>
            
           

          <button onClick={()=>navigate("/login")}>Go to login page</button> <br/>
          <button onClick={()=>navigate("/about")}>Go to about page</button>
        </main>
    );
}

