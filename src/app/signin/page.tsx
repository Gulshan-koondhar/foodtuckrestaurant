import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      {/* Background Image */}
      <div>
        {/* Navbar */}
        <Header />

        {/* Centered Text */}
        <Hero image={banner} heading="Sign In" path="SignIn" />
      </div>
      {/* Signin Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
                Forgot password?
              </Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              Sign in with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
