import React from "react";
import FoodCard from "./FoodCard";
import { aboutFoods } from "@/constants/share";
const mealtime = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desert",
  "Drinks",
  "Snacks",
  "Soups",
];
const FoodMenu = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-10">
      <div>
        <div className="text-center max-w-[300px] mx-auto">
          <h1 className="font-helvetica font-bold text-4xl text-[#333333]">
            Our Food Menu
          </h1>
          <p className={`font-normal text-[16px] text-[#4f4f4f]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>
        <div className="flex max-w-screen-md justify-between mx-auto flex-wrap">
          {mealtime.map((meal, key) => (
            <div key={key} className="flex max-w-[400px]">
              {meal === "Breakfast" ? (
                <h1 className="text-[#FF9F0D] border-b border-[#FF9F0D]">
                  {meal}
                </h1>
              ) : (
                <h1>{meal}</h1>
              )}
            </div>
          ))}
        </div>
        <hr />
        <div>
          <div className="flex flex-wrap gap-8 my-5 items-center justify-center">
            {aboutFoods.map((food, i) => (
              <div key={i}>
                <FoodCard
                  foodName={food.foodName}
                  foodDesc={food.foodDesc}
                  cal={food.cal}
                  price={food.price}
                />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
