'use client'; // client components like onclick ko use krny k liye use client likhna ha q k ye client side components hain or next js server pr b render hota ha
import { useState } from "react";

export default function Home() {

    const [name,setname]=useState("ali");
    const apple = () => {
        setname("ahmad");
    }

    const Innercomp=()=>{
        return(
            <h1>inner component</h1>
        )
    }

    return (
        <main>
            <h1>Home page {name}</h1>
            <button onClick={()=>apple()}>click me</button>
            <Innercomp/> // component call
            {Innercomp()} // function call
        </main>
    );
}

