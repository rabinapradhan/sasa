import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules"; // ✅ fixed
import client from "../client.js";
import "../styles/styles.css";
const ProjectList = () => {
  const [projectDisplay, setProjectDisplay] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
        mainImage{
          asset->{url}
        }
      }`,
      )
      .then((data) => setProjectDisplay(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full h-full scroll-smooth select-none md:h-screen px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 h-full">
        <div
          className="px-8"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <span className="md:text-3xl text-2xl font-muli text-gray-500 tracking-[1rem]">
            PROJECTS
          </span>
          <h1 className="md:text-5xl text-4xl mt-3 font-audrey">
            OUR DONE <br /> <span className="font-bold">PROJECTS</span>
          </h1>
          <p className="py-6 font-muli text-gray-600 md:text-xl text-lg">
            At Sasa Developers, We listen to your needs, design it to your
            specifications and build it to your Dreams!
          </p>
          <Link
            to="/project"
            className="cursor-pointer hover:translate-x-4 ease-linear duration-300 flex items-center text-black py-4"
          >
            <span className="pr-3 md:text-3xl text-2xl text-gray-600 font-muli font-bold">
              View All Projects
            </span>
            <AiOutlineArrowRight className="text-gray-600" size={40} />
          </Link>
        </div>

        <Swiper
          direction="horizontal"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="mySwiper h-[300px] md:h-full w-full"
        >
          {projectDisplay.map((list, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full md:h-screen pt-4 md:pt-0 items-center">
                {list.mainImage?.asset?.url && (
                  <img src={list.mainImage.asset.url} alt="Project" />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectList;
