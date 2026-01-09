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
];

