"use client";

import { useState, useEffect } from "react";
import "./globals.css";

import SmoothScroll from "smooth-scroll";
import { About } from "./components/header/About";
import { Services } from "./components/header/Services";
import { Contact } from "./components/header/ContactUs";
// import JsonData from "./utills/data/data.ts";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/header/Navigation";
import { Features } from "./components/header/Features";
import { pageData } from "./utills/data/data";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] =useState({});
  useEffect(() => {
    setLandingPageData(pageData);
  }, []);
  console.log(landingPageData, "kk");

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
