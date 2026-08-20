import { NextResponse } from "next/server";

export default function middleware(request) {
    console.log("middleware");

    const pathname = new URL(request.url).pathname;

    if (pathname !== "/login") {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }
}

// only these two pages will redirect to login page, all other pages will be accessible 
// config matcher
export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*"],
};
