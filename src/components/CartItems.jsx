import { useDispatch, useSelector } from "react-redux";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import {
  addToCartAction,
  emptyCartAction,
  removeFromCartAction,
  setCartDetailAction,
} from "../action/Index";
import { FaRegTrashCan } from "react-icons/fa6";
import itempic from "../assets/menuitem.png";

function CartItems() {
  const items = useSelector((state) => state.restaurants.cart);
  const dispatch = useDispatch();


  return (
    <div className="flex flex-col space-y-6">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="shadow-xl rounded-xl px-4 bg-[#ffffff] py-4 items-center flex justify-between"
          >
            <div className="flex gap-4 items-center w-2/5">
              <img src={itempic} alt="" className="rounded-lg h-16 w-16" />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            </div>
            <div className="flex items-center w-1/5 justify-center">
              <span>{item.quantity}</span>
              <div className="flex flex-col -space-y-3">
                <GoTriangleUp
                  onClick={() => {
                    dispatch(addToCartAction(item));
                    dispatch(setCartDetailAction());
                  }}
                  className="text-3xl cursor-pointer"
                />
                <GoTriangleDown
                  onClick={() => {
                    dispatch(removeFromCartAction(item));
                    dispatch(setCartDetailAction());
                  }}
                  className="text-3xl cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center w-2/5 justify-end">
              <div className="text-sm text-gray-600 font-semibold">
                Rs. <span>{item.price * item.quantity}</span>
              </div>
              <div>
                <FaRegTrashCan
                  className="h-6 w-6 cursor-pointer hover:text-red-500 transition-all duration-300"
                  onClick={() => {
                    dispatch(emptyCartAction(item));
                    dispatch(setCartDetailAction());
                  }}
                 />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
