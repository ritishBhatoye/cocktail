import React from "react";
import "./globals.css";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <div className="flex-center h[100vh]">
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
