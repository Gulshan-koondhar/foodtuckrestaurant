import Image from "next/image";
import React from "react";
// import img from "../../public/cata1.png";
// import img1 from "../../public/cata2.png";
// import img2 from "../../public/cata3.png";
// import img3 from "../../public/cata4.png";
import leaf from "../../public/leaf.png";

import { Great_Vibes } from "next/font/google";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
// const items = [
//   { id: 1, Image: img1, label: "Save 50% on Fast Food" },
//   { id: 2, Image: img3, label: "Delicious Burgers" },
//   { id: 3, Image: img2, label: "Healthy Salads" },
//   { id: 4, Image: img, label: "Desserts" },
// ];
const FoodCatalog = async () => {
  const query = `*[_type == "food"]{
  "category": category,
  "image": image.asset->url
} | order(category asc) 
  [0...4] `;
  const category = await client.fetch(query);
  return (
    <section className="max-w-screen-xl mx-auto bg-black text-white py-6 px-10">
      <div className="text-center">
        {/* Title */}
        <h1
          className={`${great_vibe.className} text-center text-[#FF9F0D] text-3xl`}
        >
          Food Category
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.map((item: { category: string; image: string }) => (
            <Link key={item.category} href={`/category/${item.category}`}>
              <div className="relative">
                {/* Image of the food item */}
                <div
                  className="relative w-full max-w-full h-auto"
                  style={{
                    borderRadius: "6px 0px 0px 0px",
                    overflow: "hidden", // Prevents overflow of images
                    opacity: 1, // Ensures visibility
                  }}
                >
                  <Image
                    src={item.image} // Correct path to images
                    alt={item.category}
                    className="object-cover rounded-lg"
                    layout="responsive" // Ensures it maintains aspect ratio
                    width={500} // Adjust width for responsiveness
                    height={300} // Adjust height for responsiveness
                  />
                </div>

                {/* Overlay label */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                  <span className="text-orange-500 font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute sm:-right-0 sm:top-[1400px] md:top-[1900px] lg:top-[1500px] xl:hidden">
          <Image src={leaf} alt="" width={300} height={100} />
        </div>
      </div>
    </section>
  );
};

export default FoodCatalog;
