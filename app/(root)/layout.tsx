// "use client";
import Navbar from "@/components/Navbar";

import Search from "@/components/search";

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
