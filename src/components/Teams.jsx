import React, { useState, useEffect } from "react";
import client from "../client.js";

const Teams = () => {
  const [teamsData, setTeams] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "team"] | order(order asc){
        name,
        slug,
        role,
        mainImage{asset->{url}}
      }`,
      )
      .then((data) => setTeams(data))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full py-14 px-2 h-auto">
      <div className="max-w-screen-xl border-2 py-14 mx-auto">
        <h1 className="md:text-4xl font-audrey font-bold text-3xl w-full text-center">
          Meet Our Teams
        </h1>
        <p className="text-center mt-4 text-gray-600 py-3 text-xl">
          We are a team coming from different backgrounds and bringing
          high-level skills to the table.
        </p>
        <div className="grid md:grid-cols-4 py-14 gap-3">
          {teamsData.map((team, index) => (
            <div className="flex-cols" key={index}>
              {team.mainImage?.asset?.url && (
                <img
                  src={team.mainImage.asset.url}
                  className="w-[270px] h-[310px] mx-auto object-cover object-top"
                  alt={team.name}
                />
              )}
              <div className="text-center my-3">
                <h2 className="font-bold text-xl font-muli">{team.name}</h2>
                <span className="text-gray-600 font-muli text-lg tracking-wider">
                  {team.role}
                </span>
              </div>
            </div>
          ))}
          {teamsData.length === 0 && (
            <p className="text-center col-span-full">No team members yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teams;
