import Image from "next/image";
import React from "react";
import bakery from "../../public/image 59.png";
import bistro from "../../public/image 57.png";
import wolfcoffee from "../../public/image 58.png";
import fork from "../../public/image 56.png";
import bakery1 from "../../public/image 60.png";
import resturant from "../../public/image 2.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Partners = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex flex-col items-center gap-2">
        <p className={`text-lg font-normal ${inter.className}`}>
          Partners & Clients
        </p>
        <h1 className="font-bold font-helvetica text-5xl">
          We Work With the Best People
        </h1>
        <div className="flex flex-wrap md:flex-row-reverse my-2 gap-8  justify-between">
          <Image src={bakery} alt="" width={100} height={100} />
          <Image src={bistro} alt="" width={100} height={100} />
          <Image src={wolfcoffee} alt="" width={100} height={100} />
          <Image src={fork} alt="" width={100} height={100} />
          <Image src={bakery1} alt="" width={100} height={100} />
          <Image src={resturant} alt="" width={150} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
