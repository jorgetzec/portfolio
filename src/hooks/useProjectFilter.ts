import { useState, useMemo } from 'react';
import type { Project, ProjectStatus } from '../data/projects';
import type { ProjectCategory } from '../data/projectCategories';

export type FilterOption = ProjectCategory | 'all';

export const useProjectFilter = (projects: Project[]) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(project => project.status === statusFilter);
    }

    return filtered;
  }, [projects, activeFilter, statusFilter]);

  const getProjectsByCategory = (category: ProjectCategory) => {
    return projects.filter(project => project.category === category);
  };

  const getCategoryCount = (category: ProjectCategory) => {
    return getProjectsByCategory(category).length;
  };

  return {
    activeFilter,
    setActiveFilter,
    statusFilter,
    setStatusFilter,
    filteredProjects,
    getProjectsByCategory,
    getCategoryCount,
  };
};

