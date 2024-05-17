import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Real Estate",
  description: "This is a real estate website",
};
// import Navbar from "../components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        data-theme='light'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
