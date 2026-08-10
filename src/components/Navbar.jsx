import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/background.svg";
const Navbar = () => {
  const [scroll, setScrollbg] = useState(false);
  const [nav, setNav] = useState(false);
  let location = useLocation();
  useEffect(() => {
    setNav(false);
  }, [location]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const changeBg = () => {
    if (window.scrollY >= 72) {
      setScrollbg(true);
    } else {
      setScrollbg(false);
    }
  };
  const handleNav = () => {
    setNav(!nav);
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div
      className={
        scroll
          ? "w-screen z-20 text-white fixed ease-linear px-4 duration-1000 md:h-[72px] h-[72px] bg-[#333] "
          : "w-screen fixed z-20 text-white  px-4 ease-linear duration-1000 lg:bg-transparent bg-black h-[720x] md:h-[72px]"
      }
    >
      <div className=" max-w-screen-lg select-none w-full  mx-auto flex h-full items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[80px]  h-[80px]  object-cover "
          />
        </Link>

        <div className="md:flex text-lg  font-open hidden">
          <Link className="p-3 " to="/">
            Home
          </Link>
          <Link className="p-3  " to="/about">
            About
          </Link>
          <Link className="p-3" to="/project">
            Projects
          </Link>
          <Link className="p-3 " to="/service">
            Services
          </Link>
          <Link className="p-3" to="/contact">
            Contact
          </Link>
        </div>
        <div
          className="block md:hidden text-white mr-4  z-50  cursor-pointer"
          onClick={handleNav}
        >
          {nav ? (
            <AiOutlineClose size={26} className="text-white  z-50" />
          ) : (
            <AiOutlineMenu size={26} className="text-white z-50" />
          )}
        </div>
        <div
          className={
            nav
              ? "md:hidden font-open text-lg fixed z-30 right-0 top-0 px-4  w-[60%]  flex flex-col items-center justify-center h-full text-white bg-[#333] ease-in-out duration-500"
              : " md:hidden font-open text-lg fixed w-[60%] top-0 right-[-100%] flex flex-col items-center justify-center h-full bg-[#333] ease-in-out duration-500"
          }
        >
          <Link className="p-3  text-xl" to="/">
            Home
          </Link>
          <Link className="p-3 text-xl" to="/about">
            About
          </Link>
          <Link className="p-3   text-xl" to="/project">
            Projects
          </Link>
          <Link className="p-3 text-xl" to="/service">
            Services
          </Link>
          <Link className="p-3 text-xl" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
