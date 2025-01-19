import Image, { StaticImageData } from "next/image";
import React from "react";

import { Inter } from "next/font/google";
import { ChevronRight } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });
interface Iprops {
  image: string | StaticImageData;
  heading: string;
  path: string;
}
const Hero = (props: Iprops) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative">
        <Image src={props.image} alt="Hero" width={1500} height={100} />
        <div className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-xl text-center sm:text-5xl">
            {props.heading}
          </h1>
          <div
            className={`${inter.className} text-[20px] font-normal text-white flex items-center justify-center`}
          >
            Home <ChevronRight />{" "}
            <span className="text-[#FF9F0D]">{props.path}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
