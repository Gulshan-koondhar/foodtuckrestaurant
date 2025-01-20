import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../../public/unsplash_4ycv3Ky1ZZU.png";
import ProductDetail from "@/components/ProductDetail";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <main>
      <Header />
      <Hero image={banner} heading="Shop Details" path="Shop Details" />
      <ProductDetail slug={slug} />
      <Footer />
    </main>
  );
};

export default page;
