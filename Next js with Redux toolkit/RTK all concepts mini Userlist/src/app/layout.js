import Providers from "./redux/providers";
import "../style.css";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
