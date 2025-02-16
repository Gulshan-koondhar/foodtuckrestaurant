import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

const CartCard = ({
  image,
  name,
  price,
  quantity,
  remove,
}: {
  image: string | StaticImageData;
  name: string;
  price: number;
  quantity: number;
  remove: () => void;
}) => {
  return (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-6 grid-rows-1 gap-3 my-3 w-full items-center">
        <div className="col-span-1 sm:col-span-2 ">
          <div className="flex gap-2">
            <Image
              src={image}
              alt=""
              width={50}
              height={50}
              loading="lazy"
              className="rounded-md w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] hidden sm:block"
            />

            <h1 className="content-center font-medium sm:font-bold">{name}</h1>
          </div>
        </div>
        <div className="col-span-1 content-center">$ {price}</div>
        <div className="col-span-1 content-center ">
          <span className="text-sm font-semibold">QTY:</span> {quantity}
        </div>
        <div className="col-span-1 content-center">$ {price * quantity}</div>
        <button
          className="col-span-1 content-center cursor-pointer"
          onClick={remove}
        >
          {<X />}
        </button>
      </div>
    </>
  );
};

export default CartCard;
