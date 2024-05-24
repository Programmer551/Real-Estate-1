import Footer from "@/components/footer";
import { formSubmit } from "@/utils/actions";

const Contact = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-72 flex-col'>
        {/* <p className='theme-color text-4xl'>Contact Us</p> */}
        <section className='text-gray-600 body-font relative'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 theme-color'>
                Contact Us
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                If you have any question or query please fill this Form
              </p>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <form
                className='flex flex-wrap -m-2'
                action={formSubmit}>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='name'
                      className='leading-7 text-sm text-gray-600'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='leading-7 text-sm text-gray-600'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='leading-7 text-sm text-gray-600'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                      data-gramm='false'
                      wt-ignore-input='true'></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button
                    className='flex mx-auto text-white px-8  rounded text-lg btn btn-error theme-background'
                    type='submit'>
                    Submit
                  </button>
                </div>
                <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                  <a className='text-indigo-500'>info@example.com</a>
                  <p className='leading-normal my-5'>
                    121 King St, Melbourne den 3000, Australia
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
