import Search from "../../components/search";
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
      {/* <Search /> */}

      <Featured />
      <Location />
      <WhyChooseUs />
      <Experts />
      <SemiFooter />
    </>
  );
}
