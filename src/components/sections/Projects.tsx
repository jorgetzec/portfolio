import React from 'react';
import { motion } from 'framer-motion';
// import { DotGridHero } from '../layout/DotGridHero';
import { projects } from '../../data/projects';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionTitle } from '../ui/SectionTitle';
import { CategoryFilter } from '../ui/CategoryFilter';

export const Projects: React.FC = () => {
  const {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    getCategoryCount,
  } = useProjectFilter(projects);

  return (
    <section id="projects" className="py-20 px-6 relative z-0">
      {/* <div className="absolute inset-0 -z-10">
        <DotGridHero />
      </div> */}
      <div className="container mx-auto max-w-4xl">
        <SectionTitle
          title="Projects"
          subtitle="A collection of my work across web development, research tools, workshops, and bioinformatics."
        />
      </div>
      <div className="container mx-auto max-w-7xl px-6">
        <CategoryFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          getCategoryCount={getCategoryCount}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-charcoal/50">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

