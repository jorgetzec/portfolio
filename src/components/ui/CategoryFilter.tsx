import React from 'react';
import { projectCategories } from '../../data/projectCategories';
import type { ProjectCategory } from '../../data/projectCategories';
import type { FilterOption } from '../../hooks/useProjectFilter';

interface CategoryFilterProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  getCategoryCount: (category: ProjectCategory) => number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeFilter,
  onFilterChange,
  getCategoryCount,
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
          activeFilter === 'all'
            ? 'border-charcoal bg-lime-green text-charcoal'
            : 'border-smoke-gray bg-white hover:border-charcoal hover-subtle'
        }`}
      >
        All ({projectCategories.reduce((sum, cat) => sum + getCategoryCount(cat.id), 0)})
      </button>
      {projectCategories.map((category) => {
        const count = getCategoryCount(category.id);
        return (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
              activeFilter === category.id
                ? 'border-charcoal bg-lime-green text-charcoal'
                : 'border-smoke-gray bg-white hover:border-charcoal hover-subtle'
            }`}
          >
            {category.label} ({count})
          </button>
        );
      })}
    </div>
  );
};

