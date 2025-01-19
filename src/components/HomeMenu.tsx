import React from "react";
import image1 from "@/../public/unsplash_Lv174o7fn7Y.png";
import image2 from "@/../public/unsplash_INjdgkCwHp0 (1).png";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import HomeFoodCard from "./HomeFoodCard";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

const mealtime = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desert",
  "Drinks",
  "Snacks",
  "Soups",
];
const fooditems = [
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
  {
    name: "Lettuce Leaf",
    desc: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: image1,
  },
];
const HomeMenu = () => {
  return (
    <section className="max-w-screen-xl mx-auto bg-black text-white py-6 px-10">
      <div>
        <div>
          <h1
            className={`${great_vibe.className} text-center text-[#FF9F0D] text-3xl`}
          >
            Choose & Pick
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-orange-500">Fr</span>om Our Menu
          </h2>
        </div>
        <div className="flex max-w-screen-md justify-between mx-auto flex-wrap">
          {mealtime.map((meal, key) => (
            <div key={key} className="flex">
              {meal === "Breakfast" ? (
                <h1 className="text-[#FF9F0D]">{meal}</h1>
              ) : (
                <h1>{meal}</h1>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex max-w-screen-xl justify-between mx-auto w-full flex-col items-center gap-5 lg:flex-row">
          <div className="relative justify-center items-center w-1/4 sm:ml-10 mr-5 hidden xl:flex">
            <div>
              <Image
                src={image2}
                alt=""
                width={100}
                height={100}
                className="w-[1000px]"
              />
            </div>
            <div className="absolute lg:top-0">
              <Image src={image1} alt="" width={230} height={100} />
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-evenly xl:w-3/4">
            {fooditems.map((item, key) => (
              <div key={key}>
                <HomeFoodCard
                  img={item.img}
                  foodName={item.name}
                  fooddesc={item.desc}
                  foodprice={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
