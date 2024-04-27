import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <main className='main-bg'>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
