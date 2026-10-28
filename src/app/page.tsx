import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import BrandShowcase from "@/components/BrandShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <About />
      <BrandShowcase />
      <Contact />
    </>
  );
}
