import Image from "next/image";
import React from "react";
import third from "@/../public/unsplash_3iexvMShGfQ.png";

import coffee from "@/../public/Coffee (1).png";
import person from "@/../public/Person.png";
import student from "@/../public/Student.png";
const AboutFeature = () => {
  return (
    <div>
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <h1 className="text-black text-3xl font-bold mt-3 mb-6">
            Why Choose Us
          </h1>
          <p className="text-center mb-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] rounded-lg" // Responsive width and height
            alt="Why Choose Us"
            src={third}
            width={1320}
            height={480}
          />
        </div>
      </section>
      <section className="text-black bg-white">
        <div className="max-w-screen-lg px-3 py-10 mx-auto">
          <div className="flex flex-wrap">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col items-center rounded-lg overflow-hidden">
                <Image
                  className="object-cover object-center"
                  src={student}
                  alt="Best Chef"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black font-normal font-helvetica text-[16px] text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col items-center rounded-lg overflow-hidden">
                <Image
                  className=" object-cover object-center"
                  src={coffee}
                  alt="120 Item Food"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    120 Item Food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col items-center rounded-lg overflow-hidden">
                <Image
                  className=" object-cover object-center"
                  src={person}
                  alt="Clean Environment"
                  width={100}
                  height={100}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFeature;
