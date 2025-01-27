import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import ReviewForm from "@/components/ReviewForm";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero heading="Review" path="Review" image={banner} />
      <ReviewForm />
      <Footer />
    </div>
  );
};

export default page;
