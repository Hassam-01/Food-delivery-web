import img1 from "../assets/Group 8.png"
import img2 from "../assets/Group 9.png"


export default function Join() {
  return (
    <div className="lg:mx-28 mx-14 mt-8 flex justify-between space-x-2">
      <div className=" relative">
        <img src={img1} alt="" className="z-0"/>
        <p className="bg-white lg:w-52 text-center text-black z-10 top-0 absolute p-2 rounded-b-xl text-sm font-bold left-32">Earn more wiht lower fees</p>
        <div className="absolute bottom-10 pb-20 space-y-2 pl-10 py-20 ">
        <a href="/" className="z-10 text-[#FC8A0C] font-semibold">Sign up as a business</a>
        <h3 className="z-10 text-white font-bold text-3xl">Partner with us</h3>
        <a href="" className="z-10 font-semibold mt-20 absolute bottom-5 rounded-3xl bg-[#FC8A06] transition-all duration-300 hover:text-white text-white px-4 py-2">Get Started</a>
        </div>
      </div>
      <div className=" relative">
        <img src={img2} alt="" className="z-0"/>
        <p className="bg-white lg:w-52 text-center text-black z-10 top-0 absolute p-2 rounded-b-xl text-sm font-bold left-32">Avail exclusive perks</p>
        <div className="absolute bottom-10 pb-20 space-y-2 pl-10 py-20 ">
        <a href="/" className="z-10 text-[#FC8A0C] font-semibold">Sign up as a rider</a>
        <h3 className="z-10 text-white font-bold text-3xl">Ride with us</h3>
        <a href="" className="z-10 font-semibold mt-20 absolute bottom-5 rounded-3xl bg-[#FC8A06] transition-all duration-300 hover:text-white text-white px-4 py-2">Get Started</a>
        </div>
      </div>
    </div>
  )
}
