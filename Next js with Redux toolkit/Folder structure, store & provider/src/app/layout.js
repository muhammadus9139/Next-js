import Script from "next/script";
import Providers from "./redux/providers";

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/style.css" />
            </head>

            <body>
                <Providers>
                    {children}
                </Providers>

                <Script src="/common.js" />
            </body>
        </html>
    );
}
