import React from "react";

import Card2 from "./Card2";
import { client } from "@/sanity/lib/client";
import { IProduct } from "./Products";
import Link from "next/link";

const SimilarProducts = async ({ category }: { category: string }) => {
  const query = `*[_type == "food" && category == "${category}" ]{
  name,price, originalPrice,"currentSlug": slug.current,
    "imageUrl":image.asset->url
}`;

  const data: IProduct[] = await client.fetch(query);
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold font-helvetica">Similar Products</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 my-3">
        {data.map((food: IProduct, i: number) => (
          <Link href={`/shop/${food.currentSlug}`} key={i}>
            <Card2
              name={food.name}
              image={food.imageUrl}
              aprice={food.price}
              dprice={food.originalPrice}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
