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
      <input className={`${colorClasses} w-full h-14 p-4 shadow-[0_0_0_1px] rounded-xl shadow-whiteTransparent font-sans font-medium text-lg leading-none`} type="text" {...props} />
    </>
  );
};
