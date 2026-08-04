/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";
import { EDUCATION_DATA } from "../data";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-t border-emerald-900/30">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Education
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
          Academic foundation in computer science principles, database architectures, and advanced statistical modeling at PUCIT.
        </p>
      </div>

      {/* Education Cards Container */}
      <div className="space-y-6">
        {EDUCATION_DATA.map((edu) => (
          <div
            key={edu.institution}
            className="p-6 sm:p-8 rounded-2xl bg-[#0d1712]/90 border border-emerald-900/40 flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-md"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 shrink-0 border border-emerald-500/40">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-extrabold text-xl text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-sm mt-0.5">
                    {edu.degree}
                  </p>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="space-y-2.5 pt-2">
                {edu.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Metadata */}
            <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-start gap-3 text-xs text-slate-400 font-medium border-t md:border-t-0 border-emerald-900/30 pt-4 md:pt-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#070e0a] border border-emerald-900/40 rounded-lg text-slate-200 font-mono">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{edu.location}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Enrolled Student
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

