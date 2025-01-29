"use client";

import { Menu, ShoppingBag } from "lucide-react";

import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchForm from "./Search";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
const HomeHeader = () => {
  const { cart } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const hanldeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold font-helvetica md:w-full lg:text-center">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </div>
        {/* Mobile */}
        <div className="flex items-center gap-2 flex-row-reverse md:hidden relative">
          <Menu onClick={hanldeMenu} />
          {showMenu ? (
            <div className="absolute top-24 bg-black bg-opacity-90 px-8 py-4 border rounded-md">
              <Navbar classname="flex flex-col gap-8 " />
            </div>
          ) : (
            ""
          )}
          <Link href={"/cart"}>
            <ShoppingBag className="hover:text-[#FF9F0D]" />
          </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="absolute bg-red-500 w-5 h-5 rounded-full text-center -top-2 left-16">
            {cart.length}
          </div>
        </div>
      </div>
      {/* Large Devices */}
      <div className="flex items-center justify-between">
        <Navbar classname="hidden md:flex space-x-6" />
        <div className="lg:flex gap-2 items-center hidden relative">
          <SearchForm />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link href={"/cart"}>
            <ShoppingBag className="hover:text-[#FF9F0D]" />
          </Link>
          <div className="absolute bg-red-500 w-5 h-5 rounded-full text-center -top-1 -right-1">
            {cart.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
