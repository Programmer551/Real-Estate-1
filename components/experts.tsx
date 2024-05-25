import Image from "next/image";
import agent1 from "../images/agent1.png";
import agent2 from "../images/agent2.png";
import agent3 from "../images/agent3.png";
import agent4 from "../images/agent4.png";
import call from "../images/call.png";
const Experts = () => {
  return (
    <section>
      <div className='flex justify-center items-center m-4'>
        <div className='flex justify-center flex-col items-center m-4'>
          <p className='theme-color text-2xl m-4'>Experties is Here</p>
          <p className='text-3xl m-4'>Our Exclusive Agents</p>
        </div>
      </div>
      <div className='flex justify-evenly items-center flex-wrap'>
        <div>
          <div className='flex justify-center items-center mb-4 flex-wrap'>
            <Image
              src={agent1}
              alt='Agent'
            />
            <div>
              <p className='text-2xl font-semibold'>Jenny White</p>
              <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
                <Image
                  src={call}
                  alt='Call'
                  className='m-2'
                />
                <p className='m-2'>Call : 2835828558</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-wrap '>
            <Image
              src={agent3}
              alt='Agent'
            />
            <div>
              <p className='text-2xl font-semibold'>Merry Rose</p>
              <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
                <Image
                  src={call}
                  alt='Call'
                  className='m-2'
                />
                <p className='m-2'>Call : 2835828558</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center mb-4 flex-wrap'>
            <Image
              src={agent2}
              alt='Agent'
            />
            <div>
              <p className='text-2xl font-semibold'>Jhon White</p>
              <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
                <Image
                  src={call}
                  alt='Call'
                  className='m-2'
                />
                <p className='m-2'>Call : 2835828558</p>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center flex-wrap '>
            <Image
              src={agent4}
              alt='Agent'
            />
            <div>
              <p className='text-2xl font-semibold'>Alex Roy</p>
              <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
                <Image
                  src={call}
                  alt='Call'
                  className='m-2'
                />
                <p className='m-2'>Call : 2835828558</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
