import { useState, useEffect } from "react";
import client from "../client.js";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.jsx";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
        name,
        slug,
        status,
        mainImage{
          asset->{_id, url},
          alt
        }
      }`,
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full select-none h-full py-14">
      <div className="bg-black h-[72px] absolute top-0 left-0 w-full"></div>
      {projects ? (
        <div>
          <p className="text-center md:text-3xl text-2xl font-nunito py-14 bg-[#eaeaea]">
            “ We shape our buildings, thereafter, they shape us.” <br /> -{" "}
            <span className="md:text-xl text-lg tracking-wide font-nunito text-gray-600">
              Winston Churchill
            </span>
          </p>

          <h1 className="md:text-5xl py-14 text-3xl w-full text-center">
            <span className="border-b-2 pb-7 font-audrey font-bold inline-block">
              Our Done Projects
            </span>
          </h1>

          <div className="max-w-screen-xl mx-auto my-10 px-4">
            <div className="grid md:grid-cols-3 mt-6 gap-3">
              {projects.map((project, index) => (
                <Link
                  to={`/project/${project.slug.current}`}
                  key={project.slug.current}
                >
                  <div key={index}>
                    {project.mainImage?.asset?.url && (
                      <div className="w-full group relative h-full">
                        <img
                          src={project.mainImage.asset.url}
                          alt={project.mainImage.alt}
                          className="group-hover:brightness-50 duration-500 w-[500px] h-[300px] object-cover ease-in-out"
                        />
                        <div className="opacity-0 font-muli group-hover:opacity-100 duration-500 ease-in-out text-center absolute inset-0 z-10 flex justify-center items-center md:text-2xl text-xl text-white font-semibold">
                          {project.name}
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Projects;
