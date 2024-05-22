"use client";
// import { search } from "@/utils/actions";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Search() {
  return (
    <section className='flex justify-center items-center flex-col h-96'>
      <p className='text-white text-6xl m-8'>Find Your Dream Home</p>
      <p className='text-white text-2xl'>
        From as low as $10 per day with limited time offer discounts.
      </p>
    </section>
  );
}
