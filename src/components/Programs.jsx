import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

export default function Programs() {
  const data = [
    {
      title: "Affiliate Program",
      image: work1,
      description: "Join our affiliate program and earn commissions on referrals.",
    },
    {
      title: "Vendor Partnership",
      image: work2,
      description: "Become a vendor and expand your business with Order.PK.",
    },
    {
      title: "Delivery Partner",
      image: work3,
      description: "Partner with us for delivery and ensure timely orders.",
    },
  ];

  return (
    <div className="p-6 ">
    <div className="mb-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800">Our Partner Programs</h3>
      <p className="text-lg text-gray-600">Explore opportunities to collaborate and grow with Order.PK.</p>
    </div>
    <div className="flex justify-center space-x-5">
      {data.map((item) => (
        <div
          key={item.title}
          className="bg-[#D9D9D9] h-56 w-48 rounded-lg shadow-lg flex flex-col justify-center text-center p-4 space-y-2"
        >
          <p className="font-bold text-sm text-gray-800">{item.title}</p>
          <img src={item.image} alt={item.title} className="h-1/2 w-2/4 mx-auto" />
          <p className="text-sm font-normal text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);
}
