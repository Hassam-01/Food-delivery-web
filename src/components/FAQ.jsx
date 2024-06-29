import { useState } from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

export default function FAQ() {
  const payment = [
    {
      title: "Visa",
      image: work1,
      description: "Largest International payment channel",
    },
    {
      title: "Master Card",
      image: work2,
      description: "Get Your payment done in no time.",
    },
    {
      title: "Pay Pak",
      image: work3,
      description: "Pakistan's best and fastest payment gateway. Get Digital!",
    },
  ];
  const work = [
    {
      title: "Place an Order!",
      image: work1,
      description: "Place order through our website or Mobile app",
    },
    {
      title: "Track Process!",
      image: work2,
      description: "Your can track your order status with delivery time",
    },
    {
      title: "Get Your Order!",
      image: work3,
      description: "Receive your order at a lighting fast speed!",
    },
  ];

  const track = [
    {
      title: "Tracking ID",
      image: work1,
      description: "Track your order via ID",
    },
    {
      title: "Purchase ID",
      image: work2,
      description: "Track order status and delivery time",
    },
    {
      title: "Real Time Location",
      image: work3,
      description: "Get real-time delivery updates",
    },
  ];

  // are there any special discounts
  const discount = [
    {
      title: "Loyalty Points",
      image: work1,
      description: "Earn points on each order",
    },
    {
      title: "Invite Your Friends!",
      image: work2,
      description: "Get rewards for referrals",
    },
    {
      title: "New Year Eve!",
      image: work3,
      description: "Enjoy special New Year discounts",
    },
  ];

  // is there delivery area in my area
  const area = [
    {
      title: "Select Your Area!",
      image: work1,
      description: "Choose your delivery area",
    },
    {
      title: "Choose Your Sub-Area",
      image: work2,
      description: "Select a sub-area within your region",
    },
    {
      title: "Verify Delivery",
      image: work3,
      description: "Confirm if delivery is available",
    },
  ];

  const [data, setData] = useState(work);

  return (
    <div>
      <div className=" flex justify-evenly">
        <div className="flex flex-col justify-between space-y-3 w-fit">
          <button className="btnFAQ" onClick={() => setData(work)}>
            How does Order.PK work?
          </button>
          <button className="btnFAQ" onClick={() => setData(payment)}>
            What payment methods are accepted?
          </button>
          <button className="btnFAQ" onClick={() => setData(track)}>
            Can I track my order in real-time?
          </button>
          <button className="btnFAQ" onClick={() => setData(discount)}>
            Are there any special discounts or promotions available?
          </button>
          <button className="btnFAQ" onClick={() => setData(area)}>
            Is Order.PK available in my area?
          </button>
        </div>
        <div className=" flex  space-x-5">
          {data.map((item) => (
            <div
              key={item.title}
              className="bg-[#D9D9D9] h-56 w-48 rounded-lg flex flex-col justify-center text-center space-y-2"
            >
              <p className="font-bold text-sm text-center "> {item.title}</p>
              <img src={item.image} alt="" className="h-1/2 w-2/4 mx-auto" />
              <p className="text-sm font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
