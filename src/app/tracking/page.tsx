"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export interface Items {
  name: string;
  image: string;
  quantity: number;
  price: number;
  _key: string;
}

interface Order {
  cartItems: Items[];
  _id: string;
  _createdAt: string;
}

const Tracking = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const query = `*[_type == "order"]{
        cartItems, _id, _createdAt
      }`;
      const fetchedOrders: Order[] = await client.fetch(query);
      console.log("Fetched Orders:", fetchedOrders); // Debugging log
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero heading="Tracking Order" image={banner} path="tracking" />
      <h1 className="text-gray-700 text-2xl font-semibold mb-6">
        Order History
      </h1>
      {orders.map((order: Order) => (
        <div
          className="max-w-6xl mx-auto bg-white py-6 my-12 shadow-inner rounded-lg p-6"
          key={order._id}
        >
          <h1 className="font-bold text-xl">
            {new Date(order._createdAt)
              .toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .replace(/\//g, " / ")}
          </h1>
          <Link href={`/tracking/${order._id}`}>
            {order.cartItems.map((item: Items) => (
              <div
                key={item._key}
                className="flex justify-between my-3 bg-gray-100 shadow p-2"
              >
                <div>
                  <h1 className="font-bold">
                    {item.name}{" "}
                    <span className="font-semibold">x {item.quantity}</span>
                  </h1>
                  <p className="font-medium">{item.price}</p>
                </div>
                <div className="font-bold text-xl">
                  {item.price * item.quantity}
                </div>
              </div>
            ))}
          </Link>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Tracking;
