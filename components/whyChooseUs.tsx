import Image from "next/image";
import features1 from "../images/features1.png";
import features2 from "../images/features2.png";
import features3 from "../images/features3.png";
import features4 from "../images/features4.png";
const WhyChooseUs = () => {
  return (
    <section className='flex items-center different-background flex-col'>
      <p className='text-white text-3xl m-4'>Why Choose Us?</p>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
          <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
            <div>
              <Image
                src={features1}
                alt='Shoes'
                className='align-middle'
              />
            </div>
          </div>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Trusted by Thousands</h2>
            <p className='text-justify m-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              nostrum exercitationem architecto possimus quis obcaecati nulla
              tempore natus, ea amet non, et velit.
            </p>
          </div>
        </div>

        <div className='flex'>
          <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
            <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
              <div>
                <Image
                  src={features2}
                  alt='Shoes'
                  className='align-middle'
                />
              </div>
            </div>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>Wide Range of Properties</h2>
              <p className='text-justify m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nostrum exercitationem architecto possimus quis obcaecati nulla
                tempore natus, ea amet non, et velit.
              </p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
            <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
              <div>
                <Image
                  src={features3}
                  alt='Shoes'
                  className='align-middle'
                />
              </div>
            </div>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>Finance Made Easy</h2>
              <p className='text-justify m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nostrum exercitationem architecto possimus quis obcaecati nulla
                tempore natus, ea amet non, et velit.
              </p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
            <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
              <div>
                <Image
                  src={features4}
                  alt='Shoes'
                  className='align-middle'
                />
              </div>
            </div>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>Life Time Assistance</h2>
              <p className='text-justify m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nostrum exercitationem architecto possimus quis obcaecati nulla
                tempore natus, ea amet non, et velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
