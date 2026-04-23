'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  let colorClasses;

  switch(variant) {
    case 'primary':
      colorClasses = 'bg-brightGreen text-darkGreen';
      break;
    case 'secondary':
      colorClasses = 'bg-darkGreen text-brightGreen';
      break;
    case 'tertiary':
      colorClasses = 'bg-white text-darkGreen shadow-[0_0_0_1px] shadow-darkGreen';
      break;
  }

  return (
    <button
      className={`${colorClasses} h-9 rounded-full px-3 py-2 font-mono text-lg uppercase leading-none lg:leading-none lg:h-12 lg:px-3.5 lg:py-2.5 lg:text-xl`}
      {...props}
    >
      {children}
    </button>
  );
};
