/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "Programming" | "Data Science" | "Databases" | "Business Intelligence" | "Tools" | "Artificial Intelligence";
  description: string;
  percentage: number; // For nice progress representations if desired
  logoSvg: string; // Dynamic official/styled SVG path or paths
}

export interface EducationTimelineItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  highlights: string[];
}
