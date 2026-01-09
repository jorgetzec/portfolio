import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'outline',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-all duration-200 hover-subtle';
  
  const variants = {
    primary: 'bg-charcoal text-white border border-charcoal',
    secondary: 'bg-white text-charcoal border border-smoke-gray',
    outline: 'bg-white text-charcoal border border-smoke-gray hover:border-charcoal',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

