import * as React from "react";
import { NavBar } from "@components/NavBar";
import { HeroSection } from "@components/HeroSection";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
    </React.Fragment>
  );
};

export default Home;
