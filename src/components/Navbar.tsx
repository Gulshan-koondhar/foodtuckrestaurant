"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const Navbar = ({ classname }: { classname: string }) => {
  const pathname = usePathname();

  return (
    <nav className={classname}>
      <Link
        className={`hover:text-[#FF9F0D] ${
          pathname === "/" ? "active" : ""
        } ${inter.className}`}
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

      <Link
        href="/reservation"
        className={`hover:text-[#FF9F0D] ${
          pathname === "/reservation" ? "active" : ""
        } ${inter.className}`}
      >
        Reservation
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
          pathname === "/tracking" ? "active" : ""
        } ${inter.className}`}
        href="/tracking"
      >
        Order Tracking
      </Link>
    </nav>
  );
};

export default Navbar;
