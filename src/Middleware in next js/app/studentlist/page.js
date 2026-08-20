'use client';
import Link from "next/link";

export default function Studentlis() {
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li><Link href="/studentlist/1">John Doe</Link> </li>
                <li><Link href="/studentlist/2">Jane Smith</Link> </li>
                <li><Link href="/studentlist/3">Bob Johnson</Link> </li>
            </ul>
        </div>
    )
}
