import About from "../components/About";
import FootBanner from "../components/FootBanner";
import Join from "../components/Join";
import Record from "../components/Record";
import Banner from "../shared/Banner";
import Categories from "../shared/Categories";
import Deal from "../shared/Deal";
import Popular from "../shared/Popular";

export default function Home() {
  return (
    <div>
      <Banner
        text2_1={"Feast Your Senses,"}
        text2_2={"Fast and Fresh"}
        text1={"Order Restaurant food, takeaway and groceries."}
        text3={"Enter a postcode to see what we deliver"}
        bgColor={"bg-black"}
      />
      
      <Deal />
      <Categories />
      <Popular />
      <FootBanner />
      <Join />
      <About />
      <Record />
    </div>
  );
}
