'use client';
import React from 'react';
import { Button } from '../components/Button';
import { Container } from '@/components/Container';
import { FadeUp } from '@/components/FadeUp';
import scrollToContactForm from '@/helpers/scroll';

interface IconWithText {
  icon: JSX.Element,
  title: string,
  text: string
}

interface IconsWithTextProps {
  heading?: string,
  subheading?: string,
  btnText?: string,
  icons: IconWithText[]
}

export const IconsWithText = ({ heading, subheading, icons, btnText }: IconsWithTextProps) => {
  return (
    <section className="pt-14 pb-14 lg:pt-20 text-center">
      <Container>
        <div>
          {(heading || subheading) &&
            <div className="mb-14 mx-auto max-w-3xl">
              {heading &&
                <FadeUp>
                  <h2 className="text-darkGreen text-4xl lg:text-5xl mb-5">{heading}</h2>
                </FadeUp>
              }
              {subheading &&
                <FadeUp delay={100}>
                  <p className="text-xl lg:text-2xl">{subheading}</p>
                </FadeUp>
              }
            </div>
          }
          <ul className="grid gap-16 mb-14 lg:grid-cols-3">
            {icons.map((icon, index) => (
              <li key={index}>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {icon.icon}
                  </div>
                  <FadeUp>
                    <h3 className="text-darkGreen uppercase text-2xl mb-2.5">{icon.title}</h3>
                  </FadeUp>
                  <FadeUp delay={100}>
                    <p className="max-w-72 mx-auto">{icon.text}</p>
                  </FadeUp>
                </div>
              </li>
            ))}
          </ul>
          {btnText &&
            <Button variant="secondary" onClick={scrollToContactForm}>
              {btnText}
            </Button>
          }
        </div>
      </Container>
    </section>
  );
};