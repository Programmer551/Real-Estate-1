import Search from "../../components/search";
import Featured from "@/components/featured";
import Uploader from "../../components/Uploader";
import Location from "@/components/location";
import WhyChooseUs from "@/components/whyChooseUs";
import Experts from "@/components/experts";
import SemiFooter from "@/components/semiFooter";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Featured />
      <Location />
      <WhyChooseUs />
      <Experts />
      <SemiFooter />
      <Footer />
    </>
  );
}
