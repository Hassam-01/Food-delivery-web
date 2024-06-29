import Categories from "../shared/Categories";
import Deal from "../shared/Deal";
import Popular from "../shared/Popular";
import RestBanner from "../shared/RestBanner";

export default function Shop() {
  return (
    <div>
      <RestBanner text2_1={"Islamabad Cafe'"} text1={"I'm lovin it!"}  text3={"Nothing yet"} bgColor={"bg-black"} time={null}/>
      <Popular />

      <Deal />
      <Categories />
    </div>
  );
}
