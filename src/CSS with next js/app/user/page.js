'use client';
import { useState } from "react";
export default function User() {

    const [style, setStyle] = useState({background:"green"});

    return (
        <div>
            <h1 style={style}>Page</h1>
            <button onClick={() => setStyle({background:"brown"})}>Change Style</button>
        </div>
    );
}
