import Image, { StaticImageData } from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const ChefCard = ({
  img,
  name,
  position,
}: {
  img: string | StaticImageData;
  name: string;
  position: string;
}) => {
  return (
    <div className="relative">
      <Image src={img} alt="" width={200} height={100} />
      <div className="absolute bottom-0 max-w-48 bg-white text-black px-2 rounded-bl-md">
        <h1 className={`${inter.className} font-bold text-lg`}>{name}</h1>
        <p className={`${inter.className} font-normal text-sm`}>{position}</p>
      </div>
    </div>
  );
};

export default ChefCard;
