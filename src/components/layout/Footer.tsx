import React from 'react';
import { personalInfo } from '../../data/personal';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-smoke-gray py-8 mt-20 relative z-0 bg-smoke-gray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-charcoal/70">
            © {new Date().getFullYear()} Jorge Tzec. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-reddish transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-reddish transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-charcoal/70 hover:text-reddish transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

