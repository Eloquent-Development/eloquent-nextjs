'use client';
import React from 'react';

interface ButtonProps {
  style?: 'primary' | 'secondary' | 'tertiary';
  children: string,
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  style = 'primary',
  children,
  ...props
}: ButtonProps) => {
  let colorClasses;

  switch(style) {
    case 'primary':
      colorClasses = 'bg-brightGreen text-darkGreen';
      break;
    case 'secondary':
      colorClasses = 'bg-darkGreen text-brightGreen';
      break;
    case 'tertiary':
      colorClasses = 'bg-white text-darkGreen shadow-[0_0_0_.0625rem] shadow-darkGreen';
      break;
  }

  return (
    <button
      className={`${colorClasses} h-[2.3125rem] rounded-[3.75rem] px-3 py-2 font-mono text-lg uppercase leading-none lg:leading-none lg:h-[2.875rem] lg:px-3.5 lg:py-2.5 lg:text-xl`}
      {...props}
    >
      {children}
    </button>
  );
};
