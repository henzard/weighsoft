import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <Contact />
    </div>
  );
}
