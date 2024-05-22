"use client";
// import ServerUploadPage from "@/components/Uploader";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import Search from "@/components/search";
import { useEffect, useState, useRef } from "react";
// import { search } from "@/utils/actions";
// import Link from "next/link";
import { useRouter } from "next/navigation";
const Property = () => {
  const [Properties, setProperties]: any = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/api/getAllProperties");
      let Properties = await data.json();
      setProperties(Properties);
    };
    fetchData();
  }, []);
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
        if (typeof keyword == "string") {
          const isVisible = obj.name.toLowerCase().includes(keyword);

          if (isVisible) {
            return obj;
          }
          return null;
        } else {
          return obj;
        }
      });
      // console.log(updated);
      updated = updated.filter(
        (item: any) => item !== null && typeof item === "object",
      );
      setProperties(updated);

      // router.push("/property");
    } catch (error) {
      console.log(error);
    }
  };
  // Properties = Properties.featuredProperties;
  return (
    <>
      {/* <Search /> */}
      <div className='flex justify-center items-center flex-col'>
        <form className='flex bg-white h-16 justify-center items-center m-4 perfect-border relative bottom-28 position-control'>
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
        </form>
      </div>
      <section className='mt-48 flex flex-col items-center text-3xl'>
        <h3 className='theme-color mb-16'>Our Properties</h3>
        {/* <h1>Our Featured Properties</h1> */}
        <div className='flex flex-wrap justify-center'>
          {Properties ? (
            Properties.map((property: any) => {
              return (
                <Card
                  key={property._id}
                  {...property}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </section>
      {Properties ? <Footer /> : null}
    </>
  );
};

export default Property;
