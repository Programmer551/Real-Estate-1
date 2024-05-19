"use client";
// import ServerUploadPage from "@/components/Uploader";
import Card from "@/components/card";
import Footer from "@/components/footer";
import Loading from "@/components/loading";
import Search from "@/components/search";
import { useEffect, useState } from "react";

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

  // Properties = Properties.featuredProperties;
  return (
    <>
      {/* <Search /> */}
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
