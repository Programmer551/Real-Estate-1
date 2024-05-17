// import { testing } from "@/utils/actions";
import Featured from "@/components/featured";
import Uploader from "../../components/Uploader";
import Location from "@/components/location";
import WhyChooseUs from "@/components/whyChooseUs";
import Experts from "@/components/experts";
import SemiFooter from "@/components/semiFooter";
export default function Home() {
  // testing();
  return (
    <>
      {/* <Navbar /> */}
      <section className='flex justify-center items-center flex-col h-96'>
        <h1 className='text-white text-6xl m-8'>Find Your Dream Home</h1>
        <p className='text-white text-2xl'>
          From as low as $10 per day with limited time offer discounts.
        </p>
        <form className='flex bg-white h-16 justify-center items-center m-4 perfect-border'>
          <input
            type='text'
            placeholder='Enter Keyword'
            className='input input-bordered w-full max-w-xs m-4'
          />

          <select className='select select-bordered w-full max-w-xs mr-4'>
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

          <select className='select select-bordered w-full max-w-xs'>
            <option
              disabled
              selected>
              Price
            </option>
            <option
              value='$1000-$15000'
              className='p-2 selection-border'>
              $1000-$15000
            </option>
            <option
              value='$15000-$20000'
              className='p-2 selection-border'>
              $15000-$20000
            </option>
            <option
              value='$20000-$25000'
              className='p-2 selection-border'>
              $20000-$25000
            </option>
            <option
              value='$25000-$30000'
              className='p-2 selection-border'>
              $25000-$30000
            </option>
            <option
              value='$30000-$35000'
              className='p-2 selection-border'>
              $30000-$35000
            </option>
            <option
              value='$35000-$40000'
              className='p-2 selection-border'>
              $35000-$40000
            </option>
            <option
              value='$40000-$45000'
              className='p-2 selection-border'>
              $40000-$45000
            </option>
            <option
              value='$45000-$50000'
              className='p-2 selection-border'>
              $45000-$50000
            </option>
          </select>
          <button
            type='submit'
            className='btn theme-background border-orange-600 btn-error m-2'>
            Search
          </button>
        </form>
        {/* <Uploader /> */}
      </section>

      <Featured />
      <Location />
      <WhyChooseUs />
      <Experts />
      <SemiFooter />
    </>
  );
}
