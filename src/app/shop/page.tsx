import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import Filter from "@/components/Filter";
import Products from "@/components/Products";

const Shop = () => {
  return (
    <main>
      <Header />
      <Hero image={banner} heading="Our Shop" path="Shop" />
      <Filter />
      <Products />
      <Footer />
    </main>
  );
};

export default Shop;
