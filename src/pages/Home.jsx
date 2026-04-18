import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import CategoryGrid from "../components/home/CategoryGrid";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
