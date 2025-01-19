import {
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import chef from "@/../public/chef1.png";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import star from "@/../public/star - Copy.png";
import { blogMenu, blogPost } from "@/constants/share";
import BlogPostCard from "./BlogPostCard";
import BlogMenuCard from "./BlogMenuCard";
import image from "@/../public/product1.png";
import image2 from "@/../public/product2.png";
import image3 from "@/../public/product3.png";
import image4 from "@/../public/product4.png";
const tags = [
  "Sandwich",
  "Tikka",
  "bbq",
  "Resturant",
  "Chicken Shawarma",
  "Health",
  "Fast Food",
  "Food",
  "Pizza",
  "Burger",
  "Chicken",
];
const BlogNews = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex justify-center  border-1 ">
        <form action="" className="flex justify-between w-full">
          <input
            type="text"
            placeholder="Search Product"
            className={`bg-[#FF9F0D] bg-opacity-10 w-full text-[16px] font-normal ${inter.className} p-2`}
          />
          <div className="bg-[#FF9F0D] flex justify-center items-center px-2">
            <Search />
          </div>
        </form>
      </div>

      <div className="flex flex-col border border-gray-400 w-full p-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={chef}
            alt=""
            width={100}
            height={100}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="font-bold text-xl font-helvetica">Prince Miyako</h1>
            <p
              className={`font-normal text-[16px] ${inter.className} text-[#828282]`}
            >
              Blogger/Photographer
            </p>
            <div className="flex gap-1">
              <Image src={star} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
              <Image src={star} alt="" width={20} height={20} />
              <p
                className={`font-normal text-sm ${inter.className} text-[#828282]`}
              >
                (1 Review)
              </p>
            </div>
            <p className="font-helvetica text-[16px] font-normal text-[#828282] text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
              distinctio, odio eligendi suscipit reprehenderit atque
            </p>
            <div className="flex gap-2">
              <Facebook />
              <Twitter />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-gray-400">
        <h1 className="text-lg font-bold py-5 px-8">Recent Posts</h1>

        {blogPost.map((post, key) => (
          <div className="px-4" key={key}>
            <BlogPostCard img={post.img} title={post.title} date={post.date} />
            <hr />
          </div>
        ))}
      </div>

      <div className=" border border-gray-400">
        <h1 className="text-lg py-5 px-8 font-bold">Filter By Menu</h1>

        {blogMenu.map((menu, key) => (
          <div key={key} className="px-8">
            <BlogMenuCard
              img={menu.img}
              title={menu.title}
              price={menu.price}
            />
          </div>
        ))}
      </div>

      <div className=" border border-gray-400">
        <h1 className="text-lg py-5 px-8 font-bold">Popular Tags</h1>

        <div className="flex flex-wrap px-8 gap-4  pb-4">
          {tags.map((tag, key) => (
            <div key={key} className="">
              <h1 className="px-3 py-2 border w-max">{tag}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className=" border border-gray-400">
        <h1 className="text-lg py-5 px-8 font-bold">Photo Galary</h1>

        <div className="flex flex-wrap items-center justify-center px-8 gap-4  pb-4">
          <Image src={image} alt="" width={100} height={100} />
          <Image src={image2} alt="" width={100} height={100} />
          <Image src={image} alt="" width={100} height={100} />
          <Image src={image2} alt="" width={100} height={100} />
          <Image src={image3} alt="" width={100} height={100} />
          <Image src={image4} alt="" width={100} height={100} />
        </div>
      </div>

      <div className=" border border-gray-400">
        <h1 className="text-lg py-5 px-8 font-bold">Follow us</h1>
        <div className="flex justify-center items-center my-6 gap-3">
          <Facebook className="bg-[#FAF7F2]  w-8 h-8  p-2" />
          <Twitter className="bg-[#FAF7F2]  w-8 h-8  p-2" />
          <Youtube className="bg-[#ff9f0d]  text-white w-8 h-8 p-2" />
          <Instagram className="bg-[#FAF7F2] w-8 h-8  p-2" />
          <Linkedin className="bg-[#FAF7F2]  w-8 h-8  p-2" />
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
