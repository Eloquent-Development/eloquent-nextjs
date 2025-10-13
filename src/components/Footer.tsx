import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative h-[9rem] bg-brightGreen lg:h-[16rem]">
      <Image
        className="absolute bottom-0 right-0 hidden max-h-full lg:inline-block lg:max-w-none"
        src="/logo-footer.svg"
        alt="Eloquent Development Logo"
        width={1598}
        height={360}
        priority
      />
      <Image
        className="absolute bottom-0 left-0 right-0 max-h-full lg:hidden"
        src="/logo-footer-mobile.svg"
        alt="Eloquent Development Logo"
        width={1598}
        height={360}
        priority
      />
      <div className="container mx-auto py-[.875rem] text-[.625rem] text-darkGreen">
        &copy; 2024 Eloquent Development All Rights Reserved.
      </div>
    </footer>
  );
};
