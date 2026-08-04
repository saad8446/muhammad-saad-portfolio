/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="main-footer" className="bg-[#050a07] border-t border-emerald-900/30 py-8">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Brand */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-950/60 rounded-lg border border-emerald-500/30">
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="font-semibold text-sm text-white">
            Muhammad Saad
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400 text-center">
          © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={handleScrollToTop}
          id="footer-back-to-top"
          className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

