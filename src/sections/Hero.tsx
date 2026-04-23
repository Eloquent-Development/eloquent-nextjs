'use client';
import React from 'react';
import { Button } from '../components/Button';
import { Container } from '@/components/Container';
import { FadeUp } from '@/components/FadeUp';
import scrollToContactForm from '../helpers/scroll';

interface HeroProps {
  heading: string,
  text: string,
  btnText: string,
}

export const Hero = ({ heading, text, btnText }: HeroProps) => {
  return (
    <section className="py-[3.5rem] lg:py-[7rem] bg-darkGreen text-white text-center">
      <Container>
        <div className="lg:max-w-[56.25rem] mx-auto px-4 pb-[3.375rem] relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-[7rem] before:h-[.0625rem] before:bg-brightGreen before:-translate-x-1/2">
          <FadeUp>
            <h1 className="text-brightGreen text-[2.625rem] lg:text-[4rem] leading-[1.2] mb-[1.25rem]">{heading}</h1>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="max-w-[28rem] mx-auto mb-[2.375rem]">
              <p className="text-[1.125rem] lg:text-[1.25rem]">{text}</p>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <Button onClick={scrollToContactForm}>
              {btnText}
            </Button>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
};