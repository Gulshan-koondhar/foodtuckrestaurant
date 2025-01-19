"use client";
import { ChevronDown } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

const Navbar = ({ classname }: { classname: string }) => {
  const pathname = usePathname();
  const [pages, setPages] = useState(false);
  const handlePages = () => {
    setPages(!pages);
  };
  return (
    <nav className={classname}>
      <Link
        className={`${pathname === "/" ? "active" : ""}  ${inter.className}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`hover:text-[#FF9F0D] ${
          pathname === "/menu" ? "active" : ""
        } ${inter.className}`}
        href="/menu"
      >
        Menu
      </Link>
      <Link
        className={`hover:text-[#FF9F0D] ${
          pathname === "/blog" ? "active" : ""
        } ${inter.className}`}
        href="/blog"
      >
        Blog
      </Link>

      <Link href="" onClick={handlePages} className="flex">
        Pages <ChevronDown size={20} className="mt-1" />
        {pages ? (
          <div className="flex flex-col z-30 absolute gap-2 bg-black bg-opacity-90 p-4 border rounded-md top-40 md:top-20">
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign Up</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/chef">Chefs</Link>
          </div>
        ) : (
          ""
        )}
      </Link>

      <Link
        className={`hover:text-[#FF9F0D] ${
          pathname === "/about" ? "active" : ""
        } ${inter.className} flex`}
        href="/about"
      >
        About
      </Link>

      <Link
        className={`hover:text-[#FF9F0D] ${
          pathname === "/shop" ? "active" : ""
        } ${inter.className}`}
        href="/shop"
      >
        Shop
      </Link>

      <Link
        className={`hover:text-[#FF9F0D] ${
          pathname === "/pages" ? "active" : ""
        } ${inter.className}`}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
