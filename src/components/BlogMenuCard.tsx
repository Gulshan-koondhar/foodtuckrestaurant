import Image, { StaticImageData } from "next/image";
import React from "react";

const BlogMenuCard = ({
  img,
  title,
  price,
}: {
  img: string | StaticImageData;
  title: string;
  price: number;
}) => {
  return (
    <div className="flex items-center gap-8 py-2">
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
        className="rounded-md w-16 h-16"
      />
      <div className="flex justify-between w-full">
        <h1 className="text-[16px] font-bold font-helvetica text-[#333333]">
          {title}
        </h1>
        <p className="text-[16px] font-normal font-helvetica text-[#333333]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default BlogMenuCard;
