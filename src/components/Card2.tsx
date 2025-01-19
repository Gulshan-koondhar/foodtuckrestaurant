import Image, { StaticImageData } from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Card2 = ({
  name,
  image,
  aprice,
  dprice,
  sell,
}: {
  name: string;
  image: string | StaticImageData;
  aprice?: number;
  dprice: number;
  sell?: boolean;
}) => {
  return (
    <div className="relative">
      <div className="relative">
        <Image
          src={image}
          alt=""
          width={250}
          height={250}
          className="object-cover w-[250px] h-[250px]"
        />
      </div>
      <div>
        <h1 className={`text-lg font-bold  ${inter.className}`}>{name}</h1>
        <div className="flex gap-2">
          <p
            className={`text-lg font-normal text-[#FF9F0D] ${inter.className}`}
          >
            $ {dprice}
          </p>
          <p
            className={`text-lg font-normal ${inter.className} line-through text-[#828282]`}
          >
            $ {aprice}
          </p>
        </div>
      </div>
      {sell && (
        <div className="absolute top-2 left-2 bg-[#FF9F0D] text-white px-2">
          <h1 className={`${inter.className} text-sm font-normal`}>Sell</h1>
        </div>
      )}
    </div>
  );
};

export default Card2;
