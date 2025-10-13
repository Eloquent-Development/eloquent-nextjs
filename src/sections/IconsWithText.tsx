'use client';
import React from 'react';
import { Button } from '../components/Button';
import { Container } from '@/components/Container';
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
    <section className="pt-[3.5rem] pb-[3.625rem] lg:pt-[5rem] text-center">
      <Container>
        <div>
          {(heading || subheading) &&
            <div className="mb-[3.5rem] mx-auto max-w-[46.75rem]">
              {heading &&
                <h2 className="text-darkGreen text-[2.25rem] lg:text-[2.875rem]">{heading}</h2>
              }
              {subheading &&
                <p className="text-[1.25rem] lg:text-[1.625rem]">{subheading}</p>
              }
            </div>
          }
          <ul className="grid gap-[3.75rem] mb-[3.5rem] lg:grid-cols-3">
            {icons.map((icon, index) => (
              <li key={index}>
                <div className="text-center">
                  <div className="flex justify-center mb-[.5rem]">
                    {icon.icon}
                  </div>
                  <h3 className="text-darkGreen uppercase text-[1.625rem] mb-[0.625rem]">{icon.title}</h3>
                  <p className="max-w-[17.5rem] mx-auto">{icon.text}</p>
                </div>
              </li>
            ))}
          </ul>
          {btnText &&
            <Button style="secondary" onClick={scrollToContactForm}>
              {btnText}
            </Button>
          }
        </div>
      </Container>
    </section>
  );
};