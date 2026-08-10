import React from "react";
import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import Hero from "../components/Hero";
import Phrase from "../components/Phrase";
import ProjectList from "../components/ProjectList";

const Home = () => {
  return (
    <div className="w-screen h-full">
      <Hero />
      <Phrase />
      <AboutComponent />
      <ProjectList />
      <ContactComponent />
    </div>
  );
};

export default Home;
