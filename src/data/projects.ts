import type { ProjectCategory } from './projectCategories';

export type ProjectStatus = 'active' | 'maintained' | 'archived';

export interface ProjectImage {
  url: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  repo: string;
  demo?: string;
  status: ProjectStatus;
  images: string[]; // Legacy: simple array of image URLs
  imageDetails?: ProjectImage[]; // New: images with descriptions
  year?: number;
  featured?: boolean;
  details?: string; // Expanded project details (markdown or plain text)
  authors?: string[]; // Scientific publication authors
  citation?: string; // Journal or Publisher info
  doi?: string; // Digital Object Identifier
}

export const projects: Project[] = [
  {
    id: 'ipea-web',
    title: 'IPEA Web',
    description: 'Full-stack web application for the Institute of Applied Educational Psychology. Combines public site, blog, course system, and real-time collaborative workspaces.',
    category: 'web-development',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'WebSockets', 'TailwindCSS'],
    repo: 'https://github.com/jorgetzec/ipea-backend',
    demo: 'https://grupoipea.com',
    status: 'active',
    images: [],
    year: 2025,
    featured: true,
  },
  {
    id: 'integrando-ac',
    title: 'Integrando A.C.',
    description: 'Website for an organization dedicated to neuropsychological and educational support for neurodivergent individuals. Clean design with focus on inclusive education.',
    category: 'web-development',
    tags: ['WIX', 'Web Design', 'UI/UX'],
    repo: '',
    demo: 'https://www.integrando-mid.org/',
    status: 'active',
    images: [],
    year: 2023,
    featured: true,
  },
  {
    id: 'altruismo-eficaz-yucatan',
    title: 'Altruismo Eficaz Yucatán',
    description: 'Informative website for the local Effective Altruism group in Yucatán. Sober design focused on ethical education and community activities.',
    category: 'web-development',
    tags: ['Web Design', 'UI/UX', 'Education'],
    repo: '',
    demo: '',
    status: 'archived',
    images: [], // Legacy support
    imageDetails: [
      {
        url: '/images/projects/altruismo-hero.jpg',
        description: 'Hero section featuring the central question "How can we do the most good possible?" with local imagery from Mérida'
      },
      {
        url: '/images/projects/altruismo-grid.png',
        description: 'Complete layout overview showing the bento grid design with resources, activities, and reading club sections'
      },
    ],
    year: 2023,
    details: `Design Philosophy

The website embodies a sober and ethical aesthetic, prioritizing clarity and accessibility. The minimalist approach uses a white background, clear typography, and direct navigation to ensure information is easily digestible. Local imagery from Mérida and the Monumento a la Patria contextualizes the movement within the Yucatecan landscape, while minimal iconography emphasizes textual content.

Project Goals

The platform serves three primary objectives: communicating Effective Altruism principles adapted to the Yucatecan context, promoting community activities such as reading clubs and seminars, and facilitating access to educational resources and international networks. This design approach ensures that the philosophical foundation of the movement is accessible to a local audience while maintaining connection to the global Effective Altruism community.

Key Features

The website organizes content into clear sections: Inicio (Home) with a reflective landing page, Actividades (Activities) with comprehensive event listings for reading clubs and seminars, Involúcrate (Get Involved) with an extensive resource library and educational materials, and a blog section for reporting and presenting past activities. These sections create direct communication channels that connect local Yucatecan initiatives with the global Effective Altruism movement.`,
  },
  {
    id: 'interpro-domain-viz',
    title: 'InterPro Domain Visualization',
    description: 'Comprehensive Python tool for visualizing protein domains from InterProScan results. Generates publication-ready plots of domains on gene maps and multiple sequence alignments.',
    category: 'research-tools',
    tags: ['Python', 'Bioinformatics', 'Visualization', 'InterProScan', 'Domain Analysis', 'matplotlib'],
    repo: 'https://github.com/jorgetzec/interpro-domain-viz',
    demo: '',
    status: 'active',
    images: [],
    year: 2025,
    featured: false,
    details: `Overview

A command-line Python tool for visualizing protein domains from InterProScan results. Enables researchers to clean data, visualize domains on gene maps, and map domains onto multiple sequence alignments.

Key Features

Data Cleaning
Filters InterProScan results by removing low-confidence databases and resolves overlapping domains to prevent visual clutter.

Gene Plot Visualization
Creates linear gene maps showing domain architectures for single or multiple genes, with optional grouping by modules or categories.

Alignment Plot Visualization
Maps protein domains onto multiple sequence alignments (FASTA or Clustal format) to compare domain conservation across sequences.

High-Quality Output
Generates publication-ready plots in PDF and SVG formats with professional styling.

Technical Stack

Built with Python using pandas, matplotlib, seaborn, numpy, and biopython. Features an intuitive command-line interface with subcommand structure.`,
  },
  {
    id: 'wgcna-workshop',
    title: 'WGCNA Co-expression Network Workshop',
    description: 'Workshop materials for Gene Co-expression Networks focusing on Weighted Gene Co-expression Network Analysis (WGCNA) methodology. Includes scripts, datasets, and documentation.',
    category: 'workshops',
    tags: ['R', 'WGCNA', 'Bioinformatics', 'Workshop', 'Gene Expression', 'Network Analysis'],
    repo: 'https://github.com/jorgetzec/WGCNA_workshop',
    demo: '',
    status: 'maintained',
    images: [],
    year: 2024,
    featured: false,
    details: `Overview

Workshop materials for teaching Gene Co-expression Network Analysis with a focus on the WGCNA methodology. Designed for researchers and students working with transcriptomics data to learn network analysis concepts and practical implementation.

Workshop Content

Dataset
The workshop uses a subset of the Chlamydomonas reinhardtii transcriptome under salt stress conditions. Participants explore this dataset to understand how different parameters affect the construction and interpretation of gene co-expression networks.

Key Topics
• Introduction to gene co-expression networks
• WGCNA methodology and implementation
• Parameter selection and optimization
• Network construction and visualization
• Module identification and interpretation
• Integration with biological annotations

Repository Structure

Code
Contains R scripts for WGCNA analysis, including main analysis workflows and exercises.

Data
Includes raw count matrices, sample metadata, protein annotations, and example network files for hands-on practice.

Documentation
Comprehensive workshop materials including course notes, slides, syllabus, tool lists, and detailed report instructions for participants.

Technical Details

Built with R and the WGCNA package. Includes example datasets, R scripts, and RStudio project files for easy setup and reproducibility.`,
  },
  {
    id: 'bioinfo-transcriptomics-review',
    title: 'Bioinformatics perspectives on transcriptomics: A comprehensive review of bulk and single-cell RNA sequencing analyses',
    description: 'A comprehensive review exploring the evolution of RNA sequencing technologies and the critical role of bioinformatics in analyzing gene expression dynamics.',
    category: 'publications',
    tags: ['Bioinformatics', 'Transcriptomics', 'RNA-seq', 'Single-cell', 'NGS'],
    repo: '',
    demo: 'https://doi.org/10.1002/qub2.78',
    status: 'maintained',
    images: [],
    year: 2025,
    featured: true,
    citation: 'Quantitative Biology, 2025',
    doi: '10.1002/qub2.78',
    details: `The transcriptome, the complete set of RNA molecules within a cell, plays a critical role in regulating physiological processes. The advent of RNA sequencing (RNA-seq) facilitated by Next Generation Sequencing (NGS) technologies, has revolutionized transcriptome research, providing unique insights into gene expression dynamics. This review article covers everything from bulk RNA-seq to the latest single-cell technologies, emphasizing the bioinformatics pipelines required for data interpretation.`,
  },
  {
    id: 'avocado-pgpb-biocontrol',
    title: 'Characterization of plant growth-promoting bacteria associated with avocado trees (Persea americana Miller) and their potential use in the biocontrol of Scirtothrips perseae',
    description: 'Research on the interaction between avocado trees and beneficial microorganisms, focusing on biocontrol of insect pests.',
    category: 'publications',
    tags: ['Microbiology', 'Biocontrol', 'Avocado', 'Plant-Microbe Interactions', 'Agriculture'],
    repo: '',
    demo: 'https://doi.org/10.1371/journal.pone.0231215',
    status: 'maintained',
    images: [],
    year: 2020,
    featured: false,
    citation: 'PLoS One, 2020',
    doi: '10.1371/journal.pone.0231215',
    details: `Plants interact with a great variety of microorganisms that inhabit the rhizosphere or the epiphytic and endophytic phyllosphere and that play critical roles in plant growth as well as the biocontrol of phytopathogens and insect pests. This study characterizes bacterial strains from avocado trees and evaluates their potential as biocontrol agents against Scirtothrips perseae.`,
  },
  {
    id: 'thiazoles-synthesis-microwave',
    title: 'Solvent-free synthesis of 2-amino-4-arylthiazoles under microwave irradiation',
    description: 'Development of an efficient, solvent-free method for synthesizing thiazole derivatives using microwave technology.',
    category: 'publications',
    tags: ['Organic Chemistry', 'Microwave Synthesis', 'Green Chemistry', 'Thiazoles'],
    repo: '',
    demo: 'https://doi.org/10.1016/j.tetlet.2012.05.068',
    status: 'maintained',
    images: [],
    year: 2012,
    featured: false,
    citation: 'Tetrahedron Letters, 2012',
    doi: '10.1016/j.tetlet.2012.05.068',
    details: `2-Amino-4-arylthiazoles were prepared in a one-pot solvent-free procedure by reaction of p-substituted acetophenones with thiourea and iodine under microwave irradiation. This green chemistry approach significantly reduces reaction times and eliminates the need for hazardous solvents.`,
  },
  {
    id: 'scientific-thinking-book',
    title: 'Scientific Thinking',
    description: 'Educational book focused on developing scientific reasoning and research skills for secondary education students.',
    category: 'publications',
    tags: ['Education', 'Science', 'Critical Thinking', 'Secondary Education'],
    repo: '',
    demo: '',
    status: 'maintained',
    images: [],
    year: 2022,
    featured: true,
    authors: ['Tzec-Interián JA', 'Quintal Flores AI', 'García Mendoza RG', 'Colli Us S', 'Uh Echeverría JH', 'Loría Chunab GM'],
    citation: 'Sputnik, Traveler\'s Guide. Secondary. Group KX, 2022',
    details: `Part of the Sputnik series, this Traveler's Guide for Secondary education focuses on "Scientific Thinking". It provides students with the tools to explore the world through the lens of science, fostering curiosity, critical thinking, and a systematic approach to problem-solving.`,
  },
  {
    id: 'gus-blue',
    title: 'GUS-blue',
    description: 'Automated tools for the quantification of GUS (blue staining) in Arabidopsis roots through image processing with OpenCV.',
    category: 'research-tools',
    tags: ['Python', 'OpenCV', 'Streamlit', 'Image Processing', 'Arabidopsis'],
    repo: 'https://github.com/jorgetzec/GUS-blue',
    status: 'active',
    images: [],
    year: 2024,
    details: `This repository provides a suite of tools for quantifying blue staining in plant roots. It features three versions: a Streamlit web application for a visual interface, a CLI tool for batch processing, and a Jupyter Notebook for interactive analysis. It utilizes the uv package manager for dependency handling.`,
  },
  {
    id: 'scientific-article-aggregator',
    title: 'Scientific Article Aggregator',
    description: 'Modern web application to search for scientific papers across multiple APIs (arXiv, Europe PMC, Crossref, and bioRxiv) directly from the frontend.',
    category: 'web-development',
    tags: ['React', 'TypeScript', 'Vite', 'API Integration', 'TailwindCSS'],
    repo: 'https://github.com/jorgetzec/scientific-article-aggregator',
    status: 'active',
    images: [],
    year: 2025,
    details: `A modern web application built with React, TypeScript, and Vite. It allows users to search for scientific papers across multiple APIs directly from the frontend without a dedicated backend. It supports categorical filtering and saves search results locally using localStorage.`,
  },
  {
    id: 'scientific-panel-generator',
    title: 'Scientific Panel Generator',
    description: 'Tool for generating composite multipanel figures for scientific publications with automatic labeling and high-resolution output.',
    category: 'research-tools',
    tags: ['Python', 'Matplotlib', 'Data Visualization', 'Scientific Figures'],
    repo: 'https://github.com/jorgetzec/scientific_panel_generator',
    status: 'active',
    images: [],
    year: 2024,
    details: `Designed to streamline the creation of publication-quality figures, this tool enables users to arrange multiple images (PDF, PNG, JPG) into a grid. It automatically adds labels (A, B, C, etc.) and allows for customizable font sizes and layouts using Matplotlib, ensuring high-resolution output suitable for journals.`,
  },
  {
    id: 'wgcna-ml-validation',
    title: 'WGCNA ML Validation',
    description: 'Bioinformatics pipeline for WGCNA and Machine Learning validation of salt stress response in Chlamydomonas reinhardtii.',
    category: 'bioinformatics-pipelines',
    tags: ['R', 'WGCNA', 'Machine Learning', 'Random Forest', 'DESeq2', 'Bioinformatics'],
    repo: 'https://github.com/jorgetzec/WGCNA_ML_validation',
    status: 'active',
    images: [],
    year: 2025,
    details: `A comprehensive bioinformatics pipeline focused on the regulatory landscape of GPD genes under salinity stress. The workflow includes Differential Expression Analysis (DESeq2), Weighted Gene Co-expression Network Analysis (WGCNA), Gene Ontology enrichment (topGO), and validation of findings using Random Forest machine learning models.`,
  },
];

