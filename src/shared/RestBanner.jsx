import burger from "../assets/Rectangle 44.png";
import bike from "../assets/Motocross.png";
import complete from "../assets/Order Completed.png";
import clock from "../assets/Clock.png";


import StarRating from "../Functions/StarRating";
import { useState } from "react";
import { useSelector} from "react-redux";

export default function RestBanner({ bgColor, time }) {
    const [openTime, setOpenTime] = useState(null);
    // setOpenTime(time);
    // const state = useSelector((state) => state.restaurants);

    
    const state = useSelector((state)=> state.restaurants);
    const RestaurantName = useSelector((state)=> state.restaurants.restaurantName);
    const title = useSelector((state)=> state.restaurants.bannerTitle);
    
    console.log(RestaurantName + " "+ title+ " "+ state.restaurantName)
    // const Restaurant = state.restaurantData;

    return (
    <div
      className={`mt-6 rounded-lg lg:mx-28 mx-12 relative bg-[#03081F] opacity-90 flex justify-center`}
    >
      <div className="md:w-[40%] px-4 py-24  space-y-4 z-0">
        <p
          className={`text-sm md:font-semibold text-${
            bgColor === "bg-black" ? "white" : "black"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-5xl text-${
            bgColor === "bg-black" ? "white" : "black"
          } font-bold`}
        >
          {" "}
          {RestaurantName}{" "}
        </p>
        <div className="space-y-2">
          <div className="gap-4 flex">
            <span className="flex gap-2 border-2 border-white py-1 px-2 text-white text-sm rounded-2xl">
              <img src={bike} alt="" className="h-5 w-5" />
              Delivery in 20-25 Minutes
            </span>
            <span className="flex gap-2 border-2 border-white py-1 px-2 text-white text-sm rounded-2xl">
              <img src={complete} alt="" className="h-5 w-5" />
              Minimun Order: Rs.300
            </span>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center z-10 relative px-6 ">
        <div className=" w-fit justify-end flex">
          <img src={burger} alt="" className="w-3/4 h-[70%]" />
        </div>
        <div className="text-black rounded-lg absolute bottom-2 text-center left-32 w-fit p-2 space-y-2 bg-white">
          <h3 className="text-3xl font-medium">3.4</h3>
          <StarRating rating={state.restaurantID != 0 ? 4.8 : 3.8}/>
          <p className="text-xs">1,360 reviews</p>
        </div>
      </div>
      {openTime != null &&
          <div className="bg-[#FC8A06] text-sm py-2 px-4 gap-2 rounded-r-lg items-center text-white flex justify-center absolute -bottom-4 left-0">
          <img src={clock} alt="" className="h-5 w-5" />
          <p className="">Open untill {openTime}</p>
      </div>
    }
    </div>
  );
}
