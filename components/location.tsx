import Image from "next/image";
import india from "../images/india.jpg";
import pakistan from "../images/pakistan.jpg";
import australlia from "../images/aurtrallia.jpg";
import usa from "../images/usa.jpg";
import china from "../images/china.jpg";
import russia from "../images/russia.jpg";
const Location = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='flex justify-center'>
        <h1 className='theme-color text-3xl'>Locations</h1>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16  theme-background good-border'>
          {/* <figure> */}
          <Image
            src={usa}
            className='bg-cover'
            width={400}
            alt='Shoes'
          />
          {/* </figure> */}
          <div className='card-body'>
            <h2 className='card-title'>USA</h2>
          </div>
        </div>
        <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
          {/* <figure> */}
          <Image
            src={china}
            className='bg-cover'
            width={400}
            alt='Shoes'
          />
          {/* </figure> */}
          <div className='card-body'>
            <h2 className='card-title'>China</h2>
          </div>
        </div>
        <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
          {/* <figure> */}
          <Image
            src={russia}
            className='bg-cover'
            width={400}
            alt='Shoes'
          />
          {/* </figure> */}
          <div className='card-body'>
            <h2 className='card-title'>Russia</h2>
          </div>
        </div>
        <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
          {/* <figure> */}
          <Image
            src={pakistan}
            className='bg-cover'
            width={400}
            alt='Shoes'
          />
          {/* </figure> */}
          <div className='card-body'>
            <h2 className='card-title'>Pakistan</h2>
          </div>
        </div>
        <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
          {/* <figure> */}
          <Image
            src={australlia}
            className='bg-cover'
            width={400}
            alt='Shoes'
          />
          {/* </figure> */}
          <div className='card-body'>
            <h2 className='card-title'>Australlia</h2>
          </div>
        </div>
        <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
          {/* <figure> */}
          <Image
            src={india}
            className='bg-cover'
            width={400}
            alt='Shoes'
          />
          {/* </figure> */}
          <div className='card-body'>
            <h2 className='card-title'>India</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
