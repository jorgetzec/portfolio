import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-4xl font-heading text-charcoal mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-charcoal/70 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};

