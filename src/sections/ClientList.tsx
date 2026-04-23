'use client';
import React from 'react';
import Image from "next/image";
import { Container } from '@/components/Container';

export const ClientList = () => {
  return (
    <section className="py-11 lg:py-28">
      <Container>
        <div className="flex flex-wrap justify-around items-center gap-7 lg:gap-14 max-w-7xl mx-auto">
          <Image
            className="h-[40px] lg:h-[65px]"
            alt="Stanley Logo"
            width={286}
            height={65}
            src="/stanley.svg"
          />
          <Image
            className="h-[20px] lg:h-[30px]"
            alt="Aromatech Logo"
            width={275}
            height={32}
            src="/aromatech.svg"
          />
          <Image
            className="h-[20px] lg:h-[30px]"
            alt="Soloshot Logo"
            width={240}
            height={30}
            src="/soloshot.svg"
          />
          <Image
            className="h-[20px] lg:h-[30px]"
            alt="Edyston Logo"
            width={287}
            height={65}
            src="/edyston.svg"
          />
          <Image
            className="h-[40px] lg:h-[65px]"
            alt="Fresh Meal Plan Logo"
            width={146}
            height={48}
            src="/fresh-meal-plan.svg"
          />
          <Image
            className="h-[40px] lg:h-[65px]"
            alt="MilkRun Logo"
            width={216}
            height={36}
            src="/milkrun.svg"
          />
          <Image
            className="h-[40px] lg:h-[65px]"
            alt="Bote Logo"
            width={146}
            height={54}
            src="/bote.svg"
          />
        </div>
      </Container>
    </section>
  );
};
