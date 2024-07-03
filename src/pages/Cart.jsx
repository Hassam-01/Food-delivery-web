import { GrFormPrevious } from "react-icons/gr";
import CartItems from "../components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentModeAction } from "../action/Index";
import CartDetails from "../components/CartDetails";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

function Cart() {
  const paymentMode = useSelector((state) => state.restaurants.paymentMode);
  const totalItem = useSelector((state) => state.restaurants.cartDetail.reduce((acc, item) => acc + item.totalQuantity, 0));
  const subTotal = useSelector((state) => state.restaurants.cartDetail.reduce((acc, item) => acc + item.totalPrice, 0));
  const delivery = 5;
  const dispatch = useDispatch();

  const displayDelivery = subTotal > 0 ? delivery : 0;
  const displayTotal = subTotal + displayDelivery;

  return (
    <div className="md:mx-28 mx-14 md:my-12 my-8 bg-[#ededed] rounded-xl flex gap-6 justify-between p-6">
      <div className="flex flex-col space-y-4 w-2/3">
        <div className="flex items-center gap-2">
          <GrFormPrevious className="text-2xl" />
          <h3 className="text-xl font-semibold">Back to menu</h3>
        </div>
        <hr className="w-full" />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Cart</h3>
          <p className="text-xs font-semibold text-gray-600">You have {totalItem} items in your cart</p>
        </div>
        <div>
          <CartItems />
        </div>
      </div>
      <div className="bg-[#FC8A06] text-white rounded-xl flex flex-col px-4 py-4 w-1/3">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Payment Details</h3>
        </div>
        <div className="flex flex-col space-y-4 mt-5">
          <h2 className="text-lg font-medium mb-2">Payment Mode</h2>
          <div className="flex gap-4">
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="cod"
                name="payment"
                value="COD"
                className="hidden peer"
                checked={paymentMode === "COD"}
                onChange={() => dispatch(setPaymentModeAction("COD"))}
              />
              <label
                htmlFor="cod"
                className="flex items-center justify-center p-2 border-2 text-white border-white rounded-lg cursor-pointer peer-checked:bg-white peer-checked:text-[#FC8A06]"
              >
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="card"
                name="payment"
                value="Card"
                className="hidden peer"
                checked={paymentMode === "Card"}
                onChange={() => dispatch(setPaymentModeAction("Card"))}
              />
              <label
                htmlFor="card"
                className="flex items-center justify-center p-2 border-2 border-white text-white rounded-lg cursor-pointer peer-checked:bg-white peer-checked:text-[#FC8A06]"
              >
                Card Payment
              </label>
            </div>
          </div>
        </div>
        <div>
          {paymentMode === "COD" ? (
            <CartDetails
              namePH={"Name"}
              CardContact={"Contact"}
              AddressExpiry={"Address"}
              CCPlace={"Your Contact Number"}
              AEPlace={"Your Delivery Address"}
            />
          ) : (
            <CartDetails
              namePH={"Name On Your Card"}
              CardContact={"Card Number"}
              AddressExpiry={"Expiry Date"}
              CCPlace={"1111 222 3333 4444"}
              AEPlace={"mm/yy"}
            />
          )}
        </div>
        <hr className="mt-4 text-white" />
        <div className="flex flex-col space-y-4 mt-5">
          <div>
            <h3 className="flex justify-between font-semibold">Subtotal <span>Rs. {subTotal.toFixed(2)}</span></h3>
            <h3 className="flex justify-between font-semibold">Shipping <span>Rs. {displayDelivery.toFixed(2)}</span></h3>
            <h3 className="flex justify-between font-semibold">Total (Tax incl.) <span>Rs. {displayTotal.toFixed(2)}</span></h3>
          </div>
          <Link to="/">
            <button className="flex justify-between bg-black py-3 w-full px-4 rounded-xl">
              <span>Rs. {displayTotal.toFixed(2)}</span>
              <span className="flex gap-1 items-center">
                Checkout
                <GrFormNextLink className="text-lg" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
