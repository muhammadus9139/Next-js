'use client';

import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathname = usePathname();

    console.log(pathname);

    return (
        <div className="container">

         {
            pathname !== "/login/loginstudent" ? (
                <>
                    <h1>Common Layout for login screens</h1>

                    <ul>
                        <li>
                            <Link href="/login">
                                Login page
                            </Link>
                        </li>

                        <li>
                            <Link href="/login/loginstudent">
                                Login Student
                            </Link>
                        </li>
                    </ul>
                </>
            )
             : null
        }

            <div className="content">
                {children}
            </div>

        </div>
    );
}
