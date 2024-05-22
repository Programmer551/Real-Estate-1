import { getFeatured } from "@/utils/actions";
import Card from "./card";

const Featured = async () => {
  let featuredProperties = await getFeatured();
  return (
    <>
      <section className='mt-48 flex flex-col items-center text-3xl'>
        <h3 className='theme-color mb-16'>Our Properties</h3>
        <p>Our Featured Properties</p>
        <div className='flex flex-wrap justify-center'>
          {featuredProperties.map((property: any) => {
            const { Img, name, price, forWhat, location, _id } = property;
            return (
              <Card
                key={property._id}
                name={name}
                Img={Img}
                price={price}
                location={location}
                forWhat={forWhat}
                _id={_id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Featured;
