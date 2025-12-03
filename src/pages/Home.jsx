import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import SocialMediaBar from "../components/SocialMediabar.jsx";
import DiscoverSection from "../components/Discover.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import GrowthSection from "../components/GrowthSection.jsx";
import ImpactSection from "../components/ImpactSection.jsx";
import BlogsSection from "../components/BlogsSection.jsx";

function Home() {
  return (
    <>
    
      

      <SocialMediaBar />
      
      <HeroSection />
      
      <DiscoverSection />
      
      <ProductsSection variant="home" />

      
      <GrowthSection />
      
      <ImpactSection />
      
      <BlogsSection />
      
    

    </>
  );
}

export default Home;