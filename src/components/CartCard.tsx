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
    <div className="grid grid-cols-6 grid-rows-1 gap-3 my-3 w-full">
      <div className="col-span-1 sm:col-span-2 ">
        <div className="flex gap-2">
          <Image
            src={image}
            alt=""
            width={50}
            height={50}
            className="rounded-md"
          />

          <h1 className="content-center font-bold">{name}</h1>
        </div>
      </div>
      <div className="col-span-1 content-center">$ {price}</div>
      <div className="col-span-1 content-center border border-black rounded-lg w-14 h-5 px-2 flex justify-center items-center gap-2">
        <button className="content-center">-</button>
        {quantity}
        <button>+</button>
      </div>
      <div className="col-span-1 content-center">$ {price * quantity}</div>
      <button
        className="col-span-1 content-center cursor-pointer"
        onClick={remove}
      >
        {<X />}
      </button>
    </div>
  );
};

export default CartCard;
