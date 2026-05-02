"use client";
import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "/gopure.svg",
    alt: "Gopure Beauty Logo",
    width: 148,
    height: 24,
    className: "h-[22px] w-auto lg:h-[32px]",
  },
  {
    src: "/stanley.svg",
    alt: "Stanley Logo",
    width: 286,
    height: 65,
    className: "h-[32px] w-auto lg:h-[52px]",
  },
  {
    src: "/aromatech.svg",
    alt: "Aromatech Logo",
    width: 275,
    height: 32,
    className: "h-[16px] w-auto lg:h-[24px]",
  },
  {
    src: "/soloshot.svg",
    alt: "Soloshot Logo",
    width: 240,
    height: 30,
    className: "h-[16px] w-auto lg:h-[24px]",
  },
  {
    src: "/edyston.svg",
    alt: "Edyston Logo",
    width: 287,
    height: 65,
    className: "h-[16px] w-auto lg:h-[24px]",
  },
  {
    src: "/fresh-meal-plan.svg",
    alt: "Fresh Meal Plan Logo",
    width: 146,
    height: 48,
    className: "h-[32px] w-auto lg:h-[52px]",
  },
  {
    src: "/milkrun.svg",
    alt: "MilkRun Logo",
    width: 216,
    height: 36,
    className: "h-[24px] w-auto lg:h-[40px]",
  },
  {
    src: "/bote.svg",
    alt: "Bote Logo",
    width: 146,
    height: 54,
    className: "h-[32px] w-auto lg:h-[52px]",
  },
];

export const ClientList = () => {
  return (
    <section className="overflow-hidden py-11 lg:py-28">
      <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 px-6 lg:hidden">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            className={`shrink-0 ${logo.className}`}
            alt={logo.alt}
            src={logo.src}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
      <div className="hidden w-max animate-marquee items-center gap-20 hover:[animation-play-state:paused] motion-reduce:animate-none lg:flex">
        {[...logos, ...logos].map((logo, i) => (
          <Image
            key={`${logo.src}-${i}`}
            className={`shrink-0 ${logo.className}`}
            alt={logo.alt}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            aria-hidden={i >= logos.length}
          />
        ))}
      </div>
    </section>
  );
};
