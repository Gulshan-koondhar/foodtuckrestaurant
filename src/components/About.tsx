import Image from "next/image";
import React from "react";
import { Great_Vibes } from "next/font/google";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
import image1 from "../../public/unsplash_fdlZBWIP0aM.png";
import image2 from "../../public/unsplash_jpkfc5_d-DI.png";
import image3 from "../../public/unsplash_mAQZ3X_8_l0.png";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-6">
        {/* Heading */}
        <div className="text-white w-full md:w-[50%]">
          <h1
            className={`text-[20px] ${great_vibe.className} md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left`}
          >
            About us
          </h1>

          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
            <span className="text-[#FF9F0D]">We</span> Create the best foody
            product
          </h1>

          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <ul>
            <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
              Read More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <Image
              src={image1}
              alt=""
              width={400}
              height={100}
              className="col-span-2"
            />
            <Image
              src={image2}
              alt=""
              width={200}
              height={100}
              className="col-span-1"
            />
            <Image
              src={image3}
              alt=""
              width={200}
              height={100}
              className="col-span-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
