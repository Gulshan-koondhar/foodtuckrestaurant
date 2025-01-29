"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React, { useEffect } from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero image={banner} heading="Success" path="success" />
      <div className="my-5">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Order Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for your Order We hope you enjoy it
          </p>
          <p>Have a great day!</p>

          <div className="flex gap-5 justify-center items-center w-full">
            <button className="mt-5 bg-[#FF9F0D] hover:bg-[#b38136] px-4 py-3 rounded-md text-white font-bold">
              <Link href="/">GO back</Link>
            </button>
            <button className="mt-5 bg-[#FF9F0D] hover:bg-[#B38136] px-4 py-3 rounded-md text-white font-bold">
              <Link href="/tracking">Order Tracking</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
