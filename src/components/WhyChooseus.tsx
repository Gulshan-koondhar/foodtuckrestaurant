import Image from "next/image";
import React from "react";
import image from "../../public/cata4.png";
import imag1 from "../../public/unsplash_lP5MCM6nZ5A (1).png";
import yogurt from "../../public/yougurt.png";
import product3 from "../../public/product3.png";
import image1 from "../../public/unsplash_tzl1UCXg5Es (1).png";
import image2 from "../../public/unsplash_mmnKI8kMxpc (1).png";

import { Great_Vibes } from "next/font/google";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
const WhyChooseus = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-black px-10 py-6">
        <div className="flex flex-col md:flex-row gap-2 sm:mx-10 md:mx-14">
          {/* Left Side */}
          <div className="space-y-2 flex-1">
            <div className="flex items-end gap-2">
              <div>
                <Image src={imag1} alt="" width={300} height={200} />
              </div>
              <div>
                <Image
                  src={image}
                  alt=""
                  width={200}
                  height={200}
                  className="content-end"
                />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div>
                <Image src={yogurt} alt="" width={200} height={200} />
              </div>
              <div>
                <Image src={product3} alt="" width={150} height={100} />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <Image src={image1} alt="" width={100} height={50} />
                </div>
                <div>
                  <Image src={image2} alt="" width={100} height={50} />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1 text-white">
            <div>
              <h1
                className={`text-[20px] ${great_vibe.className} md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left`}
              >
                Why Choose us
              </h1>

              <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
                <span className="text-[#FF9F0D]">Ex</span>ta ordinary taste And
                Experienced
              </h1>

              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;
