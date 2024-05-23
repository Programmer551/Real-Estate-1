import Image from "next/image";
import findYourDreamHome from "../images/FindYourDreamHome.png";
import Link from "next/link";
const SemiFooter = () => {
  return (
    <section>
      <div className='flex justify-center items-center flex-col mt-16'>
        <p className='text-3xl m-4'>Find Your Dream Home Today</p>
        <Link href={"/contact"}>
          <button className='btn theme-background btn-error'>Contact Us</button>
        </Link>
        <Image
          src={findYourDreamHome}
          alt='Find Your Dream Home'
          width={1900}
        />
      </div>
    </section>
  );
};

export default SemiFooter;
