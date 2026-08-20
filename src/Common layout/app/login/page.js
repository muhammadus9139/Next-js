'use client';
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/">Go to Home</Link>
      <br/> <br/>
      <Link href="/login/loginstudent">Go to login student</Link>
    </div>
  );
};

export default Login;
