import Image, { StaticImageData } from "next/image";
import React from "react";

const BlogPostCard = ({
  img,
  title,
  date,
}: {
  img: string | StaticImageData;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex gap-2 py-2">
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
        className="rounded-md w-24 h-20"
      />
      <div className="flex flex-col gap-2">
        <p className="text-[#828282] text-sm font-helvetica font-normal">
          {date}
        </p>
        <h1 className="text-[16px] font-helvetica font-normal text-[#4f4f4f]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlogPostCard;
