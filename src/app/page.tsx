import About from "@/components/About";
import ActiveProcess from "@/components/ActiveProcess";
import Blog from "@/components/Blog";
import Details from "@/components/Details";
import FoodCatalog from "@/components/FoodCatalog";
import Footer from "@/components/Footer";
import HeroHome from "@/components/HeroHome";
import HomeChef from "@/components/HomeChef";
import HomeHeader from "@/components/HomeHeader";
import HomeMenu from "@/components/HomeMenu";
import Testimonials from "@/components/Testimonials";
import WhyChooseus from "@/components/WhyChooseus";

export default function Home() {
  return (
    <>
      <header>
        <HomeHeader />
      </header>
      <main>
        <HeroHome />
        <About />
        <FoodCatalog />
        <WhyChooseus />
        <Details />
        <HomeMenu />
        <HomeChef />
        <Testimonials classname="bg-black text-white" />
        <ActiveProcess />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
