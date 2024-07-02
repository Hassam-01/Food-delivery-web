import id from "../assets/ID Verified.png"
import track from "../assets/Tracking.png"
import clock from "../assets/Clock.png"


export default function Timing() {
  return (
    <div className="md:mx-28 mx-14 mt-8 rounded-xl shadow-md flex gap-0">
    <div className=" bg-[#FBFBFB] py-8 px-6 w-4/6 flex  justify-between">
        <div className="flex flex-col space-y-4">
          <div className="flex gap-2 items-center">
            <img src={track} alt="" className="h-8 w-8" />
            <h4 className="text-2xl font-bold text-[#03081F]">Delivery Information</h4>
          </div>
          <div className="space-y-3 ">
            <p className="text-sm text-[#03081F] "><span className="font-bold">Moday: </span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Tuesday: </span>8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Wednesday: </span>8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Thursday: </span>8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Friday: </span>8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Saturday: </span>8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Sunday: </span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
            <p className="text-sm text-[#03081F] "><span className="font-bold">Estimated time until delivery: </span>20 mins</p>
          </div>
        </div>
        <div className="flex  space-y-4 flex-col">
          <div className="flex gap-2 items-center">
            <img src={id} alt="" className="h-8 w-8" />
            <h4 className="text-2xl font-bold text-[#03081F]">Contact Information</h4>
          </div>
          <div className="space-y-3">
          <p className="text-sm text-[#03081F] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p className="text-sm text-[#03081F] ">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p className="text-sm text-[#03081F] ">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-sm text-[#03081F] ">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-sm text-[#03081F] font-bold">Phone Number</p>
            <p className="text-sm text-[#03081F] ">03123456789</p>
            <p className="text-sm text-[#03081F] font-bold">Website</p>
            <p className="text-sm text-[#03081F] ">Lorem, ipsum dolor.</p>
          </div>
        </div>
    </div>
      <div className="w-1/3 bg-[#03081F] py-8 px-6 ">
      <div className="flex flex-col space-y-5">
          <div className="flex gap-2 items-center">
            <img src={clock} alt="" className="h-8 w-8"/>
            <h4 className="text-2xl font-bold text-white">Operational Timing</h4>
          </div>
          <div className="space-y-3 ">
            <p className="text-xs text-white "><span className="font-bold">Moday: </span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
            <p className="text-xs text-white "><span className="font-bold">Tuesday: </span>8:00 AM–3:00 AM</p>
            <p className="text-xs text-white "><span className="font-bold">Wednesday: </span>8:00 AM–3:00 AM</p>
            <p className="text-xs text-white "><span className="font-bold">Thursday: </span>8:00 AM–3:00 AM</p>
            <p className="text-xs text-white "><span className="font-bold">Friday: </span>8:00 AM–3:00 AM</p>
            <p className="text-xs text-white "><span className="font-bold">Saturday: </span>8:00 AM–3:00 AM</p>
            <p className="text-xs text-white "><span className="font-bold">Sunday: </span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
          </div>
        </div>
      </div>

    </div>
  );
}
