"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";

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

// Function to group and sort orders by date
const groupOrdersByDate = (orders: Order[]) => {
  const grouped = orders.reduce((acc: Record<string, Order[]>, order) => {
    const formattedDate = new Date(order._createdAt)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, " / ");

    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }
    acc[formattedDate].unshift(order);
    return acc;
  }, {});

  return Object.keys(grouped)
    .sort((a, b) => {
      const dateA = new Date(a.split(" / ").reverse().join("-"));
      const dateB = new Date(b.split(" / ").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    })
    .reduce((sortedAcc: Record<string, Order[]>, key) => {
      sortedAcc[key] = grouped[key];
      return sortedAcc;
    }, {});
};

const Tracking = () => {
  const { user, isLoaded } = useUser();
  const [groupedOrders, setGroupedOrders] = useState<Record<string, Order[]>>(
    {}
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return; // Wait for Clerk to load

    if (!user) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "order" && userId == $userId]{
          cartItems, _id, _createdAt
        }`;
        const fetchedOrders: Order[] = await client.fetch(query, {
          userId: user.id,
        });
        const grouped = groupOrdersByDate(fetchedOrders);
        setGroupedOrders(grouped);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
      setLoading(false);
    };

    fetchOrders();
  }, [user, isLoaded]);

  if (!isLoaded) {
    return <p>Loading user data...</p>;
  }

  if (!user) {
    return (
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Hero heading="Tracking Order" image={banner} path="tracking" />
        <div className="flex flex-col items-center justify-center my-10">
          <p className=" text-center text-xl font-semibold">
            To Show Orders, Please Sign In First
          </p>
          <div className="flex justify-center bg-black w-max text-white p-2 rounded-lg mx-auto mt-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return <p>Loading orders...</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <h1 className="text-gray-700 text-2xl font-semibold mb-6">
        Order History
      </h1>

      {Object.keys(groupedOrders).length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        Object.entries(groupedOrders).map(([date, orders]) => (
          <div
            key={date}
            className="max-w-6xl mx-auto bg-white py-6 my-12 shadow-inner rounded-lg p-6"
          >
            <h1 className="font-bold text-xl">{date}</h1>
            {orders.map((order) => (
              <Link key={order._id} href={`/tracking/${order._id}`}>
                <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                  {order.cartItems.map((item: Items) => (
                    <div
                      key={item._key}
                      className="flex justify-between my-3 bg-gray-100 shadow p-2"
                    >
                      <div>
                        <h1 className="font-bold">
                          {item.name}{" "}
                          <span className="font-semibold">
                            x {item.quantity}
                          </span>
                        </h1>
                        <p className="font-medium">${item.price}</p>
                      </div>
                      <div className="font-bold text-xl">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ))
      )}

      <Footer />
    </div>
  );
};

export default Tracking;
