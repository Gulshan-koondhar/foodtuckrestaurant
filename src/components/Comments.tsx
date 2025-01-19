import { Calendar, ReplyAll } from "lucide-react";
import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
const Comments = ({
  img,
  name,
}: {
  img: string | StaticImageData;
  name: string;
}) => {
  return (
    <div className="flex gap-3">
      <Image
        src={img}
        alt=""
        width={100}
        height={100}
        className="w-10 h-10 rounded-full"
      />
      <div className="space-y-2">
        <div className="flex gap-4">
          <h1
            className={`font-bold text-[16px] text-[#333333] ${inter.className}`}
          >
            {name}
          </h1>
          <p
            className={`flex font-normal  gap-1 items-center text-[14px] text-[#333333] ${inter.className}`}
          >
            <ReplyAll className="text-[#4f4f4f]" size={20} /> Reply
          </p>
        </div>
        <div className="flex font-helvetica text-sm text-[#828282] font-normal">
          <Calendar className="text-[#ff9f0d]" size={20} /> June 22, 2020
        </div>
        <div>
          <p className="font-helvetica font-normal text-[16px] text-[#4f4f4f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
            tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
            hendrerit faucibus sollicitudin.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
