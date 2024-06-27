import we from "../assets/we.jpg";


export default function We() {
  return (
    <div className="flex space-x-5">
    <div className="space-y-3">
      <h3 className="text-2xl font-bold ">ORDER<span className="text-[#FC8A06] text-lg">.PK</span></h3>
      <p className="font-semibold text-sm font-sans ">Order.PK is a leading online marketplace dedicated to providing a seamless and efficient shopping experience. Founded by visionary entrepreneur Hassam Ali, who also serves as our CEO, Order.PK is committed to bringing convenience and variety to our customers doorsteps. Our platform offers a wide range of products, ensuring that you can find everything you need with just a few clicks. At Order.PK, we strive to deliver quality, speed, and satisfaction in every order. Join us on our journey to revolutionize the way you shop!</p>
    </div>
      <div className="w-[900px] h-[200px]">
      <img src={we} alt="" className=" h-full w-full shadow-lg"/>
      </div>
    </div>
  )
}
