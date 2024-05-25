import Footer from "@/components/footer";
import Image from "next/image";
import image from "../../../images/whyShouldYouChooseUs.png";
import tick from "../../../images/tick.png";
const About = () => {
  return (
    <>
      <section className='flex items-center mb-8 about-section p-40 about-section'>
        <div className='flex flex-col about-div'>
          <p className='theme-color text-5xl m-8'>About Us</p>
          <p className='about-para'>
            Welcome to Prestige Realty, your premier destination for all your
            real estate needs. Established in 2005, we have been dedicated to
            providing exceptional real estate services to clients throughout the
            Greater Metro Area. Our commitment to excellence and client
            satisfaction sets us apart in the industry. Our Mission At Prestige
            Realty, our mission is to simplify the real estate process for our
            clients. Whether you're buying your first home, selling a property,
            or looking for investment opportunities, our team of experienced
            professionals is here to guide you every step of the way. We strive
            to deliver personalized service and expert advice to ensure your
            real estate journey is smooth and successful. Our Team Our team of
            real estate experts brings together years of experience and a wealth
            of local knowledge. Each member of our team is dedicated to
            understanding your unique needs and delivering results that exceed
            your expectations. From our skilled agents to our support staff, we
            work collaboratively to provide a seamless experience for our
            clients. John Doe: With over 15 years of experience, John
            specializes in residential properties and has a keen eye for market
            trends. Jane Smith: A top performer in commercial real estate, Jane
            has helped numerous businesses find their perfect locations. Our
            Services We offer a comprehensive range of real estate services to
            meet your needs: Buying: We help you find the perfect property that
            fits your budget and lifestyle. Our agents are skilled negotiators
            who will ensure you get the best deal possible. Selling: Our
            marketing strategies are designed to showcase your property to the
            right buyers. We aim to sell your property quickly and at the best
            possible price. Investing: We provide expert advice on real estate
            investments, helping you make informed decisions that maximize your
            returns. Property Management: Our property management services
            ensure your investment properties are well-maintained and
            profitable. Why Choose Us? Expertise: With years of experience in
            the local market, we have the knowledge and insights to help you
            make informed decisions. Client-Centered Approach: Your satisfaction
            is our top priority. We take the time to understand your needs and
            tailor our services to meet them. Integrity: We believe in
            transparency and honesty in all our dealings. You can trust us to
            provide accurate information and sound advice. Innovative Solutions:
            We leverage the latest technology and marketing strategies to
            provide you with cutting-edge real estate solutions. Contact Us
            Ready to start your real estate journey? Get in touch with us today!
            Phone: (555) 123-4567 Email: info@prestigerealty.com Office Address:
            123 Main Street, Suite 100, Metro City, ST 12345 Follow Us:
            Facebook, Twitter, LinkedIn Thank you for considering Prestige
            Realty for your real estate needs. We look forward to working with
            you!
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center m-4 mr-24'>
            <h2 className='text-3xl theme-color'>500+</h2>
            <p className=''>Projects</p>
            <p className='w-64 m-2 text-center '>
              Over 500 luxury villas for“Home Away From Home” experience
            </p>
          </div>
          <div className='flex flex-col justify-center items-center m-4 mr-24'>
            <h2 className='text-3xl theme-color'>40+</h2>
            <p className=''>Locations</p>
            <p className='w-64 m-2 text-center '>
              Luxury villas and private holiday homes, from all across
            </p>
          </div>
          <div className='flex flex-col justify-center items-center m-4 mr-24'>
            <h2 className='text-3xl theme-color'>24/7</h2>
            <p className=''>Help</p>
            <p className='w-64 m-2 text-center '>
              24/7 Help service for all customers to guide and support
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='flex justify-evenly items-center whyChooseUs'>
          <Image
            src={image}
            alt='Image'
            className='m-8 about-image'
          />

          <div>
            <p className='text-5xl theme-color mb-4 text-size-control'>
              Why should you choose us
            </p>
            <p className='text-center'>
              Creating quality lifestyles,building stronger communities
            </p>
            <div className='flex justify-between items-center w-96 flex-wrap'>
              <div className='flex justify-center items-center m-4'>
                <Image
                  src={tick}
                  alt='Tick'
                />
                <p className='m-2'>World Class</p>
              </div>
              <div className='flex justify-center items-center m-4'>
                <Image
                  src={tick}
                  alt='Tick'
                />
                <p className='m-2'>Affordable</p>
              </div>
              <div className='flex justify-center items-center m-4'>
                <Image
                  src={tick}
                  alt='Tick'
                />
                <p className='m-2'>Trusted</p>
              </div>
              <div className='flex justify-center items-center m-4'>
                <Image
                  src={tick}
                  alt='Tick'
                />
                <p className='m-2'>Amenities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
