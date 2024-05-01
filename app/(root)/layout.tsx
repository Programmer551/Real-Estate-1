import Navbar from "@/components/Navbar";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <main className='main-bg'>
        <></>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
