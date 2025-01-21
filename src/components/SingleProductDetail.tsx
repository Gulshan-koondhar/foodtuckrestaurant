"use client";
import {
  Facebook,
  Instagram,
  ShoppingBag,
  Twitter,
  Youtube,
} from "lucide-react";
import { Inter } from "next/font/google";

import React from "react";

import { useCart } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });
const SingleProductDetail = ({
  id,
  name,
  desc,
  price,
  originalPrice,
  image,
  category,
}: {
  id: string;
  name: string;
  desc: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
}) => {
  const { addToCart } = useCart();
  const handleAddtoCart = () => {
    addToCart({ name, price, image, quantity: 1, id });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="bg-[#FF9F0D] p-2 rounded-md text-white">In Stock</h1>
      </div>
      <div>
        <h1 className="font-helvetica text-5xl text-[#333333] font-bold">
          {name}
        </h1>
        <p className={`text-xl font-normal ${inter.className} text-[#4f4f4f]`}>
          {desc}
        </p>
      </div>
      <hr className="bg-[#E0E0E0]" />
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <p
            className={`text-2xl font-normal text-[#FF9F0D] ${inter.className}`}
          >
            $ {price}
          </p>
          <p
            className={`text-2xl font-normal ${inter.className} line-through text-[#828282]`}
          >
            $ {originalPrice}
          </p>
        </div>
        {/* <div>
          <Image src={rating} alt="" width={200} height={100} />
        </div> */}
        <div className="flex gap-3">
          {/* <div className="flex">
            <button className="px-3 border-black border flex justify-center items-center py-2">
              -
            </button>
            <div className="px-3 border-black border flex justify-center items-center py-2">
              
            </div>
            <div className="px-3 border-black border flex justify-center items-center py-2">
              +
            </div>
          </div> */}
          <div>
            <button
              className="flex gap-1 bg-[#FF9F0D] px-4 py-2 text-white"
              onClick={handleAddtoCart}
            >
              <ShoppingBag /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-[#E0E0E0]" />
      <div className="flex flex-col gap-3">
        <div>
          <h1
            className={`${inter.className} text-xl font-normal text-[#333333]`}
          >
            Category : {category}
          </h1>
          <h1
            className={`${inter.className} text-xl font-normal text-[#333333]`}
          >
            Tag : Our Shop
          </h1>
          <div className="flex gap-2 text-xl">
            Share :
            <div className="flex gap-2">
              <Facebook />
              <Twitter />
              <Youtube />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
