"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Form from "@/components/Form";

const Page = () => {
  const { cart } = useCart();
  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <Header />
      <Hero image={banner} heading="Checkout" path="Checkout" />
      <div className="grid gap-8 lg:grid-cols-2 py-8 px-2">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4 items-center justify-center">
              <Form />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAsShipping"
                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                Same as shipping address
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center pt-4">
            <Link
              href={"/cart"}
              className="py-2 border border-gray-300 rounded-md shadow-sm text-lg text-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12 px-3"
            >
              Back to cart
            </Link>
            <button className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12">
              Proceed to shipping
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="p-6 rounded-lg border-2 border-gray-300 h-max">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <p>QTY: {item.quantity}</p>
                  </div>
                  <p className="text-sm text-gray-500">{item.price}$</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">$ {subTotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$ {subTotal}</span>
            </div>
          </div>

          <Link
            href={"/success"}
            onClick={() => (cart.length = 0)}
            className="w-full flex justify-center items-center mt-6 px-6 py-3 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Place an order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
