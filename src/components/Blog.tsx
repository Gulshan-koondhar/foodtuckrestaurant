import React from "react";
import blog1 from "@/../public/unsplash_dphM2U1xq0U (3).png";
import blog2 from "@/../public/unsplash_MqT0asuoIcU.png";
import blog3 from "@/../public/unsplash_lP5MCM6nZ5A (2).png";

import { Great_Vibes } from "next/font/google";
import HomeBlogCard from "./HomeBlogCard";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

const blogs = [
  {
    img: blog1,
    date: "10 February 2022 ",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
  },
  {
    img: blog2,
    date: "10 February 2022 ",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
  },
  {
    img: blog3,
    date: "10 February 2022 ",
    title: "Curabitur rutrum velit ac congue malesuada",
  },
];

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black px-10 text-white py-6">
      <div>
        <div>
          <h1
            className={`${great_vibe.className} text-center text-[#FF9F0D] text-3xl`}
          >
            Blog Post
          </h1>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 font-helvetica">
            <span className="text-orange-500">La</span>test News & Blog
          </h2>
        </div>
        <div className="flex justify-center items-center max-w-screen-md mx-auto gap-8 flex-col lg:flex-row">
          {blogs.map((blog, key) => (
            <div key={key}>
              <HomeBlogCard
                img={blog.img}
                title={blog.title}
                date={blog.date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
