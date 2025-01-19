"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Menu, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import Profile from "./Profile";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  const pathname = usePathname();
  const [profileActive, setProfileActive] = useState(false);
  const handleProfile = () => {
    setProfileActive(!profileActive);
  };
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
          <UserRound onClick={handleProfile} className="cursor-pointer" />
          {profileActive ? (
            <div className="absolute top-10 right-10 ">
              <Profile />
            </div>
          ) : (
            ""
          )}
          <Link
            className={`hover:text-[#FF9F0D] ${
              pathname === "/cart" ? "active" : ""
            } ${inter.className}`}
            href="/cart"
          >
            <ShoppingBag />
          </Link>
          <Menu onClick={hanldeMenu} />
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
