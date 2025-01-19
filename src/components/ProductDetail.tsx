import React from "react";
import ProductImages from "./ProductImages";
import SingleProductDetail from "./SingleProductDetail";
import ProductDesc from "./ProductDesc";
import SimilarProducts from "./SimilarProducts";
import { client } from "@/sanity/lib/client";

interface Iproduct {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
}

const ProductDetail = async ({ slug }: { slug: string }) => {
  const query = `*[_type == "food" && slug.current == "${slug}"][0]{
    name,description,category,price, originalPrice,
      "imageUrl":image.asset->url
  }`;
  const data: Iproduct = await client.fetch(query);
  return (
    <div className="max-w-screen-xl mx-auto py-4 px-2">
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          {/* Image */}
          <ProductImages img={data.imageUrl} />
        </div>
        <div className="flex-1">
          {/* Product Datil */}
          <SingleProductDetail
            category={data.category}
            desc={data.description}
            name={data.name}
            price={data.price}
            originalPrice={data.originalPrice}
          />
        </div>
      </div>
      <div>
        <ProductDesc />
      </div>
      <div>
        <SimilarProducts category={data.category} />
      </div>
    </div>
  );
};

export default ProductDetail;
