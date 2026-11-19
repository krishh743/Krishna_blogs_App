"use client";

import { useState, useEffect } from "react";
import "./globals.css";

import { About } from "./components/header/About";
import { Services } from "./components/header/Services";
import { Contact } from "./components/header/ContactUs";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/header/Navigation";
import { Features } from "./components/header/Features";

import { pageData } from "./utills/data/data";

const App = () => {
  const [landingPageData, setLandingPageData] = useState<any>({});

  useEffect(() => {
    setLandingPageData(pageData);
    let active = true;
    let scroll: { destroy: () => void } | undefined;

    import("smooth-scroll")
      .then(({ default: SmoothScroll }) => {
        if (!active) return;

        scroll = new SmoothScroll('a[href*="#"]', {
          speed: 1000,
          speedAsDuration: true,
        });
      })
      .catch((error) => {
        console.error("Failed to initialize smooth scrolling:", error);
      });

    return () => {
      active = false;
      scroll?.destroy();
    };
  }, []);

  return (
    <main className="relative overflow-hidden">

      {/* Global Background Glow */}
      <div className="glow-orange top-0 left-0"></div>
      <div className="glow-pink bottom-0 right-0"></div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Header data={landingPageData.Header} />

      {/* About Section */}
      <About data={landingPageData.About} />

      {/* Features */}
      <Features data={landingPageData.Features} />

      {/* Services */}
      <Services data={landingPageData.Services} />

      {/* Contact */}
      <Contact data={landingPageData.Contact} />

    </main>
  );
};

export default App;