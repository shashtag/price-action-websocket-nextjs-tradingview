import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Price Action WebSockets Next.js tradingview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-700  text-white`}>
        <Navbar />
        <div className='px-4 pt-4 min-h-screen'>{children}</div>
      </body>
    </html>
  );
}
