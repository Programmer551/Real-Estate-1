// "use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Search from "@/components/search";
// import React, { useState } from "react";
// import { createContext, useContext } from "react";
// const SidebarContext = createContext();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [state, setState] = useState();
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
