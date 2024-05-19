"use client";
import React from "react";
import Image from "next/image";
import Logo from "../images/Vector.png";
import UserIcon from "./UserIcon";
import Link from "next/link";

import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='bg-white m-8 p-4 flex items-center justify-between'>
      {/* <UserIcon /> */}
      <Link href={"/"}>
        <div className='flex items-center cursor-pointer'>
          <Image
            src={Logo}
            width={30}
            height={30}
            alt='This is the logo'></Image>
          <h2 className='text-cyan-700 rounded-lg border-0	border-solid ml-2 '>
            Easy Housing
          </h2>
        </div>
      </Link>
      <div className='flex items-center'>
        <Link
          href={"/"}
          className={`m-4 ${pathname == "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          href={"/about"}
          className={`m-4 ${pathname == "/about" ? "active" : ""}`}>
          About
        </Link>
        <Link
          href={"/property"}
          className={`m-4 ${pathname == "/property" ? "active" : ""}`}>
          Property
        </Link>
        <Link
          href={"/blog"}
          className={`m-4 ${pathname == "/blog" ? "active" : ""}`}>
          Blog
        </Link>
        <Link
          href={"/contact"}
          className={`m-4 ${pathname == "/contact" ? "active" : ""}`}>
          Contact us
        </Link>
        <UserIcon />
      </div>
    </nav>
  );
};

export default Navbar;
