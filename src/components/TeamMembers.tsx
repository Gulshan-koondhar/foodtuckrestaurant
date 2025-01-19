import { Inter } from "next/font/google";
import React from "react";
import chef1 from "@/../public/chef2.png";
import ChefPageCard from "./ChefPageCard";
const inter = Inter({ subsets: ["latin"] });
const chefs = [
  { img: chef1, name: "Mark Henry" },
  { img: chef1, name: "Lucky Helen" },
  { img: chef1, name: "Moon Henry" },
  { img: chef1, name: "Tom Monrow" },
];
const TeamMembers = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 h-[1400px] sm:h-[400px] md:h-[450px] relative">
      <div className="bg-[#FF9F0D] bg-opacity-80 flex flex-col py-20 h-[300px] justify-center items-center text-white">
        <div className="text-center max-w-[300px] mx-auto -mt-28">
          <h1 className="font-helvetica font-bold text-4xl ">Team Members</h1>
          <p className={`font-normal text-[16px] ${inter.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 absolute top-40 z-30 items-center justify-center">
          {chefs.map((chef, key) => (
            <div key={key} className="bg-white text-black ">
              <ChefPageCard img={chef.img} name={chef.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
