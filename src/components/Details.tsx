import Image from "next/image";
import React from "react";
import image from "../../public/unsplash_bpPTlXWTOvg.png";
import image1 from "../../public/420.png";
import chefs from "../../public/Group.png";
import foodicon from "../../public/Group (1).png";
import spoon from "../../public/Group (2).png";
import pizza from "../../public/Group (3).png";

const Details = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative">
        <Image
          src={image}
          alt="Hero"
          width={1500}
          height={100}
          className=" h-[100px] sm:h-[200px]"
        />
        <Image
          src={image1}
          alt=""
          width={1500}
          height={50}
          className="absolute top-0 h-[100px] sm:h-[200px]"
        />
        <div className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-full px-8">
          <div className="flex flex-row justify-between items-center sm:w-full">
            <div className="flex flex-col items-center lg:gap-2">
              <Image
                src={chefs}
                alt="Chefs"
                width={100}
                height={100}
                className="w-5 h-5  sm:w-14 sm:h-14"
              />
              <h1 className="text-sm md:text-lg lg:text-3xl text-white">420</h1>
              <h2 className="text-[10px] md:text-lg lg:text-2xl text-white text-center">
                Professionals Chefs
              </h2>
            </div>
            <div className="flex flex-col items-center lg:gap-2  ">
              <Image
                src={foodicon}
                alt="Chefs"
                width={100}
                height={100}
                className="w-5 h-5  sm:w-14 sm:h-14"
              />
              <h1 className="text-sm md:text-lg lg:text-3xl text-white">320</h1>
              <h2 className="text-[10px] md:text-lg lg:text-2xl text-white ">
                Items of Food
              </h2>
            </div>
            <div className="flex flex-col items-center lg:gap-2 ">
              <Image
                src={spoon}
                alt="Chefs"
                width={100}
                height={100}
                className="w-5 h-5  sm:w-14 sm:h-14"
              />
              <h1 className="text-sm md:text-lg lg:text-3xl text-white">30+</h1>
              <h2 className="text-[10px] md:text-lg lg:text-2xl text-white">
                Years of Experience
              </h2>
            </div>
            <div className="flex flex-col items-center lg:gap-2">
              <Image
                src={pizza}
                alt="Chefs"
                width={100}
                height={100}
                className="w-5 h-5 sm:w-14 sm:h-14"
              />
              <h1 className="text-sm md:text-lg lg:text-3xl text-white">220</h1>
              <h2 className="text-[10px] md:text-lg lg:text-2xl text-white">
                Happy Customers
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
