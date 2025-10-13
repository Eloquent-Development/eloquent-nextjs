import React from 'react';

interface TextInputProps {
  value?: string;
  theme?: 'light' | 'dark';
  onChange: (e: any) => void;
}

export const TextInput = ({
  value = '',
  theme = 'light',
  onChange,
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
      <input className={`${colorClasses} w-full h-3.75rem p-[1.125rem] shadow-[0_0_0_.0625rem] rounded-[.875rem] shadow-whiteTransparent font-sans font-[500] text-[1.125rem] leading-none`} type="text" value={value} onChange={onChange} {...props} />
    </>
  );
};
