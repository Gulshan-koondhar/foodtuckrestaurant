import Image, { StaticImageData } from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const HomeFoodCard = ({
  img,
  foodName,
  fooddesc,
  foodprice,
}: {
  img: string | StaticImageData;
  foodName: string;
  fooddesc: string;
  foodprice: number;
}) => {
  return (
    <div className="flex gap-2">
      <div>
        <Image src={img} alt="" width={70} height={70} />
      </div>
      <div className={`${inter.className}`}>
        <h1 className="font-bold text-lg">{foodName}</h1>
        <p className="font-normal text-sm">{fooddesc}</p>
        <h1 className="text-[#FF9F0D] text-lg font-bold">{foodprice}$</h1>
      </div>
    </div>
  );
};

export default HomeFoodCard;
