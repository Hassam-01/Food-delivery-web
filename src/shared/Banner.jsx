import main1 from "../assets/main1.png"
import main2 from "../assets/main2.png"
import notification from "../assets/notification.png"

export default function Banner({text1, text2_1, text2_2, text3, bgColor}) {

  return (
    <div className={`mt-6 lg:mx-28 mx-12  ${bgColor} flex `}>
      <div className="md:w-[40%] px-4 py-24  space-y-4 z-0">
        <p className={`text-sm md:font-semibold text-${bgColor === "bg-black"?"white":"black"}`}>{text1}</p>
        <p className={`text-5xl text-${bgColor === "bg-black"?"white":"black"} font-bold`}> {text2_1} <span className="text-[#FC8A06]">{text2_2}</span></p>
        <div className="space-y-2">
          <p className={`text-${bgColor === "bg-black"?"white":"black"} text-xs`}>
            {text3}
          </p>
          <div>
          <input type="email" name="email" placeholder="e.g. ECR45 3TE" className="bg-white py-2 px-4 rounded-md focus:outline-none" />
          <input type="submit"value="Search" className="px-4 py-2 bg-[#FC8A06] rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center relative z-10 left-[-220px] ">
          <img src={main1} alt="" className="h-96 left-0 absolute z-20 bottom-0"  />
          <img src={main2} alt=""  className="h-80 absolute bottom-0 left-96 z-10 -right-96"/>
          {/* <img src={notification} alt="" /> */}
          <div className=" bg-[#FC8A06] absolute -right-[350px] bottom-0 h-[95%] w-2/3 rounded-tl-[200px]">
            <div className="px-20 space-y-0">
            <img src={notification} alt="" className="w-80 h-32" />
            <img src={notification} alt="" className="w-80 h-32 ml-8" />
            <img src={notification} alt="" className="w-80 h-32 " />
            </div>
          </div>
      </div>
    </div>
  )
}
