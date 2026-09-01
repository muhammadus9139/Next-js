import Script from "next/script";

// export const metadata = {
//   title: 'Next.js App',
//   description: 'Fancy Next.js app',
// };

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/style.css" />
            </head>

            <body>
                {children}
                
                <Script src="/common.js" />
            </body>
        </html>
    );
}
