import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
import client from "@/../public/Rectangle 8863 (3).png";
import quotes from "@/../public/Quotes.png";
import ystar from "@/../public/star - Copy.png";
import wstar from "@/../public/star - Copy (1).png";
import leaf from "@/../public/unsplash_Ioq6qEibtbU.png";
const Testimonials = ({ classname }: { classname: string }) => {
  return (
    <section className={`max-w-screen-xl mx-auto  py-6 px-10 ${classname}`}>
      <div className="max-w-screen-lg mx-auto">
        <div>
          <h1 className={`${great_vibe.className} text-[#FF9F0D] text-3xl`}>
            Testimonials
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What our client are saying
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10 justify-center max-w-screen-md mx-auto bg-white  shadow-2xl relative px-5 sm:px-20 py-4">
          <div className="mb-5">
            <Image
              src={client}
              alt=""
              width={50}
              height={40}
              className="rounded-full absolute -top-7 right-24 md:right-80 lg:right-[360px]"
            />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <Image src={quotes} alt="" width={30} height={30} className="" />
            <p className="text-[#4F4F4F] font-helvetica text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam
              rerum ipsa cumque, odit facilis quam repellat exercitationem quas
              modi suscipit voluptatibus temporibus et illum fuga debitis
              maxime. Quam, temporibus.
            </p>
            <div className="flex-col flex items-center justify-center gap-2">
              <div className="flex">
                <Image src={ystar} alt="" width={20} height={20} />
                <Image src={ystar} alt="" width={20} height={20} />
                <Image src={ystar} alt="" width={20} height={20} />
                <Image src={ystar} alt="" width={20} height={20} />
                <Image src={wstar} alt="" width={20} height={20} />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-[#333333] font-bold font-helvetica text-2xl">
                  Alamin Hasan
                </h1>
                <p className="text-[#828282]">Food Specialist</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-9 lg:block hidden">
            <Image src={leaf} alt="" width={300} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
