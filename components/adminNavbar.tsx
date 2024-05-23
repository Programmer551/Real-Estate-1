"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
        </div>
        <Link
          className='btn btn-ghost text-xl'
          href={"/admin"}>
          Admin Pannel
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Users</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end mr-2'>
        <Link
          className='btn'
          href={"/"}>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
