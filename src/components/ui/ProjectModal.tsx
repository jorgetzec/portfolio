import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/projects';
import { Badge } from './Badge';
import { TagList } from './TagList';
import { Button } from './Button';
import { getCategoryInfo } from '../../data/projectCategories';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!project) return null;

  const categoryInfo = getCategoryInfo(project.category);
  
  // Use imageDetails if available, otherwise fall back to images array
  const imagesToDisplay: Array<{ url: string; description: string }> = 
    project.imageDetails || 
    project.images.map(url => ({ url, description: '' }));

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
      />

      {/* Modal Container - Fixed positioning from right */}
      <div 
        className="fixed top-0 right-0 bottom-0 z-[101] pointer-events-none w-full max-w-4xl"
      >
        {/* Modal Content - Animation from right */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white border-l border-smoke-gray flex flex-col shadow-xl h-screen pointer-events-auto overflow-hidden"
        >
            {/* Header */}
            <div className="p-6 border-b border-smoke-gray bg-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Badge variant="category" className="mb-2">
                    {categoryInfo.label}
                  </Badge>
                  <h2 className="text-3xl font-heading text-charcoal mb-2">
                    {project.title}
                  </h2>
                  {project.year && (
                    <span className="text-sm text-charcoal/50 font-mono">
                      {project.year}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-charcoal/50 hover:text-charcoal transition-colors p-2"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <TagList tags={project.tags} />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-20 py-6 min-h-0">
              {/* Hero Image - Full Width */}
              {imagesToDisplay.length > 0 && (() => {
                const heroImage = imagesToDisplay.find(img => 
                  img.url.toLowerCase().includes('hero') || 
                  img.description.toLowerCase().includes('hero')
                );

                if (!heroImage) return null;

                const getImageUrl = (url: string) => {
                  return url.startsWith('/') 
                    ? `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`
                    : url;
                };

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                    className="mb-8"
                  >
                    <div className="rounded-md overflow-hidden border border-smoke-gray bg-white scale-[0.85] origin-center">
                      <img
                        src={getImageUrl(heroImage.url)}
                        alt={`${project.title} - Hero`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </motion.div>
                );
              })()}

              {/* Project Details (if available) */}
              {project.details && (
                <div className="mb-8">
                  <h3 className="text-xl font-heading text-charcoal mb-6">Project Details</h3>
                  <div className="text-charcoal/80 leading-relaxed space-y-6">
                    {project.details.split('\n\n').map((paragraph, pIndex) => {
                      if (!paragraph.trim()) return null;
                      
                      const lines = paragraph.split('\n');
                      const firstLine = lines[0]?.trim();
                      const restOfParagraph = lines.slice(1).join(' ').trim();
                      
                      // Check if it's a heading (short line, likely a title)
                      if (firstLine && firstLine.length < 50 && !firstLine.includes('.') && restOfParagraph) {
                        return (
                          <div key={pIndex} className="space-y-3">
                            <h4 className="font-heading text-charcoal font-semibold text-lg mt-2 first:mt-0">
                              {firstLine}
                            </h4>
                            {restOfParagraph && (
                              <p className="text-charcoal/70 leading-relaxed text-base">
                                {restOfParagraph}
                              </p>
                            )}
                          </div>
                        );
                      }
                      
                      // Regular paragraph - treat as a single paragraph
                      const fullParagraph = paragraph.trim();
                      if (fullParagraph) {
                        return (
                          <p key={pIndex} className="text-charcoal/70 leading-relaxed text-base">
                            {fullParagraph}
                          </p>
                        );
                      }
                      
                      return null;
                    })}
                  </div>
                </div>
              )}

              {/* Other Images - At the end */}
              {imagesToDisplay.length > 0 && (() => {
                const otherImages = imagesToDisplay.filter(img => 
                  !img.url.toLowerCase().includes('hero') && 
                  !img.description.toLowerCase().includes('hero')
                );

                if (otherImages.length === 0) return null;

                const getImageUrl = (url: string) => {
                  return url.startsWith('/') 
                    ? `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`
                    : url;
                };

                const getImageIndex = (url: string) => {
                  return imagesToDisplay.findIndex(img => img.url === url);
                };

                // If only one image, display it full width
                if (otherImages.length === 1) {
                  const singleImage = otherImages[0];
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8"
                    >
                      <div className="scale-[0.85] origin-center">
                        <img
                          src={getImageUrl(singleImage.url)}
                          alt={singleImage.description || `${project.title} - Layout`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </motion.div>
                  );
                }

                // Multiple images: Bento grid layout
                const resourcesImage = otherImages.find(img => 
                  img.url.toLowerCase().includes('resources')
                );
                const activitiesImage = otherImages.find(img => 
                  img.url.toLowerCase().includes('activities')
                );
                const clubImage = otherImages.find(img => 
                  img.url.toLowerCase().includes('club')
                );

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-1 mt-8"
                  >
                    {/* Left side - Resources */}
                    {resourcesImage && (
                      <motion.div
                        key={getImageIndex(resourcesImage.url)}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex-1"
                      >
                        <div className="rounded-md overflow-hidden border border-smoke-gray bg-white scale-[0.85] origin-center">
                          <img
                            src={getImageUrl(resourcesImage.url)}
                            alt={`${project.title} - Resources`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Right side - Activities (top) and Club (bottom) */}
                    {(activitiesImage || clubImage) && (
                      <div className="flex-1 flex flex-col gap-1">
                        {/* Activities - Top */}
                        {activitiesImage && (
                          <motion.div
                            key={getImageIndex(activitiesImage.url)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex-1"
                          >
                            <div className="rounded-md overflow-hidden border border-smoke-gray bg-white scale-[0.85] origin-center">
                              <img
                                src={getImageUrl(activitiesImage.url)}
                                alt={`${project.title} - Activities`}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          </motion.div>
                        )}

                        {/* Club - Bottom */}
                        {clubImage && (
                          <motion.div
                            key={getImageIndex(clubImage.url)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex-1"
                          >
                            <div className="rounded-md overflow-hidden border border-smoke-gray bg-white scale-[0.85] origin-center">
                              <img
                                src={getImageUrl(clubImage.url)}
                                alt={`${project.title} - Club`}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })()}

              {/* Status */}
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="status">{project.status}</Badge>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-smoke-gray bg-white flex gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    View Code
                  </Button>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
    </AnimatePresence>
  );

  return typeof document !== 'undefined' 
    ? createPortal(modalContent, document.body)
    : null;
};

