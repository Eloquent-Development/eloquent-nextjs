import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: "light" | "dark";
}

export const TextArea = ({
  theme = "light",
  ...props
}: TextAreaProps) => {
  let colorClasses;

  switch (theme) {
    case "light":
      colorClasses = "focus:outline-darkGreen placeholder-darkGreen";
      break;
    case "dark":
      colorClasses =
        "focus:outline-brightGreen bg-darkGreen color-white placeholder-white";
      break;
  }

  return (
    <>
      <textarea
        className={`${colorClasses} h-[15rem] w-full rounded-[.875rem] p-[1.125rem] font-sans text-[1.125rem] font-[500] leading-none shadow-[0_0_0_.0625rem] shadow-whiteTransparent`}
        {...props}
      />
    </>
  );
};
