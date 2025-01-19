import React from "react";
import { Great_Vibes } from "next/font/google";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
import chef1 from "@/../public/Rectangle 8863 (1).png";
import chef2 from "@/../public/Rectangle 8863 (2).png";
import chef3 from "@/../public/Rectangle 8863 (3).png";
import chef4 from "@/../public/Rectangle 8863 (4).png";
import ChefCard from "./ChefCard";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const chefs = [
  {
    img: chef1,
    name: "D.Estwood",
    position: "Chief Chef",
  },
  {
    img: chef2,
    name: "D.Scoriesh",
    position: "Assistant Chef",
  },
  {
    img: chef3,
    name: "M. William",
    position: "Advertising Chef",
  },
  {
    img: chef4,
    name: "W.Readfroad",
    position: "Chef",
  },
];

const HomeChef = () => {
  return (
    <section className="max-w-screen-xl mx-auto bg-black text-white py-6 px-10">
      <div>
        <div>
          <h1
            className={`${great_vibe.className} text-center text-[#FF9F0D] text-3xl`}
          >
            Chefs
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-orange-500">Me</span>et Our Chef
          </h2>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-4">
          {chefs.map((chef, key) => (
            <div key={key}>
              <ChefCard
                img={chef.img}
                name={chef.name}
                position={chef.position}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/chef"
            className={`border border-[#FF9F0D] px-5 py-2 rounded-3xl font-normal text-[16px] ${inter.className}`}
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeChef;
