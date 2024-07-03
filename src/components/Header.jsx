import { MdLocationPin } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { LuArrowDownCircle } from "react-icons/lu";

import star from "../assets/star.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {

  const cartDetails = useSelector(state => state.restaurants.cartDetail);
  const totalP = cartDetails.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalQ = cartDetails.reduce((acc, item) => acc + item.totalQuantity, 0)
  return (
    <div className="lg:flex justify-between hidden md:bg-[#edededc8] md:pl-2 md:mx-28 md:rounded-b-2xl">
      <div className="flex justify-between items-center space-x-2 ">
        <img src={star} alt="" className="h-6 w-6" />
        <p className="font-medium text-sm">
          Get 5% Off your first order,
          <span className="text-[#FC8A06] font-semibold"> Promo: ORDER5</span>
        </p>
      </div>
      <div className="flex justify-between space-x-5 items-stretch">
        <div className="flex justify-between items-center space-x-3 font-medium">
          <MdLocationPin className="h-6 w-6 " />
          <p className="text-[#03081F] text-sm">Regent Street, A4, A4201, London</p>
          <a href="location" className="text-[#FC8A06] hover:border-b text-sm">
            Change Location
          </a>
        </div>
        <div className="flex justify-between bg-[#028643] rounded-b-2xl text-white items-cente space-x-3  h-ful items-stretch">
         <Link to="/cart">
          <div className="pr-3 pl-2 border-r flex items-center py-2">
            <FaShoppingBasket className="h-8 w-8" />
          </div>
         </Link>
          <div className="pr-3 pl-2  border-r flex items-center text-center py-2">
            {/* items in cart will receive from cart */}
            <p className="text-center">{totalQ}</p> 
          </div>
          <div className="pr-3 pl-2 border-r flex items-center py-2">
            <p>Rs. {totalP.toFixed(2)}</p>
          </div>
          <div className="pr-3 pl-2 h-full flex items-center py-2">
            <LuArrowDownCircle className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
