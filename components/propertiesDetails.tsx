const PropertiesDetails = ({
  details,
  name,
  price,
  forWhat,
  Img,
}: {
  details: string;
  name: string;
  forWhat: string;
  price: number;
  Img: string;
}) => {
  return (
    <section className='flex justify-center items-center properties-section'>
      <div className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={Img}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <p className='theme-color text-3xl title-font font-medium mb-4'>
                {name}
              </p>

              <p className='leading-relaxed'>{details}</p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesDetails;
