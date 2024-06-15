import { useEffect, useState } from "react"

export default function Popular() {
    
    const [data, setData] = useState([]);

  useEffect(() => {
   const endpoints = [
        'http://localhost:5001/0',
        'http://localhost:5001/1',
        'http://localhost:5001/2',
        'http://localhost:5001/3',
        'http://localhost:5001/4',
        'http://localhost:5001/5',
        'http://localhost:5001/6',
        'http://localhost:5001/7',
        'http://localhost:5001/8',
        'http://localhost:5001/9'
    ];

    Promise.all(endpoints.map(endpoint => fetch(endpoint).then(response => response.json())))
    .then(results =>{
        console.log('Results:', results);
        const combData = results.flat()
        setData(combData);
    })
  },[]);
    return (
    <div className="md:mx-28 mx-14 mt-8 space-y-2">
        <div>
            <h3 className="text-black text-3xl font-semibold px-1 ">Popular Restaurants</h3>
        </div>
        <div className="flex overflow-x-auto no-scrollbar space-x-4 ">
            {
                data.map(item =>( 
                    <div key={item.restaurant_id} className=" flex-shrink-0 rounded-lg shadow-lg">
                        <div className="bg-[#FC8A0A] w-48 text-center rounded-xl">
                        <img src={item.image_url} alt="" className="h-52 w-48"/>
                        <p className="text-white text-sm font-semibold p-2">{item.restaurant_name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
