"use client";
import { useCart } from "@/context/CartContext";
import React from "react";

const OrderSummary = () => {
  const { cart } = useCart();
  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <div className="mb-6">
      <h2 className="text-black text-lg font-bold mb-4">Order Summary</h2>
      <div className="space-y-6">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">$ {subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Delivery</p>
          <p className="font-medium">$10.00</p>
        </div>
        <div className="flex justify-between font-semibold text-gray-700">
          <p>Total</p>
          <p>{(subTotal + 10).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
