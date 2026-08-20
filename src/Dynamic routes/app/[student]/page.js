'use client';

import Link from "next/link";
import { use } from "react";

export default function Studentlist({ params }) {

    const { student } = use(params);

    console.log(student);

    return (
        <div>
            <h1>Student detail</h1>
            <h3>{student}</h3>
        </div>
    );
}
