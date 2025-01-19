import Image, { StaticImageData } from "next/image";
import React from "react";
import coffee from "../../public/Coffee.png";
import FoodCard from "./FoodCard";

interface IProps {
  foodImg: string | StaticImageData;
  heading: string;
  Classname?: string;
  foods: {
    foodName: string;
    foodDesc: string;
    cal: number;
    price: number;
  }[];
}

const Menu = (props: IProps) => {
  return (
    <div className="max-w-screen-lg py-12 mx-auto">
      <div
        className={`flex flex-col  gap-10 justify-around items-center ${props.Classname}`}
      >
        <div className="">
          <Image
            src={props.foodImg}
            alt="Food Image"
            width={350}
            height={600}
            className=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Image src={coffee} alt="Coffee" width={20} height={10} />
            <h1 className="text-5xl text-[#333333]">{props.heading}</h1>
          </div>

          <div className="flex flex-col gap-1">
            {props.foods.map((food, i) => (
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

export default Menu;
