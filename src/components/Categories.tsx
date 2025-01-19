import Image from "next/image";
import React from "react";
import image from "../../public/Rectangle 8879.png";
import { Inter } from "next/font/google";
import { CircleArrowRight } from "lucide-react";
import PriceFilter from "./PriceFilter";
import LatestProducts from "./LatestProducts";
const inter = Inter({ subsets: ["latin"] });
const categories = [
  "Sandwiches",
  "Burger",
  "Chicken Chup",
  "Drink",
  "Pizza",
  "Thi",
  "Non Veg",
  "Uncategorized",
];
const Categories = () => {
  return (
    <div>
      <h1 className="text-xl font-bold font-helvetica my-2">Category</h1>
      {categories.map((category, i) => (
        <li key={i} className="list-none flex gap-3 flex-col">
          <h1 className="mb-2">
            <input type="checkbox" />
            <span> {category}</span>
          </h1>
        </li>
      ))}
      <div className="relative bg-black bg-opacity-50 w-[250px]">
        <Image src={image} alt="" width={250} height={280} />

        <div className="absolute top-5 left-5 ">
          <h3 className={`text-white text-[16px] font-bold ${inter.className}`}>
            Perfect Taste
          </h3>
          <h1 className="text-white font-helvetica font-bold text-xl">
            Classic Restaurant
          </h1>
          <p className={`text-[#FF9F0D] font-bold ${inter.className}`}>
            45.00$
          </p>
          <button
            className={`font-normal text-white flex gap-2 absolute -bottom-32 border-b-2 text-[16px] ${inter.className}`}
          >
            Shop Now <CircleArrowRight />
          </button>
        </div>
      </div>
      <PriceFilter />
      <LatestProducts />
    </div>
  );
};

export default Categories;
