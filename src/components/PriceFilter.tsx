"use client";
import React, { useState } from "react";

export default function PriceFilter() {
  const [priceRange, setPriceRange] = useState([0, 8000]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value, 10);
    setPriceRange(newRange);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Filter By Price</h2>
      <div className="flex items-center space-x-2">
        {/* Slider */}
        <div className="relative w-full">
          <input
            type="range"
            min="0"
            max="8000"
            value={priceRange[0]}
            onChange={(e) => handleChange(e, 0)}
            className="absolute inset-0 z-20 w-full bg-transparent appearance-none h-2"
          />
          <input
            type="range"
            min="0"
            max="8000"
            value={priceRange[1]}
            onChange={(e) => handleChange(e, 1)}
            className="absolute inset-0 z-10 w-full bg-transparent appearance-none h-2"
          />
          <div
            className="absolute top-0 left-0 h-2 bg-orange-500 rounded"
            style={{
              left: `${(priceRange[0] / 8000) * 100}%`,
              right: `${100 - (priceRange[1] / 8000) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      {/* Price Display */}
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>From ${priceRange[0]}</span>
        <span>To ${priceRange[1]}</span>
      </div>
    </div>
  );
}
