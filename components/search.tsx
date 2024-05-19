"use client";
import { search } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState();
  const locationRef: any = useRef();
  const priceRef: any = useRef();
  const router = useRouter();

  const fire = async (e: any) => {
    e.preventDefault();
    try {
      const price = priceRef.current.value;
      const location = locationRef.current.value;
      let upperPriceLimit;
      let lowerPriceLimit;
      if (typeof price == "string") {
        const parts = price.split("-");
        const num1: number = Number.parseInt(parts[0]);
        const num2: number = Number.parseInt(parts[1]);
        lowerPriceLimit = num1;
        upperPriceLimit = num2;
        upperPriceLimit = ++upperPriceLimit;
        lowerPriceLimit = --lowerPriceLimit;
      }
      const response = await fetch("http://localhost:3000/api/search", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          location,
          lowerPriceLimit,
          upperPriceLimit,
        }),
      });

      const data = await response.json();
      // console.log(data);

      let updated = data.properties.map((obj: any) => {
        const isVisible = obj.name.toLowerCase().includes(keyword);

        if (isVisible) {
          return obj;
        }
        return null;
      });
      // console.log(updated);
      updated = updated.filter(
        (item: any) => item !== null && typeof item === "object",
      );
      console.log(updated);
      router.push("/property");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='flex justify-center items-center flex-col h-96'>
      <h1 className='text-white text-6xl m-8'>Find Your Dream Home</h1>
      <p className='text-white text-2xl'>
        From as low as $10 per day with limited time offer discounts.
      </p>
      {/* <form className='flex bg-white h-16 justify-center items-center m-4 perfect-border'>
        <input
          type='text'
          placeholder='Enter Keyword'
          name='keyword'
          value={keyword}
          onChange={(e: any) => setKeyword(e.target.value)}
          className='input input-bordered w-full max-w-xs m-4'
        />

        <select
          className='select select-bordered w-full max-w-xs mr-4'
          name='location'
          defaultValue={"Location"}
          ref={locationRef}>
          <option disabled>Location</option>
          <option
            value='USA'
            className='p-2 selection-border'>
            USA
          </option>
          <option
            value='UK'
            className='p-2 selection-border'>
            UK
          </option>
          <option
            value='India'
            className='p-2 selection-border'>
            India
          </option>
          <option
            value='Pakistan'
            className='p-2 selection-border'>
            Pakistan
          </option>
          <option
            value='Australlia'
            className='p-2 selection-border'>
            Australlia
          </option>
          <option
            value='China'
            className='p-2 selection-border'>
            China
          </option>

          <option
            value='Turkey'
            className='p-2 selection-border'>
            Turkey
          </option>
          <option
            value='Russia'
            className='p-2 selection-border'>
            Russia
          </option>
        </select>

        <select
          className='select select-bordered w-full max-w-xs'
          name='price'
          defaultValue={"Price"}
          ref={priceRef}>
          <option disabled>Price</option>
          <option
            value='1000-20000'
            className='p-2 selection-border'>
            $1000-$20000
          </option>
          <option
            value='20000-30000'
            className='p-2 selection-border'>
            $20000-$30000
          </option>
          <option
            value='30000-40000'
            className='p-2 selection-border'>
            $30000-$40000
          </option>
          <option
            value=' 40000-50000'
            className='p-2 selection-border'>
            $40000-$50000
          </option>
          <option
            value='50000-60000'
            className='p-2 selection-border'>
            $50000-$60000
          </option>
          <option
            value='60000-70000'
            className='p-2 selection-border'>
            $60000-$70000
          </option>
          <option
            value='70000-80000'
            className='p-2 selection-border'>
            $70000-$80000
          </option>
          <option
            value='80000-90000'
            className='p-2 selection-border'>
            $80000-$90000
          </option>
          <option
            value='90000-100000'
            className='p-2 selection-border'>
            $90000-$100000
          </option>
          <option
            value='100000-200000'
            className='p-2 selection-border'>
            $100000-$200000
          </option>
        </select>

        <button
          type='submit'
          onClick={fire}
          className='btn theme-background border-orange-600 btn-error m-2'>
          Search
        </button>
      </form> */}
    </section>
  );
}
