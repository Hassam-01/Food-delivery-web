import { useEffect, useState } from "react"

export default function Restaurants({name}) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const endpoints = [
      'http://localhost:3000/0',
      'http://localhost:3000/1',
      'http://localhost:3000/2',
      'http://localhost:3000/3',
      'http://localhost:3000/4',
      'http://localhost:3000/5',
      'http://localhost:3000/6',
      'http://localhost:3000/7',
      'http://localhost:3000/8',
      'http://localhost:3000/9',
      'http://localhost:3000/10',
      'http://localhost:3000/11',
      'http://localhost:3000/12',
      'http://localhost:3000/13',
      'http://localhost:3000/14',
      'http://localhost:3000/15',
      'http://localhost:3000/16',
      'http://localhost:3000/17',
      'http://localhost:3000/18',
      'http://localhost:3000/19',
      'http://localhost:3000/20',
      'http://localhost:3000/21',
      'http://localhost:3000/22',
      'http://localhost:3000/23'
    ];

    // Fetch data from all endpoints
    Promise.all(endpoints.map(endpoint => fetch(endpoint).then(response => response.json())))
      .then(results => {
        // Combine all results into a single array
        const combinedData = results.flat();
        setData(combinedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex space-x-5 my-10 overflow-x-auto no-scrollbar">
      {
        data.map(item => (
           item.type.toLowerCase() === name.toLowerCase() && (
            <div key={item.id} className=" relative flex-shrink-0  w-80">
                <div>
              <img src={item.image_url} alt="" className=" h-60 w-80 rounded-xl" />
              <div className="absolute z-10 bottom-0 shadow-left  h-60 w-80 rounded-xl"></div>
                </div>
              <div className="bg-black w-16 h-12 text-center rounded-b-xl top-0 right-5 absolute z-20 text-white font-semibold">
                <p className="items-center my-2">-{item.off_percentage}%</p>
              </div>
              <div className=" absolute z-20 bottom-3 px-4">
                <p className="text-[#FC8A06] text-[16px] font-semibold">Restaurant</p>
                <h2 className="text-lg text-white font-bold">{item.restaurant_name}</h2>
              </div>
            </div>
          )
        ))
      }
    </div>
  )
}
