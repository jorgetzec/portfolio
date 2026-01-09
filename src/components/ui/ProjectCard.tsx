import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { Badge } from './Badge';
import { TagList } from './TagList';
import { Button } from './Button';
import { ImageLightbox } from './ImageLightbox';
import { ProjectModal } from './ProjectModal';
import { getCategoryInfo } from '../../data/projectCategories';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoryInfo = getCategoryInfo(project.category);

  const handleImageClick = (index: number) => {
    if (project.images.length > 0) {
      setLightboxIndex(index);
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <div className="border border-smoke-gray rounded-lg p-6 hover-subtle bg-white">
        {/* Category Badge */}
        <Badge variant="category" className="mb-3">
          {categoryInfo.label}
        </Badge>

        {/* Project Image */}
        {project.images.length > 0 && (
          <div
            className="mb-4 cursor-pointer rounded-md overflow-hidden border border-smoke-gray"
            onClick={() => handleImageClick(0)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        )}

        {/* Title and Description */}
        <h3 className="text-xl font-heading text-charcoal mb-2">{project.title}</h3>
        <p className="text-charcoal/70 mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <TagList tags={project.tags} className="mb-4" />

        {/* Status and Year */}
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="status">{project.status}</Badge>
          {project.year && (
            <span className="text-sm text-charcoal/50 font-mono">{project.year}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={project.demo ? 'flex-1 min-w-0' : 'flex-1'}
            >
              <Button variant="outline" className="w-full">
                Code
              </Button>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={project.repo ? 'flex-1 min-w-0' : 'flex-1'}
            >
              <Button variant="outline" className="w-full">
                Live Demo
              </Button>
            </a>
          )}
          {(!project.demo && !project.repo) && (
            <Button
              variant="outline"
              className="flex-1 w-full"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </Button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {project.images.length > 0 && (
        <ImageLightbox
          images={project.images}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          initialIndex={lightboxIndex}
        />
      )}

      {/* Project Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

