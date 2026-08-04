/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Linkedin, Github, Mail, MapPin, User, GraduationCap, Cpu, Sparkles, FileDown } from "lucide-react";
import jsPDF from "jspdf";
import { PERSONAL_INFO } from "../data";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Header Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // Slate-900
    doc.text("MUHAMMAD SAAD", 15, 20);

    // Subtitle
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(16, 185, 129); // Emerald-500
    doc.text("Data Scientist & AI/ML Developer", 15, 27);

    // Contact info line
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105); // Slate-600
    doc.text("Location: Lahore, Pakistan | Email: msaaad8484@gmail.com | Phone: +92 3281791484", 15, 33);
    doc.text(`LinkedIn: ${PERSONAL_INFO.socials.linkedin} | GitHub: ${PERSONAL_INFO.socials.github}`, 15, 38);

    // Top horizontal border divider
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(15, 42, 195, 42);

    let y = 50;

    const addSectionHeading = (title: string) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11.5);
      doc.setTextColor(15, 23, 42);
      doc.text(title.toUpperCase(), 15, y);
      y += 2;
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(0.8);
      doc.line(15, y, 195, y);
      y += 6;
    };

    // 1. Professional Summary
    addSectionHeading("Professional Summary");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);
    const summaryText =
      "Data Science student at Punjab University (PUCIT) with a strong foundation in machine learning, exploratory data analysis, and software development. Specialized in turning complex datasets into actionable insights and building practical AI-driven applications using Python, Pandas, Matplotlib, Scikit-learn, SQL, Power BI, and LLM frameworks.";
    const splitSummary = doc.splitTextToSize(summaryText, 180);
    doc.text(splitSummary, 15, y);
    y += splitSummary.length * 5 + 6;

    // 2. Education
    addSectionHeading("Education");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text("BS Data Science", 15, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(71, 85, 105);
    doc.text("Punjab University College of Information Technology (PUCIT) | Lahore, Pakistan", 15, y + 5);
    y += 13;

    // 3. Technical Skills
    addSectionHeading("Technical Skills");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(51, 65, 85);
    const skills = [
      "• Programming & Analytics: Python, SQL, C++, Power BI, DAX",
      "• Data Science & ML: Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, SciPy",
      "• AI & LLM Frameworks: LLaMA 3, Groq API, LangChain, RAG, ChromaDB, HuggingFace",
      "• Tools & Environments: Jupyter Notebook, Streamlit, Gradio, Git, GitHub",
    ];
    skills.forEach((skill) => {
      doc.text(skill, 15, y);
      y += 5.5;
    });
    y += 4;

    // 4. Featured Projects
    addSectionHeading("Featured Projects");

    const projects = [
      {
        name: "1. Data Science Movie Analysis",
        bullets: [
          "• Conducted in-depth Exploratory Data Analysis (EDA) on box office datasets.",
          "• Built bivariate chart analysis, missing data imputation, and trend maps.",
          "• Tech Stack: Python, Pandas, Matplotlib, Seaborn, Streamlit",
        ],
      },
      {
        name: "2. AI Health Assistant",
        bullets: [
          "• Interactive medical wellness chatbot powered by LLaMA 3 & Groq API.",
          "• Designed prompt engineering guardrails and responsive Gradio interface.",
          "• Tech Stack: Python, Groq API, LLaMA 3, Gradio",
        ],
      },
      {
        name: "3. RAG DocuChatbot (Nexus AI)",
        bullets: [
          "• Real-time Document Knowledge Base chatbot with PDF vector search.",
          "• Utilizes LangChain, dense vector embeddings, and ChromaDB.",
          "• Tech Stack: Python, LLaMA 3.1, ChromaDB, Streamlit",
        ],
      },
    ];

    projects.forEach((p) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(p.name, 15, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      p.bullets.forEach((bullet) => {
        doc.text(bullet, 18, y);
        y += 4.5;
      });
      y += 3;
    });

    doc.save("Muhammad_Saad_Resume.pdf");
  };

  return (
    <section id="home" className="scroll-mt-24 pt-24 pb-10 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto space-y-8">
      
      {/* 1. Main Sketch Layout Card Container */}
      <div className="relative rounded-3xl bg-[#0d1712]/95 border border-emerald-900/40 p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">

        {/* Dynamic Animated Data Science & AI Background */}
        <HeroBackground />

        {/* Top Header Row with Location Tag on Right */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070e0a] border border-emerald-900/40 text-white text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            PUCIT Data Science Student
          </span>
          
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#070e0a] px-3.5 py-1.5 rounded-full border border-emerald-900/40 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Location: Lahore, Pakistan
          </div>
        </div>

        {/* Two-column layout: Big Picture Left, Name & Info + 3 Buttons Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT: Big Circular Image */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-emerald-900/40 bg-[#070e0a] overflow-hidden shadow-2xl">
              <img
                src="/image.jpeg.jpg"
                alt="Muhammad Saad - BS Data Science Student and Data Scientist Portfolio Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

          {/* RIGHT: Name, Title, and 3 Buttons (LinkedIn, GitHub, Contact) */}
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-emerald-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Three Buttons inside Home Box */}
            <div className="pt-2">
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  id="hero-box-linkedin-btn"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#070e0a] hover:bg-emerald-500 text-slate-100 hover:text-slate-950 font-bold text-xs sm:text-sm border border-emerald-900/50 hover:border-emerald-400 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 fill-current text-emerald-400 group-hover:text-slate-950 transition-colors" />
                  LinkedIn
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  id="hero-box-github-btn"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#070e0a] hover:bg-emerald-500 text-slate-100 hover:text-slate-950 font-bold text-xs sm:text-sm border border-emerald-900/50 hover:border-emerald-400 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Github className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                  GitHub
                </a>

                <button
                  onClick={handleScrollToContact}
                  id="hero-box-contact-btn"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#070e0a] hover:bg-emerald-500 text-slate-100 hover:text-slate-950 font-bold text-xs sm:text-sm border border-emerald-900/50 hover:border-emerald-400 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                  Contact
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Button after Home Section Box: ONE "Download My Resume" Button with black background turning green on hover */}
      <div className="flex items-center justify-center py-2">
        <button
          onClick={handleDownloadResume}
          id="hero-download-resume-btn"
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-black text-white hover:bg-emerald-500 hover:text-slate-950 font-extrabold text-sm sm:text-base border border-slate-800 hover:border-emerald-400 shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <FileDown className="w-5 h-5 text-white group-hover:text-slate-950 transition-colors duration-200 group-hover:-translate-y-0.5" />
          Download My Resume
        </button>
      </div>

      {/* 3. About Section: "About Muhammad Saad" */}
      <div id="about" className="scroll-mt-24 relative rounded-3xl bg-[#0d1712]/90 border border-emerald-900/40 p-6 sm:p-8 md:p-10 shadow-xl space-y-6 overflow-hidden">
        <div className="flex items-center gap-3 border-b border-emerald-900/30 pb-4 relative z-10">
          <div className="p-2 bg-emerald-950/80 rounded-xl border border-emerald-500/40 text-emerald-400">
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            About Muhammad Saad
          </h2>
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>{PERSONAL_INFO.intro}</p>
          <p>{PERSONAL_INFO.detailedAbout}</p>
        </div>

        {/* Highlights bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#070e0a] border border-emerald-900/30 flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Education</h4>
              <p className="text-xs text-white font-semibold mt-0.5">BS Data Science at PUCIT</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#070e0a] border border-emerald-900/30 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">AI & Data Science</h4>
              <p className="text-xs text-white font-semibold mt-0.5">Python, Scikit-Learn, Deep Learning & NLP</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#070e0a] border border-emerald-900/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Analytics</h4>
              <p className="text-xs text-white font-semibold mt-0.5">SQL Querying & Power BI Dashboards</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

