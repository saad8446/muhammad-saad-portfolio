/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS_DATA } from "../data";
import TechIcon from "./TechIcon";

const CATEGORIES = [
  "All",
  "Programming",
  "Data Science",
  "Databases",
  "Business Intelligence",
  "Tools",
  "Artificial Intelligence",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="scroll-mt-24 py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-t border-emerald-900/30">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Skills & Technologies
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
          Technologies, Programming languages and tools i used to build data-driven solution.
        </p>
      </div>

      {/* Category Tab List - responsive horizontal scrolling */}
      <div className="flex items-center justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar max-w-full flex-wrap">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              id={`skill-tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer whitespace-nowrap border ${
                isActive
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm"
                  : "bg-[#0d1712] text-slate-300 border-emerald-900/40 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Catalog Grid - Narrower width cards with proportional height (length slightly less than width) */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-3.5"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              key={skill.name}
              className="group py-4 px-2.5 sm:px-3 rounded-xl bg-[#0d1712]/90 border border-emerald-900/40 hover:border-emerald-400 hover:bg-emerald-950/50 hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center min-h-[105px] sm:min-h-[115px]"
            >
              {/* Technical Logo SVG */}
              <div className="p-2 bg-[#070e0a] rounded-lg border border-emerald-900/40 group-hover:border-emerald-400/60 transition-colors shrink-0 mb-2">
                <TechIcon name={skill.logoSvg} size={20} className="transition-transform duration-200 group-hover:scale-105 text-emerald-400" />
              </div>

              {/* Skill Name & Category */}
              <div className="w-full min-w-0">
                <h3 className="font-semibold text-xs text-white group-hover:text-emerald-300 transition-colors truncate px-1">
                  {skill.name}
                </h3>
                <span className="block text-[10px] font-mono text-slate-400 mt-0.5 truncate px-1">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

