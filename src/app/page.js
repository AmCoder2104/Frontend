// app/page.js
"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";  // Import the Cards component
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#ffff]">

      <Navbar />
      <Hero />

      {/* Render the Cards component */}
      <Cards />
      <Footer />
    </div>
  );
}
 