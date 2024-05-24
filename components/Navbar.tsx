"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/Vector.png";
import UserIcon from "./UserIcon";
import Link from "next/link";

import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  const [navTag, setNavTag] = useState("");
  const [linksList, setLinksList] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const [swapping, setSwapping] = useState("swapping");
  let [i, setI] = useState(0);
  const fire = () => {
    if (i == 0) {
      setNavTag("nav-tag");
      setLinksList("links-list");
      setUserIcon("userIcon");
      setSwapping("");

      setI(i++);
      return;
    } else if (i == 1) {
      setNavTag("");
      setLinksList("");
      setUserIcon("");

      setSwapping("swapping");
      setI(i--);
      return;
    }
  };
  return (
    <>
      <nav
        className={`bg-white m-8 p-4 flex items-center justify-between ${navTag}`}>
        <label
          className={`btn btn-circle swap swap-rotate hamburger hidden hamburger`}
          onClick={fire}>
          <input type='checkbox' />
          <svg
            className='swap-off fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'>
            <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
          </svg>

          {/* close icon */}
          <svg
            className='swap-on fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'>
            <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
          </svg>
        </label>

        <Link
          href={"/"}
          className={`${swapping}`}>
          <div className='flex items-center cursor-pointer'>
            <Image
              src={Logo}
              width={30}
              height={30}
              alt='This is the logo'
            />
            <h2 className='text-cyan-700 rounded-lg border-0	border-solid ml-2 '>
              Easy Housing
            </h2>
          </div>
        </Link>
        <div className={`flex items-center ${swapping} ${linksList}`}>
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
            href={"/contact"}
            className={`m-4 ${pathname == "/contact" ? "active" : ""}`}>
            Contact us
          </Link>
          <UserIcon classSwap={userIcon} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
