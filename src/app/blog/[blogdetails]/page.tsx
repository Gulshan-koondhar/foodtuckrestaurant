import Header from "@/components/Header";
import Hero from "@/components/Hero";

import React from "react";
import banner from "../../../../public/unsplash_4ycv3Ky1ZZU.png";

import BlogDetailPage from "@/components/BlogDetailPage";
const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero image={banner} heading="Blog Detail" path="Blog Detail" />

      <BlogDetailPage />
    </div>
  );
};

export default page;
