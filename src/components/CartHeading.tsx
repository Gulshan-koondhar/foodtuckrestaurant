import React, { useState } from "react";
import CartCard from "./CartCard";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const CartHeading = () => {
  const { cart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-5 sm:grid-cols-6 grid-rows-1">
            <div className="col-span-1 sm:col-span-2">Product</div>
            <div className="col-span-1">Price</div>
            <div className="col-span-1">Quantity</div>
            <div className="col-span-1">Total</div>
            <div className="col-span-1">Remove</div>
          </div>
          <div>
            {cart.length === 0 ? (
              <p className="max-w-screen-xl mx-auto flex justify-center items-center font-bold text-2xl">
                No product in the Cart
              </p>
            ) : (
              <>
                {cart.map((product, i) => (
                  <div key={i}>
                    <CartCard
                      image={product.image}
                      price={product.price}
                      quantity={product.quantity}
                      name={product.name}
                      remove={() => removeFromCart(product.id)}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {cart.length > 0 && (
        <div className="my-8 flex items-center justify-center">
          <div className="">
            <h1 className="font-helvetica font-bold text-3xl my-3">
              Total Bill
            </h1>
            <div className="w-full border border-b-2 p-2 flex flex-col gap-3 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-bold font-helvetica text-xl">
                  Cart SubTotal
                </h1>
                <p className={`${inter.className} font-bold text-[18px]`}>
                  $ {subTotal}
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
                  $0
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h1 className="font-bold font-helvetica text-xl">
                  Total Amount
                </h1>
                <p className={`${inter.className} font-bold text-[18px]`}>
                  ${subTotal}
                </p>
              </div>
            </div>
            <div className="bg-[#FF9F0D]  flex items-center justify-center mt-4 px-4 py-2 text-white w-[300px] text-center">
              <Link
                href={"/checkout"}
                className="flex"
                onClick={() => setLoading(true)}
              >
                {loading ? (
                  "Proceeding..."
                ) : (
                  <>
                    Proceed to Checkout <ShoppingBag />
                  </>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartHeading;
