import React from "react";
import Card from "./Card";
import { Search } from "lucide-react";

import { Inter } from "next/font/google";
import Categories from "./Categories";

import Link from "next/link";
import { client } from "@/sanity/lib/client";
const inter = Inter({ subsets: ["latin"] });
export interface IProduct {
  name: string;
  available: boolean;
  currentSlug: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
}
const Products = async () => {
  const query = `*[_type == "food"]{
  name,available,"currentSlug": slug.current, 
    "imageUrl": image.asset->url,price,originalPrice
}`;

  const data: IProduct[] = await client.fetch(query);

  return (
    <div className="max-w-screen-xl mx-auto py-4 px-4">
      <div className="flex flex-col lg:flex-row  justify-between w-full gap-3">
        <div className="flex flex-wrap gap-2 h-max w-full lg:w-2/3">
          {data.map((product: IProduct, i: number) => (
            <div key={i} className="">
              <Link href={`/shop/${product.currentSlug}`}>
                <Card
                  name={product.name}
                  image={product.imageUrl}
                  dprice={product.price}
                  aprice={product.originalPrice}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 border py-2 px-4">
          <form action="" className="flex justify-between">
            <input
              type="text"
              placeholder="Search Product"
              className={`bg-[#FF9F0D] bg-opacity-10 w-full text-[16px] font-normal ${inter.className} p-2`}
            />
            <div className="bg-[#FF9F0D] flex justify-center items-center px-2">
              <Search />
            </div>
          </form>
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Products;
