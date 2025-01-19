import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import foodImage from "../../../public/Rectangle 8874.png";
import mainFoodImage from "../../../public/unsplash_-GFCYhoRe48 (1).png";
import { foods } from "@/constants/share";
import React from "react";
import Details from "@/components/Details";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Header />
      <Hero image={banner} heading="Our Menu" path="Menu" />
      <Menu
        foodImg={foodImage}
        heading="Starter Menu"
        foods={foods}
        Classname="sm:flex-row"
      />
      <Menu
        foodImg={mainFoodImage}
        heading="Main Course"
        foods={foods}
        Classname="sm:flex-row-reverse"
      />
      <Details />
      <Menu
        foodImg={foodImage}
        heading="Starter Menu"
        foods={foods}
        Classname="sm:flex-row"
      />
      <Menu
        foodImg={mainFoodImage}
        heading="Main Course"
        foods={foods}
        Classname="sm:flex-row-reverse"
      />
      <Partners />
      <Footer />
    </main>
  );
};

export default page;
