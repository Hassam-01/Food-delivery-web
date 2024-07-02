import { useSelector } from "react-redux"

import search from "../assets/Search More.png"

export default function MenuBar() {
  
  const name = useSelector((state) => state.restaurants.restaurantName);

    return (
    <>
    <div className="md:mx-32 mx-14 mt-8 flex justify-between">
        <h3 className="text-2xl font-bold">All Offers from {name}</h3>
        <div className="flex items-center relative ">
        <img src={search} alt="" className="h-4 w-4  absolute left-4 z-20"/>
        <input type="text" className="z-10  border-2 rounded-3xl py-2 pl-10" placeholder="Search for menu...">
        </input>
        </div>
    </div>
    <div className="bg-[#FC8A06] py-4 md:px-28 px-14 gap-3 flex justify-between mt-8">
        <button className="btnMenuBar">Offers</button>
        <button className="btnMenuBar">Burgers</button>
        <button className="btnMenuBar">Snack</button>
        <button className="btnMenuBar">Fries</button>
        <button className="btnMenuBar">Cold Drinks</button>
        <button className="btnMenuBar">Salad</button>
        <button className="btnMenuBar">Special</button>
        <button className="btnMenuBar">Desserts</button>
        <button className="btnMenuBar">Hot Drinks</button>
        <button className="btnMenuBar">Sea Foods</button>
        <button className="btnMenuBar">Desi</button>

    </div>
    
    </>
  )
}
