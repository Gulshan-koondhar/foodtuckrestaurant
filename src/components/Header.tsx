"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Menu, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import { useCart } from "@/context/CartContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  const { cart } = useCart();
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const hanldeMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="max-w-screen-xl mx-auto">
      <div className="bg-[#0D0D0D] text-white flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold font-helvetica">
          Food<span className="text-[#FF9F0D]">tuck</span>
        </div>

        {/* Nav Links */}
        <div>
          <Navbar classname="hidden md:flex space-x-6" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/cart" ? "active" : ""
            } ${inter.className} relative`}
            href="/cart"
          >
            <ShoppingBag />
          </Link>
          <div className="absolute bg-red-500 w-5 h-5 text-center rounded-full left-16 -top-2">
            {cart.length}
          </div>
          <Menu onClick={hanldeMenu} className="block sm:hidden" />
          {showMenu ? (
            <div className="absolute top-14 right-0  z-30 bg-black bg-opacity-90 px-8 py-4 border rounded-md">
              <Navbar classname="flex flex-col gap-8 " />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
