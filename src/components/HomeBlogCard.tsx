import { MessageSquareMore, Share2, ThumbsUp } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const HomeBlogCard = ({
  img,
  date,
  title,
}: {
  img: string | StaticImageData;
  date: string;
  title: string;
}) => {
  return (
    <div>
      <div className="border border-white w-[300px] h-[450px]">
        <Image src={img} alt="" width={400} height={150} />
        <div className="px-3 flex flex-col gap-4 py-2 justify-between">
          <p
            className={`${inter.className} font-normal text-[16px] text-[#FF9F0D]`}
          >
            {date}
          </p>
          <h1 className="font-helvetica text-2xl font-bold">{title}</h1>
          <div className="flex justify-between items-center">
            <button>Learn More</button>
            <div className="flex gap-2">
              <ThumbsUp />
              <Share2 />
              <MessageSquareMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogCard;
