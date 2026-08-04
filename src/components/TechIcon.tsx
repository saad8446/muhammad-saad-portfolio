/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = "", size = 24 }: TechIconProps) {
  switch (name.toLowerCase()) {
    case "python":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={`${className}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.12 2C7.38 2 7.56 4.05 7.56 4.05L7.57 6.13H12.2V6.78H5.66S3.5 6.64 3.5 11.16c0 4.53 1.9 4.39 1.9 4.39h1.13v-1.57c0 0-.1-1.9 1.83-1.9h5.59s1.69.05 1.69-1.63V5.98s.19-3.98-3.53-3.98z"
            fill="url(#py-blue)"
          />
          <path
            d="M11.88 22c4.74 0 4.56-2.05 4.56-2.05l-.01-2.08h-4.63v-.65h6.54s2.16.14 2.16-4.38c0-4.53-1.9-4.39-1.9-4.39h-1.13v1.57s.1 1.9-1.83 1.9h-5.59s-1.69-.05-1.69 1.63v4.47s-.19 3.98 3.53 3.98z"
            fill="url(#py-yellow)"
          />
          <circle cx="9.5" cy="4" r="0.5" fill="#030712" />
          <circle cx="14.5" cy="20" r="0.5" fill="#030712" />
          <defs>
            <linearGradient id="py-blue" x1="3.5" y1="2" x2="16.5" y2="15" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008DDA" />
              <stop stopColor="#41C9E2" />
            </linearGradient>
            <linearGradient id="py-yellow" x1="7.5" y1="9" x2="21" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE162" />
              <stop stopColor="#FFB100" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "cpp":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#1e293b" />
          <text
            x="3"
            y="17"
            fill="#41C9E2"
            fontWeight="bold"
            fontSize="14"
            fontFamily="monospace"
          >
            C++
          </text>
          <path d="M19 12h-4M17 10v4M23 12h-4M21 10v4" stroke="#008DDA" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "numpy":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#0B192C" stroke="#008DDA" strokeWidth="1" />
          {/* Isometric grid blocks */}
          <path d="M12 4 L19 8 L12 12 L5 8 Z" fill="#008DDA" opacity="0.4" />
          <path d="M5 8 L12 12 L12 19 L5 15 Z" fill="#008DDA" opacity="0.6" stroke="#41C9E2" strokeWidth="1" />
          <path d="M12 12 L19 8 L19 15 L12 19 Z" fill="#008DDA" opacity="0.8" stroke="#008DDA" strokeWidth="1" />
          <text x="7" y="14" fill="#ffffff" fontWeight="bold" fontSize="7" fontFamily="sans-serif">Np</text>
        </svg>
      );

    case "pandas":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#111827" stroke="#41C9E2" strokeWidth="1" />
          {/* Data columns design representing pandas dataframe */}
          <line x1="6" y1="5" x2="6" y2="19" stroke="#E11D48" strokeWidth="2" />
          <line x1="12" y1="5" x2="12" y2="19" stroke="#008DDA" strokeWidth="2" />
          <line x1="18" y1="5" x2="18" y2="19" stroke="#FFE162" strokeWidth="2" />
          <line x1="4" y1="9" x2="20" y2="9" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="4" y1="14" x2="20" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "chart": // Matplotlib
    case "seaborn":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#0B192C" />
          {/* Wave line chart and bar overlays */}
          <path
            d="M3 17 L7 12 L11 15 L16 8 L21 14"
            stroke="url(#chart-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 19h16" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="2" fill="#41C9E2" />
          <defs>
            <linearGradient id="chart-grad" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#008DDA" />
              <stop stopColor="#41C9E2" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "database": // SQL / MySQL
    case "mysql":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="url(#db-cyan)" strokeWidth="2" fill="none">
            <ellipse cx="12" cy="5" rx="7" ry="2.5" />
            <path d="M5 5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5" />
            <path d="M5 10v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" />
            <path d="M5 15v4c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-4" />
          </g>
          <defs>
            <linearGradient id="db-cyan" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41C9E2" />
              <stop stopColor="#008DDA" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "powerbi":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Classic Power BI staircase bar design */}
          <rect width="24" height="24" rx="6" fill="#1e293b" />
          <rect x="5" y="13" width="4" height="6" rx="1" fill="#F2C811" />
          <rect x="10" y="9" width="4" height="10" rx="1" fill="#E29E11" />
          <rect x="15" y="5" width="4" height="14" rx="1" fill="#D2740E" />
        </svg>
      );

    case "dax":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#0B192C" stroke="#008DDA" strokeWidth="1" />
          <text x="4" y="15" fill="#41C9E2" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">ƒ(x)</text>
          <path d="M14 7l4 5-4 5m4-5H10" stroke="#FFE162" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "git":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
            fill="#1E293B"
            stroke="#F05032"
            strokeWidth="1.5"
          />
          <path
            d="M14.7 10.3a1.5 1.5 0 102.1-2.1l-4.5-4.5c-.6-.6-1.5-.6-2.1 0l-4.5 4.5a1.5 1.5 0 102.1 2.1l1.7-1.7V13a2.5 2.5 0 002.5 2.5h1"
            stroke="#F05032"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="10" cy="5.5" r="1.5" fill="#F05032" />
          <circle cx="14" cy="15.5" r="1.5" fill="#F05032" />
        </svg>
      );

    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
            fill="#ffffff"
          />
        </svg>
      );

    case "ml":
    case "ai":
    case "deep-learning":
    case "deep learning":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#0B192C" />
          {/* Glowing node connections (brain/chip visual) */}
          <circle cx="8" cy="8" r="2" fill="#41C9E2" />
          <circle cx="16" cy="8" r="2" fill="#10B981" />
          <circle cx="12" cy="16" r="2" fill="#34D399" />
          <line x1="8" y1="8" x2="16" y2="8" stroke="#10B981" strokeOpacity="0.6" strokeWidth="1.5" />
          <line x1="8" y1="8" x2="12" y2="16" stroke="#34D399" strokeOpacity="0.6" strokeWidth="1.5" />
          <line x1="16" y1="8" x2="12" y2="16" stroke="#10B981" strokeOpacity="0.6" strokeWidth="1.5" />
          {/* Subtle neural sparkles */}
          <path d="M12 4l.5 1.5L14 6l-1.5.5L12 8l-.5-1.5L10 6l1.5-.5z" fill="#34D399" />
        </svg>
      );

    case "scikit-learn":
    case "sklearn":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#091A2A" stroke="#10B981" strokeWidth="1" />
          <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" stroke="#34D399" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="12" cy="12" r="2" fill="#10B981" />
          <text x="5" y="19" fill="#34D399" fontSize="6" fontWeight="bold" fontFamily="sans-serif">sk-learn</text>
        </svg>
      );

    case "nlp":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="#0D1F2D" stroke="#34D399" strokeWidth="1" />
          <path d="M5 8h14M5 12h10M5 16h14" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="12" r="1.5" fill="#10B981" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
  }
}
