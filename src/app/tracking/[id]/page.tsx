import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { Items } from "../page";
import Image from "next/image";

interface order {
  _createdAt: string;
  cartItems: Items[];
  status: string;
  phone: string;
  email: string;
  city: string;
  _id: string;
  customerName: string;
  address: string;
  totalAmount: number;
}
const Tracking = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const query = `*[_type == "order" && _id == "${id}"][0]{
customerName,address,cartItems,totalAmount,
  status,phone,email,city,_id,_createdAt
}`;
  const order: order = await client.fetch(query);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero heading="Tracking Order" image={banner} path="tracking" />
      <div className="max-w-4xl mx-auto bg-white py-6 my-12 shadow-2xl rounded-lg p-6">
        <h1 className="text-gray-700 text-2xl font-semibold mb-6">
          Order Tracking
        </h1>
        <div className="mb-8">
          <p className="text-black font-bold">
            Order ID:{" "}
            <span className="font-medium text-gray-600">{order._id}</span>
          </p>
          <p className="text-black font-bold">
            Order Status:{" "}
            <span className="font-medium text-gray-600">{order.status}</span>
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-black text-lg font-bold mb-4">Items</h2>
          <div className="flex flex-wrap gap-3">
            {order.cartItems.map((item: Items) => (
              <div key={item._key} className="flex ">
                <div className="flex gap-2 border p-2 rounded-md bg-white shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <h1 className="font-bold">
                      {item.name}{" "}
                      <span className="font-medium">x {item.quantity}</span>
                    </h1>
                    <p className="font-semibold">
                      {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <div className="mb-6">
            <h2 className="text-black text-lg font-bold mb-4">
              Shipping Details
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="text-black text-lg font-semibold">
                  Customer Name:
                </span>{" "}
                {order.customerName}
              </p>
              <p className="text-gray-600">
                <span className="text-black text-lg font-semibold">
                  Address:
                </span>{" "}
                {order.address}
              </p>
              <p className="text-gray-600">
                <span className="text-black text-lg font-semibold">City:</span>{" "}
                {order.city}
              </p>
              <p className="text-gray-600">
                <span className="text-black text-lg font-semibold">
                  Phone#:
                </span>{" "}
                {order.phone}
              </p>
              <p className="text-gray-600">
                <span className="text-black text-lg font-semibold">Email:</span>{" "}
                {order.email}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-black text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-6">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">$ {order.totalAmount.toFixed(2)}</p>
            </div>

            <div className="flex justify-between font-bold text-gray-900">
              <p>Total</p>
              <p>$ {order.totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tracking;
