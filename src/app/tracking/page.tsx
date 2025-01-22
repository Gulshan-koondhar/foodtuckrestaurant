"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
const Tracking = () => {
  const { cart } = useCart();
  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero heading="Tracking Order" image={banner} path="tracking" />
      <div className="max-w-4xl mx-auto bg-white py-6 my-12 shadow-2xl rounded-lg p-6">
        <h1 className="text-gray-700 text-2xl font-semibold mb-6">
          Order Tracking
        </h1>
        <div className="mb-8">
          <p className="text-gray-600">
            Order ID: <span className="font-medium">3354654654526</span>
          </p>
          <p className="text-gray-600">
            Order date: <span className="font-medium">Feb 10, 2025</span>
          </p>
          <p className="text-gray-600">
            Estimated delivery:{" "}
            <span className="font-medium text-bordercoloryello">
              Feb 10, 2025
            </span>
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-black text-lg font-bold mb-4">Order Status</h2>
          <div className="flex justify-center gap-5">
            <div className="text-center items-center flex flex-col">
              <div
                className="border-yellow-300 border
               w-8 h-8 rounded-full text-grey-300 flex items-center justify-center text-center"
              >
                ✔
              </div>
              <p className="text-sm mt-2">Order Confirmed</p>
              <p className="text-xs text-gray-500">Wed, 22th Jan</p>
            </div>
            <div className="text-center items-center flex flex-col">
              <div
                className="border-yellow-300 border
               w-8 h-8 rounded-full text-grey-300 flex items-center justify-center"
              >
                ✔
              </div>
              <p className="text-sm mt-2">Shipped</p>
              <p className="text-xs text-gray-500">Wed, 22th Jan</p>
            </div>
            <div className="text-center items-center flex flex-col">
              <div
                className="border-yellow-300 border
               w-8 h-8 rounded-full text-grey-300 flex items-center justify-center"
              >
                ✔
              </div>
              <p className="text-sm mt-2">Out for Delivery</p>
              <p className="text-xs text-gray-500">Wed, 11th Jan</p>
            </div>
            <div className="text-center items-center flex flex-col">
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                ✔
              </div>
              <p className="text-sm mt-2">Delivered</p>
              <p className="text-xs text-gray-500">Expected: May 10</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-black text-lg font-bold mb-4">Items</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between sm:mr-52">
                  <div className="flex gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <div>
                      <h1 className="font-bold">{item.name}</h1>
                      <p className="text-xs">QTY: {item.quantity}</p>
                    </div>
                  </div>
                  <p>$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          <div className="mb-6">
            <h2 className="text-black text-lg font-bold mb-4">Payment</h2>
            <p className="text-gray-600">Visa ending ****1234</p>
          </div>

          <div className="mb-6">
            <h2 className="text-black text-lg font-bold mb-4">Delivery</h2>
            <p className="text-gray-600 w-[200px]">
              847 Jessens Bridge Apt, TIM London, UK 674-3319
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-black text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-6">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">${subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Delivery</p>
              <p className="font-medium">$10.00</p>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <p>Total</p>
              <p>${(subTotal + 10).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tracking;
