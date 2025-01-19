import React from "react";
import { Great_Vibes } from "next/font/google";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });
import { Inter } from "next/font/google";
import { Play } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });
const ActiveProcess = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-[url('/unsplash_E6DsqnZbZ4o.png')] bg-cover py-10 px-6 text-white">
      <div className="flex flex-col justify-center items-end gap-7">
        <h1
          className={`${great_vibe.className} text-center text-[#FF9F0D] text-3xl`}
        >
          Restaurant Active Process
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-end font-helvetica">
          <span className="text-orange-500">We</span> Document Every Food <br />{" "}
          Bean Process untile it is saved
        </h2>
        <p className={`font-normal text-[16px] ${inter.className} text-end`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque <br /> bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna,{" "}
        </p>
        <div className="flex justify-center gap-7">
          <button
            className={`border border-[#FF9F0D] px-5 py-2 rounded-3xl font-bold text-[16px] ${inter.className}`}
          >
            Read more
          </button>
          <h1 className="flex items-center">
            <Play className="w-10 h-10 bg-[#FF9F0D] rounded-full p-3" />{" "}
            <span className={`${inter.className} ml-2 text-[16px] font-bold`}>
              Play Now
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ActiveProcess;
