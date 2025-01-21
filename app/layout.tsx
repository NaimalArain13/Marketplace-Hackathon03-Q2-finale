import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Component/footer";
import { Montserrat} from "next/font/google";
import CartProvider from "./context/cartContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});


export const metadata: Metadata = {
  title: "SXN-By-NASH",
  description: "Developed by NASH",
  icons: {
    icon: '/sxn-favicon.png',
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <CartProvider>
        {children}
        <Footer />
        </CartProvider> 
      </body>
    </html>
  );
}
