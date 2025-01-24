import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "@/../public/unsplash_4ycv3Ky1ZZU.png";
import ReservationForm from "@/components/Reservation";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero heading="Reservation" image={banner} path="Reservation" />
      <ReservationForm />

      <Footer />
    </div>
  );
};

export default page;
