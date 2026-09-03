'use client'
import { useState } from "react";
import "../../style.css";

export default function Page() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState(""); 

    async function adduser() { 
        let response = await fetch("http://localhost:3000/api/users", 
        { 
            method: "POST", 
            body: JSON.stringify({ name, age, email })
         });

         let data = await response.json(); 
         if(response.status === 200){
            alert(data.message);
         }
         else{
            alert(data.message);
         }
         console.log(data); 
    }
    

    return (<div className="container"> <div className="form-box"> <h1>Add User</h1>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" id="name" />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" id="age" />
        <input type="email" value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" id="email" />

        <button onClick={adduser}>Add User</button>
    </div>
    </div>
    );
}
