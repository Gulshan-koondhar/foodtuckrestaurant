import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Filter = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className={`flex flex-wrap gap-4 ${inter.className}`}>
        <div className="flex">
          <h1>Sort By :</h1>
          <select className="border rounded-md px-3 ml-2">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="flex">
          <h1>Show :</h1>
          <select className="border rounded-md px-3 ml-2">
            <option>Default</option>
            <option>Top to Bottom</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
