
'use client';
import Link from "next/link";

const About=()=>{
    return(
        <div>
            <h1>About page</h1> 
            <Link href="/">Go to Home</Link>
            <br/> <br/>

            <Link href="/about/aboutstudent">Go to about student</Link>
        </div>
    )
}

export default About;
