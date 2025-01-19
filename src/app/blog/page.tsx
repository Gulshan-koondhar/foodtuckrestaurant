import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import Footer from "@/components/Footer";
import BlogPage from "@/components/BlogPage";
const page = () => {
  return (
    <>
      <Header />
      <Hero image={banner} heading="Blog" path="Blog" />
      <BlogPage />
      <Footer />
    </>
  );
};

export default page;
