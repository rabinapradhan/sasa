import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules"; // ✅ fixed

const Services = () => {
  return (
    <div className="w-full select-none h-screen">
      <div className="h-[82px] bg-black"></div>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto font-muli flex flex-col items-center justify-center px-4 h-full text-center ">
              <p className="text-2xl text-gray-600 mt-12 tracking-widest">
                WHAT DO WE DO ?{" "}
              </p>
              <h1 className="md:text-5xl font-audrey text-3xl py-6 font-bold">
                Services We Provide
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full  h-screen">
            <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center px-4 h-full text-center">
              <h2 className="md:text-5xl font-bold font-audrey text-3xl inline-block">
                Construction:
              </h2>
              <p className=" font-muli md:text-2xl text-gray-800 text-xl py-6 text-center ">
                Sasa Developers offer a large assortment of construction based
                services such as: <br /> Residential Community- Housings,
                Apartment, Resident, Flat <br />
                Commercial Projects- Mall, Restaurants, Hotels, Office
                Buildings, Commercial Complex
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full text-center">
              <h2 className="md:text-5xl  text-3xl font-bold font-audrey inline-block">
                Site Improvements:
              </h2>
              <p className="text-black font-muli  md:text-2xl text-xl py-6  text-center mx-auto">
                Our team provides what is needed for the function of a property
                and the buildings such as parking lots, landscaping, swimming
                pool, water drainage systems and so on according to their
                proposed use, as well as to enhance the property’s appearance.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full text-center">
              <h2 className="md:text-5xl font-bold font-audrey text-3xl inline-block">
                Architectural Services:
              </h2>
              <p className="text-black text-center font-muli  py-6 mx-auto">
                <span className="text-2xl">Our process starts with:</span>
                <ul className="md:text-2xl text-xl pt-3">
                  <li>- Planning and site survey</li>{" "}
                  <li className="py-3">
                    - Concept design and sketch prototype
                  </li>
                  -3D architectural modeling
                  <li className="py-3">
                    - Final architectural design and build
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full text-center">
              <h2 className="md:text-5xl font-bold font-audrey text-3xl  inline-block">
                Interior Designing:
              </h2>
              <p className="text-black md:text-2xl text-xl font-muli text-center  py-6 mx-auto">
                Our company offers uniquely personalized interior design
                services keeping in mind about the detailed interior needs of
                our clients seriously. We create a functional and attractive
                environment that is beneficial to your quality of life. We
                design for you and not for us!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <div className="max-w-screen-lg   mx-auto flex flex-col items-center justify-center px-4 h-full text-center">
              <h2 className="md:text-5xl font-audrey font-bold text-3xl inline-block">
                Renovation:
              </h2>
              <p className="text-black md:text-2xl text-xl text-center font-muli py-6 mx-auto">
                Our team provides a custom proposal tailored to your renovation
                goals with a detailed scope of work. With your vision and our
                expertise, you can be sure that your renovation will capture
                your heart.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
