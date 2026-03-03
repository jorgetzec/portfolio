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
  const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-mono transition-colors';
  
  // Custom logic for status colors
  const getStatusStyles = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'active') return 'bg-green-50 text-green-700 border border-green-200 rounded-full px-4';
    if (s === 'maintained') return 'bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4';
    if (s === 'archived') return 'bg-gray-50 text-gray-500 border border-gray-200 rounded-full px-4';
    return 'bg-white text-charcoal border border-smoke-gray rounded-md px-3';
  };

  const variants = {
    default: 'bg-smoke-gray/5 text-charcoal/60 border border-smoke-gray/20 rounded-md px-2',
    category: 'bg-white text-charcoal border-2 border-charcoal/10 rounded-md px-3 font-semibold tracking-tight',
    status: typeof children === 'string' ? getStatusStyles(children) : 'bg-white text-charcoal border border-smoke-gray rounded-md px-3',
  };

  const variantStyle = variants[variant];

  return (
    <span className={`${baseStyles} ${variantStyle} ${className}`}>
      {children}
    </span>
  );
};

