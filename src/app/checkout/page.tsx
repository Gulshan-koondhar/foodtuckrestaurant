"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import { useCart } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { client } from "@/sanity/lib/client";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

const Page = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    country: "",
  });

  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      _type: "order",
      customerName: formData.name,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      phone: formData.phone,
      country: formData.country,
      cartItems: cart.map((item) => ({
        _key: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalAmount: subTotal,
      status: "Pending",
    };

    try {
      // Create a Stripe Checkout session
      const stripe = await stripePromise;
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart, totalAmount: subTotal }),
      });

      const session = await response.json();

      await client.create(orderData);
      // Redirect to Stripe Checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        console.error(result.error);
        alert("Failed to redirect to payment page. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero image={banner} heading="Checkout" path="Checkout" />
      <div className="grid gap-8 lg:grid-cols-2 py-8 px-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <input
                  type="string"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country
                </label>
                <input
                  type="string"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <input
                  type="string"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-[250px] sm:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </form>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12"
          >
            Place Order
          </button>
        </div>
        <div className="p-6 rounded-lg border-2 border-gray-300 h-max">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p>QTY: {item.quantity}</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-500">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-gray-900 font-bold ">Subtotal</span>
              <span className="font-semibold text-gray-600 text-lg">
                $ {subTotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
