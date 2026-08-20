'use client'
import { use } from "react";

export default function Study({ params }) {
   
    const { lecture } = use(params);
    console.log(lecture);
    
    return (
        <div>
            <h1>Lecture {lecture}</h1> 
        </div>
    );
}
