import React from "react";

import ceo from "../assets/ceo.jpg";

import Teams from "../components/Teams";

const About = () => {
  return (
    <div className="w-full h-full scroll-smooth select-none py-14">
      <div className="bg-black h-[72px] absolute top-0 left-0 w-full"></div>
      <div className="max-w-[1240px] bg-white  text-black px-4  h-full mx-auto mt-14 gap-8 items-center grid md:grid-cols-2">
        <div className="w-full">
          <h2 className="md:text-5xl text-3xl font-audrey tracking-wide font-bold">
            Sasa Developers
          </h2>
          <p className="md:text-3xl text-2xl font-bold font-audrey my-3">
            From Concept to Creation
          </p>

          <div className="py-6  text-gray-600">
            <p className="text-justify  font-muli md:text-xl text-lg">
              Established in 2019 by our Founder Mr. Deepak Maharjan, Sasa
              Developers is a professionally experienced dedicated in Building
              constructions as well as Real Estate Development in Nepal that
              offers a wide range of services from pre construction to virtual
              design and construction to meet your building needs.
              <br />
              <br />
              Our Company delivers integrated construction services to build
              lasting success. When you partner with Sasa Developers, you not
              only get innovative solution but you also get our fully vested,
              hard-working trained professionals, architects and builders that
              will be with you every step of the way, so that our services
              exceeds.We conduct our business fairly, impartially in an ethical
              and proper manner and in full compliance with all applicable laws
              and regulations. Our team work’s ethically to help us make the
              right decision in everything we do which gives our customers,
              employees, sub contractors and suppliers the confidence to trust
              us and do business with us. Challenging and constrictive working
              environments have driven our innovative and creative approach.
              <br />
              <br />
              The work of Sasa Developers addresses new ways of understanding
              the often contradictory interrelations between the city,
              architecture, landscape and the world of interiors.
            </p>
          </div>
        </div>

        <div>
          <img
            src={ceo}
            className="object-cover w-[400px] mb-8 mx-auto  h-auto"
            alt="Company CEO"
          />
        </div>
      </div>

      <div className="bg-[#a3a3a3] w-full  md:h-[100px] h-[70px]">
        <div className="mx-auto max-w-screen-lg flex justify-center items-center h-full w-full">
          <h3 className="text-3xl font-audrey font-bold tracking-wider">
            Vision Statement
          </h3>
        </div>
      </div>
      <div className="bg-white w-full md:py-14 py-6 h-auto">
        <div className="mx-auto max-w-screen-xl px-4 flex justify-center items-center h-full w-full">
          <p className="md:text-xl text-lg font-muli text-gray-600">
            To value the importance of our relationships and to continue to
            remain loyal and fair in our dealings with all employees, clients,
            vendors and professional associates.
          </p>
        </div>
      </div>
      <div className="flex-col h-full w-full">
        <div className="bg-[#c7c7c7] w-full  md:h-[100px] h-[70px]">
          <div className="mx-auto max-w-screen-lg flex justify-center items-center h-full w-full">
            <h3 className="text-3xl font-bold font-audrey tracking-wider">
              Objective
            </h3>
          </div>
        </div>
        <div className="bg-white text-black  w-full md:py-10 py-5 h-auto">
          <div className="mx-auto max-w-screen-lg flex justify-center items-center px-4 h-full w-full">
            <p className="md:text-xl text-lg font-muli text-gray-600">
              <ul>
                <li className="py-2">
                  - To maintain a progressive, competitive construction industry
                </li>
                <li className="py-2 ">
                  - To ensure that the standards are met and goals are well
                  defined
                </li>
                <li className="py-2">
                  - To facilitate harmonious relationship between industry and
                  the consumer
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col h-full w-full">
        <div className="bg-[#eaeaea] w-full  md:h-[100px] h-[70px]">
          <div className="mx-auto max-w-screen-lg flex justify-center items-center h-full w-full">
            <h3 className="text-3xl font-bold font-audrey tracking-wider ">
              Values
            </h3>
          </div>
        </div>
        <div className="bg-white text-black  w-full md:py-10 py-5  h-auto">
          <div className="mx-auto max-w-screen-lg flex justify-center items-center px-4 h-full w-full">
            <p className="md:text-xl text-lg font-muli text-gray-600">
              <ul className="text-gray-600">
                <li className="py-2">
                  - Loyalty and fairness in every business deals
                </li>
                <li className="py-2">
                  - Commitment to Quality, safety and service
                </li>
                <li className="py-2">- Ideas over hierarchy</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Teams />
    </div>
  );
};

export default About;
