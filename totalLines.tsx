// import { SignIn } from "@clerk/nextjs";

// const Page = () => {
//   return <SignIn />;
// };

// export default Page;
// import { SignUp } from "@clerk/nextjs";

// const Page = () => {
//   return <SignUp />;
// };

// export default Page;
// const Layout = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return (
//     <main>
//       <div className='flex justify-center items-center h-screen'>
//         {children}
//       </div>
//     </main>
//   );
// };
// export default Layout;
// // "use client";
// import Navbar from "@/components/Navbar";

// import Search from "@/components/search";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className='flex h-screen flex-col'>
//       <main className='main-bg'>
//         {/* <></> */}
//         <Navbar />
//         <Search />
//         {children}
//       </main>
//     </div>
//   );
// }
// import Search from "../../components/search";
// import Featured from "@/components/featured";
// import Uploader from "../../components/Uploader";
// import Location from "@/components/location";
// import WhyChooseUs from "@/components/whyChooseUs";
// import Experts from "@/components/experts";
// import SemiFooter from "@/components/semiFooter";
// import Footer from "@/components/footer";
// export default function Home() {
//   return (
//     <>
//       <Featured />
//       <Location />
//       <WhyChooseUs />
//       <Experts />
//       <SemiFooter />
//       <Footer />
//     </>
//   );
// }
// import Footer from "@/components/footer";
// import Image from "next/image";
// import image from "../../../images/whyShouldYouChooseUs.png";
// import tick from "../../../images/tick.png";
// const About = () => {
//   return (
//     <>
//       <section className='flex items-center mb-8 about-section p-40 about-section'>
//         <div className='flex flex-col about-div'>
//           <p className='theme-color text-5xl m-8'>About Us</p>
//           <p className='about-para'>
//             Welcome to Prestige Realty, your premier destination for all your
//             real estate needs. Established in 2005, we have been dedicated to
//             providing exceptional real estate services to clients throughout the
//             Greater Metro Area. Our commitment to excellence and client
//             satisfaction sets us apart in the industry. Our Mission At Prestige
//             Realty, our mission is to simplify the real estate process for our
//             clients. Whether you're buying your first home, selling a property,
//             or looking for investment opportunities, our team of experienced
//             professionals is here to guide you every step of the way. We strive
//             to deliver personalized service and expert advice to ensure your
//             real estate journey is smooth and successful. Our Team Our team of
//             real estate experts brings together years of experience and a wealth
//             of local knowledge. Each member of our team is dedicated to
//             understanding your unique needs and delivering results that exceed
//             your expectations. From our skilled agents to our support staff, we
//             work collaboratively to provide a seamless experience for our
//             clients. John Doe: With over 15 years of experience, John
//             specializes in residential properties and has a keen eye for market
//             trends. Jane Smith: A top performer in commercial real estate, Jane
//             has helped numerous businesses find their perfect locations. Our
//             Services We offer a comprehensive range of real estate services to
//             meet your needs: Buying: We help you find the perfect property that
//             fits your budget and lifestyle. Our agents are skilled negotiators
//             who will ensure you get the best deal possible. Selling: Our
//             marketing strategies are designed to showcase your property to the
//             right buyers. We aim to sell your property quickly and at the best
//             possible price. Investing: We provide expert advice on real estate
//             investments, helping you make informed decisions that maximize your
//             returns. Property Management: Our property management services
//             ensure your investment properties are well-maintained and
//             profitable. Why Choose Us? Expertise: With years of experience in
//             the local market, we have the knowledge and insights to help you
//             make informed decisions. Client-Centered Approach: Your satisfaction
//             is our top priority. We take the time to understand your needs and
//             tailor our services to meet them. Integrity: We believe in
//             transparency and honesty in all our dealings. You can trust us to
//             provide accurate information and sound advice. Innovative Solutions:
//             We leverage the latest technology and marketing strategies to
//             provide you with cutting-edge real estate solutions. Contact Us
//             Ready to start your real estate journey? Get in touch with us today!
//             Phone: (555) 123-4567 Email: info@prestigerealty.com Office Address:
//             123 Main Street, Suite 100, Metro City, ST 12345 Follow Us:
//             Facebook, Twitter, LinkedIn Thank you for considering Prestige
//             Realty for your real estate needs. We look forward to working with
//             you!
//           </p>
//         </div>
//         <div className='flex flex-col justify-center items-center'>
//           <div className='flex flex-col justify-center items-center m-4 mr-24'>
//             <h2 className='text-3xl theme-color'>500+</h2>
//             <p className=''>Projects</p>
//             <p className='w-64 m-2 text-center '>
//               Over 500 luxury villas for“Home Away From Home” experience
//             </p>
//           </div>
//           <div className='flex flex-col justify-center items-center m-4 mr-24'>
//             <h2 className='text-3xl theme-color'>40+</h2>
//             <p className=''>Locations</p>
//             <p className='w-64 m-2 text-center '>
//               Luxury villas and private holiday homes, from all across
//             </p>
//           </div>
//           <div className='flex flex-col justify-center items-center m-4 mr-24'>
//             <h2 className='text-3xl theme-color'>24/7</h2>
//             <p className=''>Help</p>
//             <p className='w-64 m-2 text-center '>
//               24/7 Help service for all customers to guide and support
//             </p>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className='flex justify-evenly items-center whyChooseUs'>
//           <Image
//             src={image}
//             alt='Image'
//             className='m-8 about-image'
//           />

//           <div>
//             <p className='text-5xl theme-color mb-4 text-size-control'>
//               Why should you choose us
//             </p>
//             <p className='text-center'>
//               Creating quality lifestyles,building stronger communities
//             </p>
//             <div className='flex justify-between items-center w-96 flex-wrap'>
//               <div className='flex justify-center items-center m-4'>
//                 <Image
//                   src={tick}
//                   alt='Tick'
//                 />
//                 <p className='m-2'>World Class</p>
//               </div>
//               <div className='flex justify-center items-center m-4'>
//                 <Image
//                   src={tick}
//                   alt='Tick'
//                 />
//                 <p className='m-2'>Affordable</p>
//               </div>
//               <div className='flex justify-center items-center m-4'>
//                 <Image
//                   src={tick}
//                   alt='Tick'
//                 />
//                 <p className='m-2'>Trusted</p>
//               </div>
//               <div className='flex justify-center items-center m-4'>
//                 <Image
//                   src={tick}
//                   alt='Tick'
//                 />
//                 <p className='m-2'>Amenities</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default About;
// import Footer from "@/components/footer";
// import { formSubmit } from "@/utils/actions";

// const Contact = () => {
//   return (
//     <>
//       <div className='flex justify-center items-center mt-72 flex-col'>
//         {/* <p className='theme-color text-4xl'>Contact Us</p> */}
//         <section className='text-gray-600 body-font relative'>
//           <div className='container px-5 py-24 mx-auto'>
//             <div className='flex flex-col text-center w-full mb-12'>
//               <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 theme-color'>
//                 Contact Us
//               </h1>
//               <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
//                 If you have any question or query please fill this Form
//               </p>
//             </div>
//             <div className='lg:w-1/2 md:w-2/3 mx-auto'>
//               <form
//                 className='flex flex-wrap -m-2'
//                 action={formSubmit}>
//                 <div className='p-2 w-1/2'>
//                   <div className='relative'>
//                     <label
//                       htmlFor='name'
//                       className='leading-7 text-sm text-gray-600'>
//                       Name
//                     </label>
//                     <input
//                       type='text'
//                       id='name'
//                       name='name'
//                       className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
//                     />
//                   </div>
//                 </div>
//                 <div className='p-2 w-1/2'>
//                   <div className='relative'>
//                     <label
//                       htmlFor='email'
//                       className='leading-7 text-sm text-gray-600'>
//                       Email
//                     </label>
//                     <input
//                       type='email'
//                       id='email'
//                       name='email'
//                       className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
//                     />
//                   </div>
//                 </div>
//                 <div className='p-2 w-full'>
//                   <div className='relative'>
//                     <label
//                       htmlFor='message'
//                       className='leading-7 text-sm text-gray-600'>
//                       Message
//                     </label>
//                     <textarea
//                       id='message'
//                       name='message'
//                       className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
//                       data-gramm='false'
//                       wt-ignore-input='true'></textarea>
//                   </div>
//                 </div>
//                 <div className='p-2 w-full'>
//                   <button
//                     className='flex mx-auto text-white px-8  rounded text-lg btn btn-error theme-background'
//                     type='submit'>
//                     Submit
//                   </button>
//                 </div>
//                 <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
//                   <a className='text-indigo-500'>info@example.com</a>
//                   <p className='leading-normal my-5'>
//                     121 King St, Melbourne den 3000, Australia
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Contact;
// import Footer from "@/components/footer";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className=''>
//       {children}
//       <Footer />
//     </div>
//   );
// }
// "use client";

// import Card from "@/components/card";

// import Loading from "@/components/loading";

// import { useEffect, useState, useRef } from "react";

// // import { useRouter } from "next/navigation";
// const Property = () => {
//   const [Properties, setProperties]: any = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(
//         "https://real-estate-ten-nu.vercel.app/api/getAllProperties",
//       );
//       let Properties = await data.json();
//       setProperties(Properties);
//     };
//     fetchData();
//   }, []);
//   const [keyword, setKeyword] = useState();
//   const locationRef: any = useRef();
//   const priceRef: any = useRef();
//   // const router = useRouter();

//   const fire = async (e: any) => {
//     e.preventDefault();
//     try {
//       const price = priceRef.current.value;
//       const location = locationRef.current.value;
//       let upperPriceLimit;
//       let lowerPriceLimit;
//       if (typeof price == "string") {
//         const parts = price.split("-");
//         const num1: number = Number.parseInt(parts[0]);
//         const num2: number = Number.parseInt(parts[1]);
//         lowerPriceLimit = num1;
//         upperPriceLimit = num2;
//         upperPriceLimit = ++upperPriceLimit;
//         lowerPriceLimit = --lowerPriceLimit;
//       }
//       const response = await fetch(
//         "https://real-estate-ten-nu.vercel.app/api/search",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify({
//             location,
//             lowerPriceLimit,
//             upperPriceLimit,
//           }),
//         },
//       );

//       const data = await response.json();
//       // console.log(data);

//       let updated = data.properties.map((obj: any) => {
//         if (typeof keyword == "string") {
//           const isVisible = obj.name.toLowerCase().includes(keyword);

//           if (isVisible) {
//             return obj;
//           }
//           return null;
//         } else {
//           return obj;
//         }
//       });
//       updated = updated.filter(
//         (item: any) => item !== null && typeof item === "object",
//       );
//       setProperties(updated);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <div className='flex justify-center items-center flex-col'>
//         <form className='flex bg-white h-16 justify-center items-center m-4 perfect-border relative bottom-28 position-control'>
//           <input
//             type='text'
//             placeholder='Enter Keyword'
//             name='keyword'
//             value={keyword}
//             onChange={(e: any) => setKeyword(e.target.value)}
//             className='input input-bordered w-full max-w-xs m-4'
//           />

//           <select
//             className='select select-bordered w-full max-w-xs mr-4'
//             name='location'
//             defaultValue={"Location"}
//             ref={locationRef}>
//             <option disabled>Location</option>
//             <option
//               value='USA'
//               className='p-2 selection-border'>
//               USA
//             </option>
//             <option
//               value='UK'
//               className='p-2 selection-border'>
//               UK
//             </option>
//             <option
//               value='India'
//               className='p-2 selection-border'>
//               India
//             </option>
//             <option
//               value='Pakistan'
//               className='p-2 selection-border'>
//               Pakistan
//             </option>
//             <option
//               value='Australlia'
//               className='p-2 selection-border'>
//               Australlia
//             </option>
//             <option
//               value='China'
//               className='p-2 selection-border'>
//               China
//             </option>

//             <option
//               value='Turkey'
//               className='p-2 selection-border'>
//               Turkey
//             </option>
//             <option
//               value='Russia'
//               className='p-2 selection-border'>
//               Russia
//             </option>
//           </select>

//           <select
//             className='select select-bordered w-full max-w-xs'
//             name='price'
//             defaultValue={"Price"}
//             ref={priceRef}>
//             <option disabled>Price</option>
//             <option
//               value='1000-20000'
//               className='p-2 selection-border'>
//               $1000-$20000
//             </option>
//             <option
//               value='20000-30000'
//               className='p-2 selection-border'>
//               $20000-$30000
//             </option>
//             <option
//               value='30000-40000'
//               className='p-2 selection-border'>
//               $30000-$40000
//             </option>
//             <option
//               value=' 40000-50000'
//               className='p-2 selection-border'>
//               $40000-$50000
//             </option>
//             <option
//               value='50000-60000'
//               className='p-2 selection-border'>
//               $50000-$60000
//             </option>
//             <option
//               value='60000-70000'
//               className='p-2 selection-border'>
//               $60000-$70000
//             </option>
//             <option
//               value='70000-80000'
//               className='p-2 selection-border'>
//               $70000-$80000
//             </option>
//             <option
//               value='80000-90000'
//               className='p-2 selection-border'>
//               $80000-$90000
//             </option>
//             <option
//               value='90000-100000'
//               className='p-2 selection-border'>
//               $90000-$100000
//             </option>
//             <option
//               value='100000-200000'
//               className='p-2 selection-border'>
//               $100000-$200000
//             </option>
//           </select>

//           <button
//             type='submit'
//             onClick={fire}
//             className='btn theme-background border-orange-600 btn-error m-2'>
//             Search
//           </button>
//         </form>
//       </div>
//       <section className='mt-48 flex flex-col items-center text-3xl'>
//         <h3 className='theme-color mb-16'>Our Properties</h3>
//         {/* <p>Our Featured Properties</p> */}
//         <div className='flex flex-wrap justify-center'>
//           {Properties ? (
//             Properties.map((property: any) => {
//               return (
//                 <Card
//                   key={property._id}
//                   {...property}
//                 />
//               );
//             })
//           ) : (
//             <Loading />
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Property;
// import PropertiesDetails from "@/components/propertiesDetails";

// const Properties = async ({ params }: { params: { id: string } }) => {
//   const id = params.id;
//   const response = await fetch(
//     "https://real-estate-ten-nu.vercel.app/api/getSingleProperty",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id,
//       }),
//     },
//   );
//   const data = await response.json();
//   console.log(data);
//   return <PropertiesDetails {...data.data} />;
// };

// export default Properties;
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// .main-bg {
//   background: url("../images/buildings_image.jfif") no-repeat;
//   background-size: cover;
//   /* width: 100vw; */
//   height: 70vh;
// }
// .active {
//   /* color: red; */
//   /* text-decoration: underline orange; */
//   border: 2px solid red;
//   padding: 5px;
//   transition-property: all;
//   transition-duration: 0.1s;
//   border-radius: 5px;
//   background-color: #ff5a3c;
// }
// .theme-background {
//   background-color: #ff5a3c;
// }
// .sign-in {
//   border: 2px solid #ff5a3c;
//   border-radius: 5px;
// }
// nav {
//   border: 2px solid;
//   border-radius: 5px;
// }
// .selection-border {
//   border: 2px solid;
//   border-radius: 5px;
//   opacity: 0.5;
// }
// .perfect-border {
//   border: 0px solid;
//   border-radius: 5px;
// }
// .theme-color {
//   color: #ff5a3c;
// }

// .good-border {
//   border: 10px solid black;
// }
// .different-background {
//   background-color: #0b2c3d;
// }
// .background-circle {
//   background-image: url("../images/backgroundCircle.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 150px;
//   width: 150px;
// }
// .normal-background {
//   border: 2px solid #ff5a3c;
//   border-radius: 5px;
// }

// .about-div {
//   width: 1000px;
// }
// .submit-width {
//   width: 450px;
// }
// .contact-width {
//   width: 5000px;
// }
// .properties-section {
//   height: 100vh;
// }

// @media screen and (max-width: 700px) {
//   .swapping {
//     display: none;
//   }
//   .search {
//     visibility: hidden;
//   }
//   .margin-control {
//     margin: 0;
//     margin-bottom: 50px;
//     margin-top: 10px;
//   }
//   .hamburger {
//     display: inline-grid;
//     margin-bottom: 10px;
//   }
//   .about-section {
//     flex-direction: column;
//   }
//   .about-image {
//     width: 200px;
//   }
//   .text-size-control {
//     font-size: 2rem;
//     text-align: center;
//   }
//   .about-para {
//     width: 90vw;
//   }
//   .whyChooseUs {
//     flex-direction: column;
//   }
//   .about-div {
//     width: 300px;
//     justify-content: center;
//     align-items: center;
//   }
//   .change-width {
//     width: 300px;
//   }
//   /* body {
//     overflow: none !important;
//   } */
// }

// .nav-tag {
//   display: block;
//   margin: 0;
//   width: 60vw;
//   border: 0px;
//   height: 80vh;
// }
// .links-list {
//   flex-direction: column;
//   align-items: normal;
// }

// .userIcon {
//   margin-left: 10px;
// }

// body {
//   overflow-x: hidden !important;
// }
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
// import { ClerkProvider } from "@clerk/nextjs";
// export const metadata: Metadata = {
//   title: "Real Estate",
//   description: "This is a real estate website",
// };
// // import Navbar from "../components/Navbar";
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html
//         lang='en'
//         data-theme='light'>
//         <body className={inter.className}>{children}</body>
//       </html>
//     </ClerkProvider>
//   );
// }
// // import properties from "../../../utils/model";
// const properties = require("../../../utils/model");
// // import ConnectDB from "../../../utils/connect";
// require("dotenv").config();

// const ConnectDB = require("../../../utils/connect");
// ConnectDB(process.env.MONGO_URI);
// export const GET = async (req: Request) => {
//   try {
//     const Properties = await properties.find();
//     return Response.json(Properties);
//   } catch (error) {
//     return Response.json(error);
//   }
// };
// // import properties from "../../../utils/model";
// const properties = require("../../../utils/model");
// // import ConnectDB from "../../../utils/connect";
// require("dotenv").config();

// const ConnectDB = require("../../../utils/connect");
// ConnectDB(process.env.MONGO_URI);
// export const GET = async (req: Request) => {
//   try {
//     const Properties = await properties.find();
//     return Response.json(Properties);
//   } catch (error) {
//     return Response.json(error);
//   }
// };
// import { redirect } from "next/navigation";

// const properties = require("../../../utils/model");

// require("dotenv").config();

// const ConnectDB = require("../../../utils/connect");
// ConnectDB(process.env.MONGO_URI);
// export const POST = async (request: any) => {
//   try {
//     const req = await request.json();
//     let {
//       location,
//       upperPriceLimit,
//       lowerPriceLimit,
//     }: {
//       location: string | null;
//       upperPriceLimit: string | null;
//       lowerPriceLimit: string | null;
//     } = req;
//     console.log(location, upperPriceLimit, lowerPriceLimit);
//     if (location == "Location") {
//       location = null;
//     }
//     if (location && upperPriceLimit) {
//       const filteredProperties = await properties.find({
//         price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
//         location: location,
//       });
//       return Response.json({ success: true, properties: filteredProperties });
//     } else if (location && !upperPriceLimit) {
//       const filteredProperties = await properties.find({
//         location: location,
//       });
//       return Response.json({ success: true, properties: filteredProperties });
//     } else if (!location && upperPriceLimit) {
//       const filteredProperties = await properties.find({
//         price: { $gt: lowerPriceLimit, $lt: upperPriceLimit },
//       });
//       return Response.json({ success: true, properties: filteredProperties });
//     } else {
//       const filteredProperties = await properties.find();
//       return Response.json({ success: true, properties: filteredProperties });
//     }
//   } catch (error: any) {
//     console.error(error);
//     return Response.json({ success: false, error });
//   }
// };
// "use server";
// // import { auth, clerkClient } from "@clerk/nextjs/server";
// require("dotenv").config();
// const ConnectDb = require("./connect");
// const properties = require("./model");
// const contact = require("./contact-model");
// ConnectDb(process.env.MONGO_URI);
// export const formSubmit = async (formData: FormData) => {
//   try {
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");
//     if (name && email && message) {
//       await contact.create({ name, email, message });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getFeatured = async () => {
//   const featuredProperties = await properties.find({ isFeatured: true });
//   return featuredProperties;
// };

// const mongoose = require("mongoose");
// const ConnectDB = (url: String) => {
//   mongoose
//     .connect(url)
//     .then(() => {
//       console.log("DB is connected");
//     })
//     .catch((err: Error) => {
//       console.log(err);
//     });
// };
// module.exports = ConnectDB;
// const mongodb = require("mongoose");

// if (mongodb.connection.models["contact"]) {
//   module.exports = mongodb.model("contact");
// } else {
//   const contactSchema = new mongodb.Schema({
//     message: {
//       type: String,
//       required: [true, "Must Provide the Message!"],
//     },
//     name: {
//       type: String,
//       required: [true, "Must Provide the Name!"],
//     },
//     email: {
//       type: String,
//       required: [true, "Must Provide the Email!"],
//     },
//   });
//   try {
//     delete mongodb.connection.models["contact"];
//   } catch (error: any) {
//     console.error("Error deleting model 'contact':", error.message);
//   }
//   const contact = mongodb.model("contact", contactSchema);
//   module.exports = contact;
// }
// const mongo = require("mongoose");

// if (mongo.connection.models["properties"]) {
//   // Model already exists, no need to redefine

//   module.exports = mongo.model("properties");
// } else {
//   // Define the model
//   const propertiesSchema = new mongo.Schema({
//     details: {
//       type: String,
//       required: [true, "Must Provide the details!"],
//       trim: true,
//     },
//     Img: {
//       type: String,
//       required: [true, "Must Provide the Img!"],
//       trim: true,
//     },
//     price: {
//       type: Number,
//       required: [true, "Must Provide the price!"],
//     },
//     forWhat: {
//       type: String,
//       required: [true, "Must Provide the forWhat!"],
//     },
//     name: {
//       type: String,
//       required: [true, "Must Provide the Name!"],
//     },
//     location: {
//       type: String,
//       required: [true, "Must Provide the Location!"],
//     },
//     isFeatured: {
//       type: Boolean,
//       required: [true, "Must Provide the isFeatured!"],
//     },
//   });
//   try {
//     delete mongo.connection.models["properties"];
//   } catch (error: any) {
//     console.error("Error deleting model 'properties':", error.message);
//   }
//   const properties = mongo.model("properties", propertiesSchema);
//   module.exports = properties;
// }
// import Image from "next/image";
// import locationLogo from "../images/location.jpg";
// import Link from "next/link";
// const Card = (params: any) => {
//   const { Img, name, price, forWhat, location, _id } = params;

//   return (
//     <Link href={`/properties/${_id}`}>
//       <div className='card w-96 change-width bg-base-100 shadow-xl m-16 margin-control'>
//         <figure className='max-h-60 overflow-hidden	'>
//           <img
//             src={Img}
//             // className='bg-cover'
//             alt={name}
//             width={400}
//             height={400}
//           />
//         </figure>
//         <div className='card-body'>
//           <h2 className='card-title text-2xl'>
//             {name}
//             <div className='theme-background text-white perfect-border px-2'>{`For ${forWhat}`}</div>
//           </h2>
//           <p className='mt-4 theme-color'>${price}</p>
//           <div className='flex justify-center items-center'>
//             <Image
//               src={locationLogo}
//               alt='Location Image'
//               className='opacity-20'
//               height={50}
//               width={50}
//             />
//             <p className='text-lg'>{location}</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;
// import Image from "next/image";
// import agent1 from "../images/agent1.png";
// import agent2 from "../images/agent2.png";
// import agent3 from "../images/agent3.png";
// import agent4 from "../images/agent4.png";
// import call from "../images/call.png";
// const Experts = () => {
//   return (
//     <section>
//       <div className='flex justify-center items-center m-4'>
//         <div className='flex justify-center flex-col items-center m-4'>
//           <p className='theme-color text-2xl m-4'>Experties is Here</p>
//           <p className='text-3xl m-4'>Our Exclusive Agents</p>
//         </div>
//       </div>
//       <div className='flex justify-evenly items-center flex-wrap'>
//         <div>
//           <div className='flex justify-center items-center mb-4 flex-wrap'>
//             <Image
//               src={agent1}
//               alt='Agent'
//             />
//             <div>
//               <p className='text-2xl font-semibold'>Jenny White</p>
//               <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
//                 <Image
//                   src={call}
//                   alt='Call'
//                   className='m-2'
//                 />
//                 <p className='m-2'>Call : 2835828558</p>
//               </div>
//             </div>
//           </div>
//           <div className='flex justify-center items-center flex-wrap '>
//             <Image
//               src={agent3}
//               alt='Agent'
//             />
//             <div>
//               <p className='text-2xl font-semibold'>Merry Rose</p>
//               <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
//                 <Image
//                   src={call}
//                   alt='Call'
//                   className='m-2'
//                 />
//                 <p className='m-2'>Call : 2835828558</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className='flex justify-center items-center mb-4 flex-wrap'>
//             <Image
//               src={agent2}
//               alt='Agent'
//             />
//             <div>
//               <p className='text-2xl font-semibold'>Jhon White</p>
//               <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
//                 <Image
//                   src={call}
//                   alt='Call'
//                   className='m-2'
//                 />
//                 <p className='m-2'>Call : 2835828558</p>
//               </div>
//             </div>
//           </div>

//           <div className='flex justify-center items-center flex-wrap '>
//             <Image
//               src={agent4}
//               alt='Agent'
//             />
//             <div>
//               <p className='text-2xl font-semibold'>Alex Roy</p>
//               <div className='flex justify-center items-center normal-background opacity-70 mt-2'>
//                 <Image
//                   src={call}
//                   alt='Call'
//                   className='m-2'
//                 />
//                 <p className='m-2'>Call : 2835828558</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experts;
// import { getFeatured } from "@/utils/actions";
// import Card from "./card";

// const Featured = async () => {
//   let featuredProperties = await getFeatured();
//   return (
//     <>
//       <section className='mt-48 flex flex-col items-center text-3xl'>
//         <h3 className='theme-color mb-16'>Our Properties</h3>
//         <p>Our Featured Properties</p>
//         <div className='flex flex-wrap justify-center'>
//           {featuredProperties.map((property: any) => {
//             const { Img, name, price, forWhat, location, _id } = property;
//             return (
//               <Card
//                 key={property._id}
//                 name={name}
//                 Img={Img}
//                 price={price}
//                 location={location}
//                 forWhat={forWhat}
//                 _id={_id}
//               />
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Featured;
// import Image from "next/image";
// import React from "react";
// import address from "../images/address.png";
// import mail from "../images/email.png";
// import phone from "../images/phone.png";
// import Link from "next/link";
// const Footer = () => {
//   return (
//     <footer className='footer p-10 bg-base-300 different-background text-white'>
//       <div>
//         <h6 className='footer-title opacity-100 theme-color'>Contact</h6>
//         <div className='flex justify-center items-center mt-2'>
//           <Image
//             src={address}
//             alt='Address Logo'
//             className='mr-4'
//           />
//           <p className='w-40'>121 King St, Melbourne den 3000, Australia</p>
//         </div>
//         <div className='flex justify-center items-center mt-2'>
//           <Image
//             src={mail}
//             alt='Mail'
//             className='mr-4'
//           />
//           <p>Info@example.com</p>
//         </div>
//         <div className='flex justify-center items-center mt-2'>
//           <Image
//             src={phone}
//             alt='Phone'
//             className='mr-4'
//           />
//           <p>+91 999999999</p>
//         </div>
//       </div>
//       <div>
//         <h6 className='footer-title opacity-100 theme-color'>Quick Links</h6>
//         <Link
//           href={"/"}
//           className='link link-hover'>
//           Home
//         </Link>
//         <Link
//           className='link link-hover'
//           href={"/about"}>
//           About us
//         </Link>
//         <Link
//           className='link link-hover'
//           href={"/property"}>
//           Properties
//         </Link>
//         <Link
//           className='link link-hover'
//           href={"/contact"}>
//           Contact us
//         </Link>
//       </div>
//       <div>
//         <h6 className='footer-title opacity-100 theme-color'>Social</h6>
//         <div className='grid grid-flow-col gap-4'>
//           <a
//             href='https://x.com'
//             target='_block'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='24'
//               height='24'
//               viewBox='0 0 24 24'
//               className='fill-current'>
//               <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
//             </svg>
//           </a>
//           <a
//             href='https://youtube.com'
//             target='_block'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='24'
//               height='24'
//               viewBox='0 0 24 24'
//               className='fill-current'>
//               <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
//             </svg>
//           </a>
//           <a
//             href='https://facebook.com'
//             target='_block'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='24'
//               height='24'
//               viewBox='0 0 24 24'
//               className='fill-current'>
//               <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";

// const Loading = () => {
//   return (
//     <div className='flex justify-center items-center flex-wrap'>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//       <div className='flex flex-col gap-4 w-52 m-16'>
//         <div className='skeleton h-32 w-full'></div>
//         <div className='skeleton h-4 w-28'></div>
//         <div className='skeleton h-4 w-full'></div>
//         <div className='skeleton h-4 w-full'></div>
//       </div>
//     </div>
//   );
// };

// export default Loading;
// import Image from "next/image";
// import india from "../images/india.jpg";
// import pakistan from "../images/pakistan.jpg";
// import australlia from "../images/aurtrallia.jpg";
// import usa from "../images/usa.jpg";
// import china from "../images/china.jpg";
// import russia from "../images/russia.jpg";
// const Location = () => {
//   return (
//     <section className='flex flex-col justify-center items-center'>
//       <div className='flex justify-center'>
//         <p className='theme-color text-3xl'>Locations</p>
//       </div>
//       <div className='flex flex-wrap justify-center items-center'>
//         <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16  theme-background good-border'>
//           {/* <figure> */}
//           <Image
//             src={usa}
//             className='bg-cover'
//             width={400}
//             alt='Shoes'
//           />
//           {/* </figure> */}
//           <div className='card-body'>
//             <h2 className='card-title'>USA</h2>
//           </div>
//         </div>
//         <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
//           {/* <figure> */}
//           <Image
//             src={china}
//             className='bg-cover'
//             width={400}
//             alt='Shoes'
//           />
//           {/* </figure> */}
//           <div className='card-body'>
//             <h2 className='card-title'>China</h2>
//           </div>
//         </div>
//         <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
//           {/* <figure> */}
//           <Image
//             src={russia}
//             className='bg-cover'
//             width={400}
//             alt='Shoes'
//           />
//           {/* </figure> */}
//           <div className='card-body'>
//             <h2 className='card-title'>Russia</h2>
//           </div>
//         </div>
//         <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
//           {/* <figure> */}
//           <Image
//             src={pakistan}
//             className='bg-cover'
//             width={400}
//             alt='Shoes'
//           />
//           {/* </figure> */}
//           <div className='card-body'>
//             <h2 className='card-title'>Pakistan</h2>
//           </div>
//         </div>
//         <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
//           {/* <figure> */}
//           <Image
//             src={australlia}
//             className='bg-cover'
//             width={400}
//             alt='Shoes'
//           />
//           {/* </figure> */}
//           <div className='card-body'>
//             <h2 className='card-title'>Australlia</h2>
//           </div>
//         </div>
//         <div className='card card-compact bg-base-100 shadow-xl mx-16 my-16 theme-background good-border'>
//           {/* <figure> */}
//           <Image
//             src={india}
//             className='bg-cover'
//             width={400}
//             alt='Shoes'
//           />
//           {/* </figure> */}
//           <div className='card-body'>
//             <h2 className='card-title'>India</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Logo from "../images/Vector.png";
// import UserIcon from "./UserIcon";
// import Link from "next/link";

// import { usePathname } from "next/navigation";
// const Navbar = () => {
//   const pathname = usePathname();

//   const [navTag, setNavTag] = useState("");
//   const [linksList, setLinksList] = useState("");
//   const [userIcon, setUserIcon] = useState("");
//   const [swapping, setSwapping] = useState("swapping");
//   let [i, setI] = useState(0);
//   const fire = () => {
//     if (i == 0) {
//       setNavTag("nav-tag");
//       setLinksList("links-list");
//       setUserIcon("userIcon");
//       setSwapping("");

//       setI(i++);
//       return;
//     } else if (i == 1) {
//       setNavTag("");
//       setLinksList("");
//       setUserIcon("");

//       setSwapping("swapping");
//       setI(i--);
//       return;
//     }
//   };
//   return (
//     <>
//       <nav
//         className={`bg-white m-8 p-4 flex items-center justify-between ${navTag}`}>
//         <label
//           className={`btn btn-circle swap swap-rotate hamburger hidden hamburger`}
//           onClick={fire}>
//           <input type='checkbox' />
//           <svg
//             className='swap-off fill-current'
//             xmlns='http://www.w3.org/2000/svg'
//             width='32'
//             height='32'
//             viewBox='0 0 512 512'>
//             <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
//           </svg>

//           {/* close icon */}
//           <svg
//             className='swap-on fill-current'
//             xmlns='http://www.w3.org/2000/svg'
//             width='32'
//             height='32'
//             viewBox='0 0 512 512'>
//             <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
//           </svg>
//         </label>

//         <Link
//           href={"/"}
//           className={`${swapping}`}>
//           <div className='flex items-center cursor-pointer'>
//             <Image
//               src={Logo}
//               width={30}
//               height={30}
//               alt='This is the logo'
//             />
//             <h2 className='text-cyan-700 rounded-lg border-0	border-solid ml-2 '>
//               Easy Housing
//             </h2>
//           </div>
//         </Link>
//         <div className={`flex items-center ${swapping} ${linksList}`}>
//           <Link
//             href={"/"}
//             className={`m-4 ${pathname == "/" ? "active" : ""}`}>
//             Home
//           </Link>
//           <Link
//             href={"/about"}
//             className={`m-4 ${pathname == "/about" ? "active" : ""}`}>
//             About
//           </Link>
//           <Link
//             href={"/property"}
//             className={`m-4 ${pathname == "/property" ? "active" : ""}`}>
//             Property
//           </Link>
//           <Link
//             href={"/contact"}
//             className={`m-4 ${pathname == "/contact" ? "active" : ""}`}>
//             Contact us
//           </Link>
//           <UserIcon classSwap={userIcon} />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
// const PropertiesDetails = ({
//     details,
//     name,
//     price,
//     forWhat,
//     Img,
//   }: {
//     details: string;
//     name: string;
//     forWhat: string;
//     price: number;
//     Img: string;
//   }) => {
//     return (
//       <section className='flex justify-center items-center properties-section'>
//         <div className='text-gray-600 body-font overflow-hidden'>
//           <div className='container px-5 py-24 mx-auto'>
//             <div className='lg:w-4/5 mx-auto flex flex-wrap'>
//               <img
//                 alt='ecommerce'
//                 className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
//                 src={Img}
//               />
//               <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
//                 <p className='theme-color text-3xl title-font font-medium mb-4'>
//                   {name}
//                 </p>
  
//                 <p className='leading-relaxed'>{details}</p>
//                 <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'></div>
//                 <div className='flex'>
//                   <span className='title-font font-medium text-2xl text-gray-900'>
//                     ${price}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default PropertiesDetails;
//   export default function Search() {
//     return (
//       <section className='flex justify-center items-center flex-col h-96 search'>
//         <p className='text-white text-6xl m-8 text-center'>
//           Find Your Dream Home
//         </p>
//         <p className='text-white text-2xl text-center'>
//           From as low as $10 per day with limited time offer discounts.
//         </p>
//       </section>
//     );
//   }
//   import Image from "next/image";
// import findYourDreamHome from "../images/FindYourDreamHome.png";
// import Link from "next/link";
// const SemiFooter = () => {
//   return (
//     <section>
//       <div className='flex justify-center items-center flex-col mt-16'>
//         <p className='text-3xl m-4'>Find Your Dream Home Today</p>
//         <Link href={"/contact"}>
//           <button className='btn theme-background btn-error'>Contact Us</button>
//         </Link>
//         <Image
//           src={findYourDreamHome}
//           alt='Find Your Dream Home'
//           width={1900}
//         />
//       </div>
//     </section>
//   );
// };

// export default SemiFooter;
// import { writeFile } from "fs/promises";
// import { join } from "path";
// export default function ServerUploadPage() {
//   async function upload(data: FormData) {
//     "use server";

//     const file: File | null = data.get("file") as unknown as File;
//     if (!file) {
//       throw new Error("No file uploaded");
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // With the file data in the buffer, you can do whatever you want with it.
//     // For this, we'll just write it to the filesystem in a new location
//     const path = join("./", "public", file.name);
//     await writeFile(path, buffer);
//     // console.log(`open ${path} to see the uploaded file`);

//     return { success: true };
//   }

//   return (
//     <main>
//       {/* <p>React Server Component: Upload</p> */}
//       <form action={upload}>
//         {/* <input
//           type='file'
//           name='file'
//           className=''
//         /> */}
//         <input
//           type='file'
//           name='file'
//           className='file-input file-input-bordered file-input-error w-full max-w-xs'
//         />
//         <input
//           type='submit'
//           value='Upload'
//           className='btn theme-background border-orange-600 btn-error m-2'
//         />
//       </form>
//     </main>
//   );
// }
// "use client";
// require("dotenv").config();
// import { UserButton, useUser } from "@clerk/nextjs";
// import Link from "next/link";
// const UserIcon = ({ classSwap }: { classSwap: string }) => {
//   const { user, isLoaded } = useUser();

//   return (
//     <>
//       {isLoaded && user ? (
//         <div className={`w-10 rounded-full ml-8 ${classSwap}`}>
//           <UserButton afterSignOutUrl='/' />
//         </div>
//       ) : (
//         <button className='theme-background p-2 ml-8 sign-in'>
//           <Link href='/sign-in'>SignIn</Link>
//         </button>
//       )}
//     </>
//   );
// };

// export default UserIcon;
// import Image from "next/image";
// import features1 from "../images/features1.png";
// import features2 from "../images/features2.png";
// import features3 from "../images/features3.png";
// import features4 from "../images/features4.png";
// const WhyChooseUs = () => {
//   return (
//     <section className='flex items-center different-background flex-col'>
//       <p className='text-white text-3xl m-4'>Why Choose Us?</p>
//       <div className='flex flex-wrap justify-center items-center'>
//         <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
//           <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
//             <div>
//               <Image
//                 src={features1}
//                 alt='Shoes'
//                 className='align-middle'
//               />
//             </div>
//           </div>
//           <div className='card-body items-center text-center'>
//             <h2 className='card-title'>Trusted by Thousands</h2>
//             <p className='text-justify m-2'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
//               nostrum exercitationem architecto possimus quis obcaecati nulla
//               tempore natus, ea amet non, et velit.
//             </p>
//           </div>
//         </div>

//         <div className='flex'>
//           <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
//             <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
//               <div>
//                 <Image
//                   src={features2}
//                   alt='Shoes'
//                   className='align-middle'
//                 />
//               </div>
//             </div>
//             <div className='card-body items-center text-center'>
//               <h2 className='card-title'>Wide Range of Properties</h2>
//               <p className='text-justify m-2'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
//                 nostrum exercitationem architecto possimus quis obcaecati nulla
//                 tempore natus, ea amet non, et velit.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className='flex'>
//           <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
//             <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
//               <div>
//                 <Image
//                   src={features3}
//                   alt='Shoes'
//                   className='align-middle'
//                 />
//               </div>
//             </div>
//             <div className='card-body items-center text-center'>
//               <h2 className='card-title'>Finance Made Easy</h2>
//               <p className='text-justify m-2'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
//                 nostrum exercitationem architecto possimus quis obcaecati nulla
//                 tempore natus, ea amet non, et velit.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className='flex'>
//           <div className='card w-96 change-width bg-base-100 shadow-xl flex justify-center items-center m-4'>
//             <div className='mt-2 background-circle flex justify-center items-center h-10 w-10'>
//               <div>
//                 <Image
//                   src={features4}
//                   alt='Shoes'
//                   className='align-middle'
//                 />
//               </div>
//             </div>
//             <div className='card-body items-center text-center'>
//               <h2 className='card-title'>Life Time Assistance</h2>
//               <p className='text-justify m-2'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
//                 nostrum exercitationem architecto possimus quis obcaecati nulla
//                 tempore natus, ea amet non, et velit.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
