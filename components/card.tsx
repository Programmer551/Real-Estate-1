import Image from "next/image";
import locationLogo from "../images/location.jpg";
import Link from "next/link";
const Card = (params: any) => {
  const { Img, name, price, forWhat, location, _id } = params;

  return (
    <Link href={`/properties/${_id}`}>
      <div className='card w-96 change-width bg-base-100 shadow-xl m-16 margin-control'>
        <figure className='max-h-60 overflow-hidden	'>
          <img
            src={Img}
            // className='bg-cover'
            alt={name}
            width={400}
            height={400}
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-2xl'>
            {name}
            <div className='theme-background text-white perfect-border px-2'>{`For ${forWhat}`}</div>
          </h2>
          <p className='mt-4 theme-color'>${price}</p>
          <div className='flex justify-center items-center'>
            <Image
              src={locationLogo}
              alt='Location Image'
              className='opacity-20'
              height={50}
              width={50}
            />
            <p className='text-lg'>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
