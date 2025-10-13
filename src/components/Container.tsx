import React from "react";

interface ButtonProps {
  children: JSX.Element;
}


export const Container = ({ children }: ButtonProps) => {
  return (
    <div className={`container mx-auto max-w-[75rem] px-4`}>
      {children}
    </div>
  );
};
