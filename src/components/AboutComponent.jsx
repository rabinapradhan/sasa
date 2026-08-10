import React, { useEffect } from "react";
import complex from "../assets/kuleshworcomplex.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutComponent = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-full text-black h-full select-none scroll-smooth z-50 bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto gap-12 items-center px-4 grid lg:grid-cols-2">
        <div>
          <img
            src={complex}
            className=" md:w-[600px] w-[400px] h-[400px] object-center md:h-[600px] my-4 object-cover mx-auto "
            alt="Kuleshwor complex"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          delay="300"
          data-aos-duration="600"
          className="w-full"
        >
          <h2 className="md:text-4xl  text-3xl md:w-[70%] font-audrey my-3 tracking-wide  ">
            WE ARE EXPERT IN CONSTRUCTION FIELD
          </h2>
          <p className="text-gray-600 md:text-xl text-lg text-justify  font-muli  py-4">
            Established in 2019 by our Founder Mr. Deepak Maharjan, Sasa
            Developers is a professionally experienced dedicated in Building
            constructions as well as Real Estate Development in Nepal that
            offers a wide range of services from pre construction to virtual
            design and construction to meet your building needs.
            <br />
            <br />
            Our Company delivers integrated construction services to build
            lasting success. When you partner with Sasa Developers, you not only
            get innovative solution but you also get our fully vested,
            hard-working trained professionals, architects and builders that
            will be with you every step of the way, so that our services
            exceeds.
          </p>
          <div className=" py-3 text-lg font-nunito bg-black w-[140px] rounded-md my-3 cursor-pointer font-medium text-center text-white">
            <Link to="/about">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
