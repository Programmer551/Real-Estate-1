import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Search from "@/components/search";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <main className='main-bg'>
        {/* <></> */}
        <Navbar />
        <Search />
        {children}
      </main>
    </div>
  );
}
