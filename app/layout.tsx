import "@/shared/styles/index.scss";
import {Poppins} from "next/font/google";
import {Contacts, Footer, Header} from "@/shared/components";
import {ReactNode} from "react";

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '600', '800'],
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} wrapper`}>
                <Header/>
                    {children}
                <Contacts/>
                <Footer/>
            </body>
        </html>
    );
}
