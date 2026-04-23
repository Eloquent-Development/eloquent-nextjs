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
        className={`${colorClasses} h-60 w-full rounded-xl p-4 font-sans text-lg font-medium leading-none shadow-[0_0_0_1px] shadow-whiteTransparent`}
        {...props}
      />
    </>
  );
};
