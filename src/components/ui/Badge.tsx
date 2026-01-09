import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'category' | 'status';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-md text-xs font-mono';
  
  const variants = {
    default: 'bg-white text-charcoal border border-smoke-gray',
    category: 'bg-white text-charcoal border border-smoke-gray',
    status: 'bg-white text-charcoal border border-smoke-gray',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

