import React from "react";
import "./globals.css";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "@/components/global/Navbar";
import HeroSection from "@/components/global/HeroSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Home;
