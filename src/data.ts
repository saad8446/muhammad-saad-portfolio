/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, EducationTimelineItem } from "./types";

export const PERSONAL_INFO = {
  name: "Muhammad Saad",
  title: "Data Scientist & AI/ML Developer",
  intro: "I am a Data Science student at PUCIT with a strong foundation in machine learning, exploratory data analysis, and software development. I specialize in turning complex datasets into actionable insights and building practical AI-driven applications using Python, Pandas, Matplotlib, scikit-learn, SQL, Power BI.",
  detailedAbout: "My experience spans developing custom interactive tools such as Retrieval-Augmented Generation (RAG) chatbots and AI assistants to building end-to-end data pipelines and business dashboards. I am passionate about clean code, real-world data problem-solving, and continuous learning in modern AI/ML technologies.",
  bullets: [
    "BS Data Science student at Punjab University Lahore (PUCIT)",
    "Hands-on skills in Python, SQL, and Power BI statistics modeling",
    "Interested in descriptive analytics, databases, and ML model performance",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/muhammad-saad-837662399/",
    github: "https://github.com/saad8446",
    realEmail: "msaaad8484@gmail.com",
    realPhone: "+92 3281791484"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "movie-analysis",
    name: "Movie Success Prediction",
    description: "In-depth Exploratory Data Analysis (EDA) on a comprehensive IMDB and Box Office movie dataset, featuring comprehensive data cleaning, trend charting, and feature correlation maps.",
    longDescription: "Performed complete data pre-processing, handling missing values, standardizing currencies, and parsing list-based columns. Implemented deep univariate and bivariate chart analysis to discover high-yield genre combinations, budget-to-revenue ratios, and historical popularity trajectories using Seaborn and Matplotlib.",
    image: "/Movies-Analysis.png",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    githubUrl: "https://github.com/saad8446/Data-Science-Project",
    liveUrl: "https://saad8446-data-science-project-app-ij6rqk.streamlit.app/",
    featured: true
  },
  {
    id: "ai-health-assistant",
    name: "AI Health Assistant",
    description: "A secure intelligence-driven medical chatbot leveraging LLMs through the Groq API and a beautiful interactive Gradio interface for responsive wellness assessments.",
    longDescription: "Integrated Groq's high-speed inference of LLaMA models to parse natural-language symptom inputs, providing safe, informative, and formatted wellness parameters. Designed an elegant Gradio frontend with responsive user interaction modules and contextual system prompt guards.",
    image: "/Health-AI.png",
    technologies: ["Python", "Groq API", "LLaMA 3", "Gradio", "Prompt Engineering"],
    githubUrl: "https://github.com/saad8446/Simple_Chatbot",
    liveUrl: "https://huggingface.co/spaces/saad8446/AI_Health_Assistant",
    featured: true
  },
  {
    id: "rag-chatbot",
    name: "RAG DocuChatbot",
    description: "A semantic Document Knowledge Base chatbot allowing real-time interactive chats with PDFs and Word documents using LLaMA 3.1 and dense vector embeddings.",
    longDescription: "Designed a secure Retrieval-Augmented Generation (RAG) architecture. Uses LangChain to parse multi-page documents, store chunks in a vector database, and perform semantic similarity searches. Feeds highly relevant context window chunks to LLaMA 3.1 to generate highly factual, cited answers.",
    image: "/Nexus-AI.png",
    technologies: ["Llama 3.1", "Vector DB", "ChromaDB", "Python", "LangChain", "Streamlit"],
    githubUrl: "https://github.com/saad8446/RAG_Chatbot",
    liveUrl: "https://huggingface.co/spaces/saad8446/Nexus_AI_chatbot",
    featured: true
  },
  {
    id: "sales-dashboard",
    name: "E-Commerce Sales Dashboard",
    description: "An advanced, dynamic commercial operational report using Power BI and DAX formulas, presenting clear visual data on sales KPIs, client demographics, and geographic layouts.",
    longDescription: "Created custom Star-schema data models inside Power BI. Penned highly advanced DAX measures for Year-over-Year (YoY) metrics, rolling monthly averages, and customer lifetime value cohorts. Integrated custom drill-downs, dynamic filtering rails, and responsive visual charts.",
    image: "/Daraz-Dashboard.png",
    technologies: ["Power BI", "DAX", "Data Modeling", "Excel", "ETL Pipelines"],
    githubUrl: "https://github.com/saad8446/Power-BI-Daraz-Dashboard",
    liveUrl: "#",
    featured: true
  }
];

export const EDUCATION_DATA: EducationTimelineItem[] = [
  {
    institution: "Punjab University College of Information Technology (PUCIT)",
    degree: "BS Data Science",
    period: "2024 - 2028",
    location: "Lahore, Pakistan",
    gpa: "Academic Excellence",
    highlights: [
      "Rigorous academic curriculum covering Statistical Inference, Multivariate Calculus, Data Warehousing, and Artificial Intelligence.",
      "Developing deep competence in algorithms, software design patterns, and high-performance computing.",
      "Active participant in PUCIT Computing Societies and local hackathons."
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  // Programming
  {
    name: "Python",
    category: "Programming",
    description: "Core language for scripting, machine learning engines, custom data parsers, and backend APIs.",
    percentage: 95,
    logoSvg: "python"
  },
  {
    name: "C++",
    category: "Programming",
    description: "Strong structural language used in procedural programming, memory paradigms, and high-speed algorithms.",
    percentage: 85,
    logoSvg: "cpp"
  },
  // Data Science
  {
    name: "NumPy",
    category: "Data Science",
    description: "High-performance vector and multi-dimensional matrix array mathematics standard library.",
    percentage: 90,
    logoSvg: "numpy"
  },
  {
    name: "Pandas",
    category: "Data Science",
    description: "Industry-standard data analysis and structured data manipulation structures (DataFrames).",
    percentage: 95,
    logoSvg: "pandas"
  },
  {
    name: "Matplotlib",
    category: "Data Science",
    description: "Static, animated, and interactive data visualization charts and graph rendering plots.",
    percentage: 88,
    logoSvg: "chart"
  },
  {
    name: "Seaborn",
    category: "Data Science",
    description: "Beautiful statistical data visualizations layered smoothly on top of Matplotlib controls.",
    percentage: 90,
    logoSvg: "seaborn"
  },
  // Databases
  {
    name: "SQL",
    category: "Databases",
    description: "Relational querying database structures across diverse industry engines for schema manipulation.",
    percentage: 92,
    logoSvg: "database"
  },
  {
    name: "MySQL",
    category: "Databases",
    description: "Open-source structured SQL management system for secure real-world application storage.",
    percentage: 88,
    logoSvg: "mysql"
  },
  // Business Intelligence
  {
    name: "Power BI",
    category: "Business Intelligence",
    description: "Robust interactive dashboard modeling tool for real-world enterprise analytics and visual reporting.",
    percentage: 90,
    logoSvg: "powerbi"
  },
  {
    name: "DAX",
    category: "Business Intelligence",
    description: "Data Analysis Expressions language used for intricate calculations in Power BI model fields.",
    percentage: 85,
    logoSvg: "dax"
  },
  // Tools
  {
    name: "Git",
    category: "Tools",
    description: "Distributed version control system to manage, branch, and merge development cycles.",
    percentage: 90,
    logoSvg: "git"
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Cloud repository platform hosting open-source code and supporting team code collaboration reviews.",
    percentage: 92,
    logoSvg: "github"
  },
  {
    name: "Scikit-Learn",
    category: "Data Science",
    description: "Machine learning algorithms, classification, regression, model evaluation, and pre-processing pipelines.",
    percentage: 92,
    logoSvg: "scikit-learn"
  },
  // AI
  {
    name: "Machine Learning",
    category: "Artificial Intelligence",
    description: "Supervised and unsupervised models, regression analytics, categorization trees, and custom clusters.",
    percentage: 88,
    logoSvg: "ml"
  },
  {
    name: "Deep Learning",
    category: "Artificial Intelligence",
    description: "Neural network architectures, multi-layer perceptrons, convolutional & recurrent networks.",
    percentage: 86,
    logoSvg: "deep-learning"
  },
  {
    name: "NLP",
    category: "Artificial Intelligence",
    description: "Natural Language Processing, text parsing, sentiment analysis, word embeddings, and transformers.",
    percentage: 88,
    logoSvg: "nlp"
  },
  {
    name: "AI & GenAI",
    category: "Artificial Intelligence",
    description: "Core search engines, neural configurations, generative agents, and dense retrieval RAG designs.",
    percentage: 85,
    logoSvg: "ai"
  }
];
