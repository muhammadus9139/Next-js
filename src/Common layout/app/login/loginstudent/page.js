'use client';
import Link from "next/link";
import {useRouter} from "next/navigation";

const loginstudent = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Login Student</h1>
            <Link href="/login">Go to login</Link>
            <br/> <br/>
            <button onClick={()=>router.push("/login")}>Go to login page</button>
        </div>
    )
}

export default loginstudent;
