import social from "../assets/Group.png";
import fb from "../assets/Facebook.png";
import sc from "../assets/Snapchat.png";
import insta from "../assets/Instagram.png";
import X from "../assets/TikTok.png";



export default function Footer() {
  return (
    <div className="w-full bg-[#d9d9d9] mt-8 ">
      <div className="md:px-28 px-14 py-16 flex justify-center">
        <div className=" space-y-5">
          <h3 className="text-5xl font-bold">
            Order
            <span className="text-lg  font-extrabold bg-[#b6b5b5] inline-block transform -rotate-90 align-middle ">
              .PK
            </span>
          </h3>
          <img src={social} alt="" className="w-4/5 " />
          <p className="w-3/4">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className="flex justify-evenly gap-8">
          <div className="space-y-6">
            <h4 className="text-lg font-bold">
              Get Exclusive Deals in your Inbox
            </h4>
            <div>
              <input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                className="bg-[#cfcece] text-black text-opacity-60 placeholder:text-opacity-80 py-2 px-12 rounded-3xl focus:outline-none"
              />
              <input
                type="submit"
                value="Subscribe"
                className="px-6 py-2 bg-[#FC8A06] rounded-3xl -ml-10 text-white cursor-pointer hover:bg-green-600 hover:text-primary duration-300 transition-all"
              />
            <p className="text-sm mx-4 text-opacity-80">we wont spam, read our email policy</p>
            </div>
            <div className="flex gap-2">
                <img src={fb} alt="" className="h-10 w-10" />
                <img src={sc} alt="" className="h-10 w-10" />
                <img src={insta} alt="" className="h-10 w-10" />
                <img src={X} alt="" className="h-10 w-10" />
            </div>
          </div>
          <div className="flex flex-col  space-y-4">
            <h4 className="text-lg font-bold">Legal Pages</h4>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Terms and conditions</a>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Privacy</a>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Cookies</a>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Modern Slavery Statemnent</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold">Important Links</h4>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Get Help</a>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Add your restaurant</a>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Sign up to deliver</a>
            <a href="/" className="text-sm text-gray-700 border-b-2 border-gray-700 w-fit">Create a business account</a>
          </div>
        </div>
      </div>

      <div className="bg-[#03081F] w-full ">
        <div className="md:mx-28 mx-14 flex justify-between py-4">
            <p className="text-white text-sm">Order.pk Copyright 2024, All Rights Reserved.</p>
            <div className="flex gap-8">
                <a href="/" className="text-sm text-white">Privacy Policy</a>
                <a href="/" className="text-sm text-white">Terms</a>
                <a href="/" className="text-sm text-white">Pricing</a>
                <a href="/" className="text-sm text-white">Do not sell or share my personal information</a>
            </div>

        </div>
      </div>
    </div>
  );
}
