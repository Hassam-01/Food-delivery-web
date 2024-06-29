import { useState } from "react"
import Restaurants from "./Restaurants";


export default function Deal() {
  
  const [selected, setSelected] = useState("Vegan");

  const choose = (name) =>(
    setSelected(name)
  )
    return (
    <div className="mt-6 lg:mx-28 mx-12">
    <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Up to -40% Order.uk exclusive deals</h3>
        <div className="items-center space-x-2">
            <button className="btnOffer" onClick={() =>choose("Vegan")}>Vegan</button>
            <button className="btnOffer" onClick={() =>choose("Sushi")}>Sushi</button>
            <button className="btnOffer" onClick={() =>choose("Pizza & Fast Food")}>Pizza & Fast Food</button>
            <button className="btnOffer" onClick={() =>choose("Others")}>Others</button>
        </div>
    </div>
    <div>
        <Restaurants name = {selected}/>
    </div>
    </div>
  )
}


// offer percent, item type restaurant name image