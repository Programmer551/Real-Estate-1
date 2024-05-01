// import { testing } from "@/utils/actions";
import Uploader from "../../components/Uploader";
export default function Home() {
  // testing();
  return (
    <section className='flex justify-center items-center flex-col h-96'>
      <h1 className='text-white text-6xl m-8'>Find Your Dream Home</h1>
      <p className='text-white text-2xl'>
        From as low as $10 per day with limited time offer discounts.
      </p>
      <form className='flex bg-white h-16 justify-center items-center m-4 perfect-border'>
        <input
          type='text'
          className='selection-border p-2 w-46 m-4 h-10'
          placeholder='Enter Keyword'
        />
        <div className='m-4'>
          <select className='p-2 selection-border w-46'>
            {/* <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Location' />
            </SelectTrigger>
            <SelectContent> */}
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
            {/* </SelectContent> */}
          </select>
        </div>
        <select className='p-2 selection-border w-46 m-4'>
          {/* <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Price' />
          </SelectTrigger>
          <SelectContent> */}
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
          {/* </SelectContent> */}
        </select>
        <button
          type='submit'
          className='theme-background p-2 px-4 m-4 perfect-border'>
          Search
        </button>
      </form>
      <Uploader />
    </section>
  );
}
