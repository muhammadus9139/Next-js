'use client';
import { addUser } from "../redux/slice";
import "./AddUsers.css";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function AddUsers() {

    const [name,setname] = useState("");
    const dispatch = useDispatch();

    const userDispatch = ()=>{
        console.log(name);
        
        if (!name.trim()) {
            return;
        }

        dispatch(addUser(name.trim()));
        setname("");
    }


    return (
        <div className="user-container">
            <h2>User List</h2>

            <div className="user-form">
                <input
                    type="text"
                    value={name}
                    placeholder="Add new users"
                    suppressHydrationWarning
                    onChange={(e)=>setname(e.target.value)}
                />

                <button onClick={userDispatch} suppressHydrationWarning>Add</button> <br/><br/>
                <Link href="/removeUser">Remove User</Link>
                <Link href="/todo">Todo List</Link>
                <Link href="/api-users">API Users</Link>
            </div>
        </div>
    );
}
