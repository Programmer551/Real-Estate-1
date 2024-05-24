"use client";
require("dotenv").config();
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
const UserIcon = ({ classSwap }: { classSwap: string }) => {
  const { user, isLoaded } = useUser();

  return (
    <>
      {isLoaded && user ? (
        <div className={`w-10 rounded-full ml-8 ${classSwap}`}>
          <UserButton afterSignOutUrl='/' />
        </div>
      ) : (
        <button className='theme-background p-2 ml-8 sign-in'>
          <Link href='/sign-in'>SignIn</Link>
        </button>
      )}
    </>
  );
};

export default UserIcon;
