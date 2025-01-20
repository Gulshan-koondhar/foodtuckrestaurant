import { ShoppingBag } from "lucide-react";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  price: number;
  image: string;
  currency: string;
}

const AddtoCart = ({ name, price, image, currency }: ProductCart) => {
  const { addItem } = useShoppingCart();

  // Check if `addItem` is available
  if (!addItem) {
    return <p>Error: Cart provider is not initialized.</p>;
  }

  const product = {
    name,
    price,
    image,
    currency,
    id: name,
  };

  return (
    <button
      className="flex gap-1 bg-[#FF9F0D] px-4 py-2 text-white"
      onClick={() => addItem(product)} // Safe to call addItem now
    >
      <ShoppingBag /> Add to Cart
    </button>
  );
};

export default AddtoCart;
