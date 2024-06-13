import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";

export default function Navbar() {
  const navItems = [
    { link: "Home", path: "/home" },
    { link: "Menu", path: "/menu" },
    { link: "Offers", path: "/offers" },
    { link: "Restaurants", path: "/restaurants" },
    { link: "Track", path: "/track" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between lg:mx-28 mt-12 items-center mx-12 space-x-14">
      <div>
        <span className="text-black text-4xl font-bold">
          ORDER.<span className="text-xl">pk</span>
        </span>
      </div>
      <div className="hidden md:flex justify-between md:space-x-2 items-center lg:space-x-5">
        {navItems.map(({ link, path }) => (
          <a
            href={path}
            key={link}
            className="font-semibold hover:bg-[#FC8A06] transition-all duration-300 hover:text-white hover:rounded-3xl px-4 py-2"
          >
            {link}
          </a>
        ))}
        <button className="bg-[#03081F] text-white rounded-3xl px-4 py-2 text-sm ]">
          login/signup
        </button>
      </div>

      <button onClick={toggleMenu} className="md:hidden flex items-center">
        {isMenuOpen ? (
          <HiXMark className="w-6 h-6 text-primary" />
        ) : (
          <GrMenu className="w-6 h-6" />
        )}
      </button>
      <div
        className={`space-y-4 pb-5 py-8 w-full pl-14 -right-0 items-center mt- md:top-32 top-24 ${
          isMenuOpen ? " bg-[#edededc8] fixed block" : "hidden"
        } transition-all duration-500`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            onClick={toggleMenu}
            className="text-black block hover:text-gray-300"
          >
            {link}
          </a>
        ))}
        <button
          onClick={toggleMenu}
          className="bg-[#03081F] text-white rounded-3xl px-4 py-2 block"
        >
          login/signup
        </button>
      </div>
    </div>
  );
}
