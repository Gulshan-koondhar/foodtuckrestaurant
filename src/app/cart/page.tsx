import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import CartHeading from "@/components/CartHeading";
const page = () => {
  return (
    <main>
      <Header />
      <Hero image={banner} heading="Shopping Cart" path="Cart" />
      <CartHeading />
      <Footer />
    </main>
  );
};

export default page;
