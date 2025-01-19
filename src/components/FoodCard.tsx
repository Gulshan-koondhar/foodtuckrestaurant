import React from "react";

const FoodCard = ({
  foodName,
  foodDesc,
  cal,
  price,
}: {
  foodName: string;
  foodDesc: string;
  cal: number;
  price: number;
}) => {
  return (
    <div className="flex justify-between py-1 mb-2 w-[300px] md:w-[500px]">
      <div>
        <h1 className="text-2xl text-[#333333]">{foodName}</h1>
        <p className="text-[16px] font-normal text-[#4F4F4F]">{foodDesc}</p>
        <p className="text-[16px] font-normal text-[#828282]">{cal} CAL</p>
      </div>
      <div>
        <h1 className="text-2xl text-[#FF9F0D]">{price}$</h1>
      </div>
    </div>
  );
};

export default FoodCard;
