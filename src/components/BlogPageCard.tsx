import {
  Calendar1,
  CircleUserRound,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const BlogPageCard = ({
  img,
  date,
  comments,
  title,
  desc,
}: {
  img: string | StaticImageData;
  date: string;
  comments: number;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Image
          src={img}
          alt=""
          width={300}
          height={100}
          className="w-[300px] sm:w-[800px] h-[300px] sm:h-[500px]"
        />
      </div>
      <div
        className={`flex items-center gap-2 ${inter.className} text-[16px] font-normal text-[#4f4f4f]`}
      >
        <Calendar1 className="text-[#FF9F0D]" /> {date} /{" "}
        <MessageSquare className="text-[#FF9F0D]" /> {comments} /{" "}
        <CircleUserRound className="text-[#FF9F0D]" /> Admin
      </div>
      <h1 className="font-helvetica font-bold text-2xl text-[#333333]">
        {title}
      </h1>
      <hr />
      <p
        className={`font-normal text-[16px] ${inter.className} text-[#4f4f4f]`}
      >
        {desc}
      </p>
      <button className="flex items-center gap-2 font-helvetica font-normal text-[16px] text-[#ff9f0d] border-2 w-max px-4 py-2 rounded-md border-[#ff9f0d]">
        Read More <ExternalLink size={15} />
      </button>
    </div>
  );
};

export default BlogPageCard;
