'use client';

import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
    return (
        <div className="container">
            <h1>Common Layout for login screens</h1>

            <ul>
                <li>
                    <Link href="/login">Login page</Link>
                </li>

                <li>
                    <Link href="/login/loginstudent">Login Student</Link>
                </li>
            </ul>

            <div className="content">
                {children}
            </div>
        </div>
    );
}
