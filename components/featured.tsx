// "use client";
import Card from "./card";
// import { useEffect, useState } from "react";
const Featured = async () => {
  const data = await fetch("http://localhost:3000/api/getFeatured");
  let featuredProperties = await data.json();
  featuredProperties = featuredProperties.featuredProperties;

  return (
    <>
      <section className='mt-48 flex flex-col items-center text-3xl'>
        <h3 className='theme-color mb-16'>Our Properties</h3>
        <h1>Our Featured Properties</h1>
        <div className='flex flex-wrap justify-center'>
          {featuredProperties.map((property: any) => {
            return (
              <Card
                key={property._id}
                {...property}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Featured;
