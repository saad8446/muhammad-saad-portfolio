/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070d0a] text-slate-100 overflow-x-hidden selection:bg-emerald-900/50 selection:text-emerald-200">
      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Single Page Content Section Wrapper */}
      <main className="relative flex flex-col">
        {/* Section 1: Hero & About Combined */}
        <Hero />

        {/* Section 2: Technical Skills Inventory */}
        <Skills />

        {/* Section 4: Deployed Projects */}
        <Projects />

        {/* Section 5: Education Timeline */}
        <Education />

        {/* Section 6: Direct Contact Form */}
        <Contact />
      </main>

      {/* Shared Footer block */}
      <Footer />

      {/* Sticky Scroll to Top button float */}
      <BackToTop />
    </div>
  );
}
