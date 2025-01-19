import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import yogurt from "@/../public/yougurt.png";
import lemon from "@/../public/lemon.png";
import pasta from "@/../public/pasta.png";

const AboutHero = () => {
  return (
    <div>
      <section className="text-black bg-white">
        <div className="max-w-screen-xl mx-auto flex px-5 py-10 items-center sm:flex-row-reverse flex-col-reverse justify-center gap-8">
          <div className="w-full sm:w-1/2">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="inline-flex text-white bg-orange-400  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <Play className="mr-2 text-white bg-orange-400 h-10 w-10 rounded-full p-2" />{" "}
                Watch video
              </button>
            </div>
          </div>

          {/* Right Images (takes 30% width) */}
          <div className="grid grid-cols-2 space-y-4 mt-10 space-x-2 ">
            <Image
              className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg" // Responsive width and height
              alt="hero"
              src={lemon}
              layout="intrinsic"
            />
            <div className="md:flex flex-col mt-10 gap-5 space-y-2">
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image2"
                src={yogurt}
                layout="intrinsic"
              />
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image3"
                src={pasta}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
