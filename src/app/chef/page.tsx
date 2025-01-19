import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import chef1 from "@/../public/chef1.png";
import chef2 from "@/../public/chef2.png";
import chef3 from "@/../public/chef3.png";
import chef4 from "@/../public/chef4.png";
import chef5 from "@/../public/chef5.png";
import chef6 from "@/../public/chef6.png";
import chef7 from "@/../public/chef7.png";
import chef8 from "@/../public/chef8.png";
import chef9 from "@/../public/chef9.png";
import chef10 from "@/../public/chef10.png";
import chef11 from "@/../public/chef11.png";
import chef12 from "@/../public/chef12.png";
import ChefPageCard from "@/components/ChefPageCard";
const chefs = [
  {
    img: chef1,
    name: "Tahmina Rumi",
  },

  {
    img: chef2,
    name: "Bisnu devgon",
  },
  {
    img: chef3,
    name: "William Rumi",
  },
  {
    img: chef4,
    name: "Ataur Rahman",
  },
  {
    img: chef5,
    name: "Monalisa holly",
  },
  {
    img: chef6,
    name: "Mahmud kholil",
  },
  {
    img: chef7,
    name: "Kets william roy",
  },
  {
    img: chef8,
    name: "Motin Molladsf",
  },
  {
    img: chef9,
    name: "Tahmina Rumi",
  },
  {
    img: chef10,
    name: "Munna Kathy",
  },
  {
    img: chef11,
    name: "M.Mohammad",
  },
  {
    img: chef12,
    name: "Jorina Begum",
  },
];
const page = () => {
  return (
    <>
      <Header />
      <Hero image={banner} heading="Our Chefs" path="Chef" />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 px-5 py-6">
        {chefs.map((chef, key) => (
          <div key={key}>
            <ChefPageCard img={chef.img} name={chef.name} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
