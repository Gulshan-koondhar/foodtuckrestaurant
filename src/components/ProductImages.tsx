import Image from "next/image";
import React from "react";

const ProductImages = ({ img }: { img: string }) => {
  return (
    <div>
      <div className="flex items-center gap-4 w-full justify-center">
        <Image
          src={img}
          alt=""
          width={350}
          height={100}
          className=" w-[300px] sm:w-[450px] "
        />
      </div>
    </div>
  );
};

export default ProductImages;
