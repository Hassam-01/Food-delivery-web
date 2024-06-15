import { useEffect, useState } from "react"

export default function Categories() {
  

  const [data, setData] = useState([]);
  
    useEffect(() =>{
        const endpoints =[
            'http://localhost:5000/0',
            'http://localhost:5000/1',
            'http://localhost:5000/2',
            'http://localhost:5000/3',
            'http://localhost:5000/4',
            'http://localhost:5000/5',
            'http://localhost:5000/6'

        ];

        Promise.all(endpoints.map(endpoint => fetch(endpoint).then(response => response.json())))
        .then(results =>{
            let combineData = results.flat()
            setData(combineData);
        })
    }, []);

    return (
    <div className="my-12 md:mx-28 mx-14 space-y-4">
      <div>
        <h3 className="text-3xl font-bold ">Order.pk Popular Categories</h3>
      </div>
      <div className="flex space-x-5">
        {
            data.map(item => (
                <div key={item.category_id} className="flex flex-col justify-between bg-[#F5F5F5] rounded-lg shadow-md">
                    <img src={item.image_url} alt=""  className="h-44 w-40"/>
                    <div className="px-2 pb-2 pt-1"> 
                    <p className="text-black font-semibold text-lg">{item.category_name}</p>
                    <p className="text-sm text-[#FC8A06]">{item.restaurants} Restaurants</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}
