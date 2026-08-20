'use client';
import Link from "next/link";
import {useRouter} from "next/navigation";

const aboutstudent = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About Student</h1>
            <Link href="/about">Go to about</Link>
            <br/> <br/>
            <button onClick={()=>router.push("/about")}>Go to about page</button>   
        </div>
    )
}

export default aboutstudent;
