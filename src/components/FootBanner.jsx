import mainSub from "../assets/footerMain.png"
import download from "../assets/Group.png"
export default function FootBanner() {
  return (
    <div className="h-96 md:mx-28 mx-14 mt-8 ">
      <div className="bg-[#E0E1DC] h-[95%] z-0 relative flex justify-start pl-4 items-center ">
        {/* <div className=""></div> */}
        <img src={mainSub} alt=""  className=" w-2/5 pb-2 pl-2 h-[105%] z-20"/>
        <div className="space-y-4 z-10 absolute right-60 top-12 w-1/2">
            {/* <div className=" border-2 border-red-500"> */}
            <h3 className="text-6xl text-center font-bold ">Order<span className="bg-[#FC8A0C] text-black font-extrabold px-1 text-xl inline-block transform -rotate-90 align-middle">.PK</span>ing is more</h3>
            <div className="rounded-xl z-10 h-8">
                <h3 className="text-4xl bg-black py-4 rounded-3xl text-center items-center underline-offset-2 pl-20 font-semibold text-white"> <span className="text-[#FC8A0C] border-b-2 border-[#FC8A0C]">Personalised</span> & Instant</h3>
                <p className="text-xl text-center mt-2">Download the Order.pk app for faster ordering</p>
                <img src={download} alt=""  className="absolute right-40 mt-4 h-10 w-80"/>
            </div>
            {/* </div> */}
        </div>
      </div>
    </div>
  )
}
