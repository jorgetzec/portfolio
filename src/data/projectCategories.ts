export type ProjectCategory = 
  | 'web-development'
  | 'research-tools'
  | 'workshops'
  | 'publications'
  | 'bioinformatics-pipelines';

export interface CategoryInfo {
  id: ProjectCategory;
  label: string;
  description: string;
}

export const projectCategories: CategoryInfo[] = [
  {
    id: 'web-development',
    label: 'Web Development',
    description: 'Full-stack web design and development projects',
  },
  {
    id: 'research-tools',
    label: 'Research Tools',
    description: 'Tools and resources for research',
  },
  {
    id: 'workshops',
    label: 'Workshops',
    description: 'Educational workshops and materials',
  },
  {
    id: 'publications',
    label: 'Publications',
    description: 'Scientific publications and related repositories',
  },
  {
    id: 'bioinformatics-pipelines',
    label: 'Bioinformatics Pipelines',
    description: 'Genomic analysis pipelines and workflows',
  },
];

export const getCategoryInfo = (category: ProjectCategory): CategoryInfo => {
  return projectCategories.find(cat => cat.id === category) || projectCategories[0];
};

