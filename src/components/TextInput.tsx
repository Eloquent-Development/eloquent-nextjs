import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: 'light' | 'dark';
}

export const TextInput = ({
  theme = 'light',
  ...props
}: TextInputProps) => {
  let colorClasses;

  switch(theme) {
    case 'light':
      colorClasses = 'focus:outline-darkGreen placeholder-darkGreen';
      break;
    case 'dark':
      colorClasses = 'focus:outline-brightGreen bg-darkGreen color-white placeholder-white';
      break;
  }

  return (
    <>
      <input className={`${colorClasses} w-full h-3.75rem p-[1.125rem] shadow-[0_0_0_.0625rem] rounded-[.875rem] shadow-whiteTransparent font-sans font-[500] text-[1.125rem] leading-none`} type="text" {...props} />
    </>
  );
};
