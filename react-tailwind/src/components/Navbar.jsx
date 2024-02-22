import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none flex sm:flex hidden   justify-end items-center flex-1">
        {navLinks.map((nav, idx) => (
          <li
            key={idx}
            className={`font-poppins
          cursor-pointer font-normal text-[16px] text-white ${
            idx == navLinks.length - 1 ? "mr-0" : "mr-10"
          } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain w-[28px] h-[28px]"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} 
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col items-center flex-1">
            {navLinks.map((nav, idx) => (
              <li
                key={idx}
                className={`font-poppins
          cursor-pointer font-normal text-[16px] text-white ${
            idx == navLinks.length - 1 ? "mb-0" : "mb-6"
          } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
