import { useSelector } from "react-redux";
import menuImage from "../assets/menuitem.png";
import plus from "../assets/Plus.png";

export default function Menu() {
  const restaurant = useSelector((state) => state.restaurants);
  console.log(restaurant);

  return (
    <div className="md:mx-28 mx-14 pt-8">
      {restaurant.restaurantData.menu_items && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {restaurant.restaurantData.menu_items.map((item) => {
            return (
              <div key={item.name} className="shadow-lg pt-7 pb-6 px-6 flex justify-between h-48 rounded-lg">
                <div className="w-1/2 flex flex-col justify-between space-y-3">
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-sm font-normal ">{item.description}</p>
                  <p className="font-bold text-sm">Rs.{item.price}</p>
                </div>
                <div className="relative h-fit w-fit">
                  <img src={menuImage} alt="" className="z-10 h-36 "/>
                  <div className="h-16 w-16 absolute  flex items-center justify-center rounded-tl-3xl bg-white bg-opacity-90 bottom-0 right-0">
                    <img src={plus} alt="" className="h-12 w-12 py-2 px-2 z-20" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
