import React from "react";
import CartCard from "./CartCard";
import { cartProducts } from "@/constants/share";
import { Inter } from "next/font/google";
import { ShoppingBag } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });
const CartHeading = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-6 grid-rows-1">
          <div className="col-span-2">Product</div>
          <div className="col-span-1">Price</div>
          <div className="col-span-1">Quantity</div>
          <div className="col-span-1">Total</div>
          <div className="col-span-1">Remove</div>
        </div>
        <div>
          {cartProducts.map((product, i) => (
            <div className=" my-2" key={i}>
              <CartCard
                image={product.image}
                price={product.dprice}
                quantity={product.quantity}
                name={product.name}
              />
              <hr className="my-2" />
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 flex flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="font-helvetica font-bold text-3xl my-3">
            Coupon Code
          </h1>
          <div className="w-[350px] sm:w-[400px] border border-b-2 p-2 flex flex-col gap-3 rounded-md">
            <p
              className={`text-lg font-normal ${inter.className} text-[#828282]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non
            </p>
            <form
              action=""
              className="flex border border-black b rounded-md pl-2 border-opacity-40"
            >
              <input
                type="text"
                placeholder="Enter Code Here"
                className="w-full"
              />
              <button className="bg-[#FF9F0D] py-2 px-4 ">Apply </button>
            </form>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-helvetica font-bold text-3xl my-3">Total Bill</h1>
          <div className="w-[350px] sm:w-[400px] border border-b-2 p-2 flex flex-col gap-3 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-bold font-helvetica text-xl">
                Cart SubTotal
              </h1>
              <p className={`${inter.className} font-bold text-[18px]`}>
                $120.00
              </p>
            </div>
            <div className="flex justify-between">
              <h1
                className={`${inter.className} font-normal text-[#4F4F4F] text-[18px]`}
              >
                Shipping Charges
              </h1>
              <p
                className={`${inter.className} font-normal text-[#4F4F4F] text-[18px]`}
              >
                $00.00
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1 className="font-bold font-helvetica text-xl">Total Amount</h1>
              <p className={`${inter.className} font-bold text-[18px]`}>
                $205.00
              </p>
            </div>
          </div>
          <div className="bg-[#FF9F0D] flex items-center justify-center mt-4 px-4 py-2 text-white w-[350px] text-center">
            <button className="flex">
              Proceed to Checkout <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHeading;
