/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { PROJECTS_DATA, PERSONAL_INFO } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto border-t border-emerald-900/30">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          My Projects
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
          A selection of projects showcasing my skills in machine learning, data analysis, and application development.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS_DATA.map((project) => {
          const isPending = project.githubUrl === "#github-link-pending";
          const githubHref = isPending ? "https://github.com/saad8446" : project.githubUrl;

          return (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0d1712]/90 border border-emerald-900/40 hover:border-emerald-500/50 transition-all duration-150 hover:-translate-y-1 p-4 sm:p-5 shadow-md hover:shadow-lg"
            >
              <div className="space-y-3.5">
                {/* Project Image Preview */}
                {project.image && (
                  <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-[#070e0a] border border-emerald-900/40 relative group/img">
                    <img
                      src={project.image}
                      alt={`${project.name} - Muhammad Saad Data Science Project`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 pt-0.5">
                  <div className="p-2 rounded-xl bg-[#070e0a] text-emerald-400 shrink-0 border border-emerald-900/50 shadow-xs">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "" && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#070e0a] text-emerald-300 border border-emerald-900/50 text-[10px] font-mono font-semibold">
                        Live App
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Name & Description */}
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1.5">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] sm:text-[11px] text-white bg-[#070e0a] border border-emerald-900/40 rounded-md px-2 py-0.5 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons Footer */}
              <div className="pt-4 mt-4 border-t border-emerald-900/30 flex flex-wrap items-center gap-2.5">
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#070e0a] hover:bg-emerald-500 text-white hover:text-slate-950 text-xs font-semibold border border-emerald-900/50 hover:border-emerald-400 transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                  View Codebase
                </a>

                {project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all duration-150 active:scale-95 cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Visit GitHub for More Projects Banner */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#0d1712]/90 border border-emerald-900/40 shadow-xl">
        <div className="flex items-center gap-3.5 text-left">
          <div className="p-3 bg-[#070e0a] rounded-xl border border-emerald-900/50 text-emerald-400 shrink-0 shadow-xs">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Want to see more of my work?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              For more projects, scripts, and open-source contributions, visit my GitHub profile.
            </p>
          </div>
        </div>
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noreferrer noopener"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-150 active:scale-95 shadow-md hover:shadow-emerald-500/20 cursor-pointer"
        >
          <Github className="w-4 h-4" />
          Visit My GitHub
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

