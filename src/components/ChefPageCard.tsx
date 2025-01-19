import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const ChefPageCard = ({
  img,
  name,
  position,
  specialty,
  experience,
}: {
  img: string | StaticImageData;
  name: string;
  position?: string;
  specialty?: string;
  experience?: number;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={img} alt={name} width={200} height={100} />
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold font-helvetica text-lg">{name}</h1>

        <p className={`${inter.className} font-normal text-xs`}>{position}</p>

        <div className="text-center">
          <h1 className="font-bold font-helvetica text-sm">
            {experience} Years of Experience
          </h1>
          <p className={`${inter.className} font-normal text-xs`}>
            {specialty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefPageCard;
