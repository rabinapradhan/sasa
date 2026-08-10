import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/bg-white.svg";
import { CgPhone } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri";
import Copyright from "./Copyright";
const Footer = () => {
  const social = [
    {
      id: 1,
      badge: <BsFacebook />,
      href: "https://www.facebook.com/sasadevelopers9/",
    },
    {
      id: 2,
      badge: <BsInstagram />,
      href: "https://www.instagram.com/sasa_developers/",
    },
  ];
  return (
    <div className="w-full   bg-[#eaeaea] select-none scroll-smooth text-black h-full ">
      <div className="max-w-[1240px] mx-auto px-4 py-4 font-muli grid md:grid-cols-3 gap-8 ">
        <div className="w-full px-4">
          <h2 className="text-2xl font-bold font-audrey">About Us</h2>
          <img src={logo1} alt="" className="w-[130px]   bg-transparent" />

          <p className="py-2  text-lg">
            Our services includes: <br />
            Construction, Site improvements, Architectural Services, Interior
            Designing and Renovations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-audrey font-bold">Working Hours</h2>
          <div className="flex justify-between text-lg text-black py-4 border-b-2 border-gray-300 items-center">
            <p>Sunday-Friday</p>
            <span className="text-bold pl-4">10 AM - 6 PM</span>
          </div>
          <div className="flex justify-between text-lg text-black py-4 border-b-2 border-gray-300 items-center">
            <p>Saturday</p>
            <span className="text-bold pl-4">Closed</span>
          </div>

          <ul className=" text-lg text-black pt-4">
            <li className="flex  items-center">
              <CgPhone size={20} />
              <span className="pl-6">+977 9841520000, +977 9803180725</span>
            </li>
            <li className="flex py-3 items-center">
              <FiMail size={20} />
              <span className="pl-6">sasadevelopers9@gmail.com</span>
            </li>
            <li className="flex items-center">
              <HiOutlineLocationMarker size={20} />
              <span className="pl-6">Kuleshwor, Kathmandu Nepal</span>
            </li>
          </ul>

          <div className="py-4 items-center justify-start flex">
            {social.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 text-2xl"
              >
                {item.badge}
              </a>
            ))}
          </div>
        </div>

        <div className=" md:pl-10 ">
          <h2 className="text-2xl  font-bold font-audrey">Quick Links</h2>
          <ul className="text-lg text-center">
            <li className="py-2 flex items-center">
              <RiArrowDropRightLine size={30} />
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 flex items-center">
              <RiArrowDropRightLine size={30} />
              <Link to="/about">About</Link>
            </li>
            <li className="py-2 flex items-center">
              <RiArrowDropRightLine size={30} />
              <Link to="/service">Services</Link>
            </li>
            <li className="py-2 flex items-center ">
              <RiArrowDropRightLine size={30} />

              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
