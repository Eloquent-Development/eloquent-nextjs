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
    <section className="py-14 lg:py-28 bg-darkGreen text-white text-center">
      <Container>
        <div className="lg:max-w-4xl mx-auto px-4 pb-14 relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-28 before:h-px before:bg-brightGreen before:-translate-x-1/2">
          <FadeUp>
            <h1 className="text-brightGreen text-4xl lg:text-6xl leading-tight mb-5 whitespace-pre-line">{heading}</h1>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="max-w-md mx-auto mb-10">
              <p className="text-lg lg:text-xl">{text}</p>
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