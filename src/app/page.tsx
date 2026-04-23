'use client';
import React from 'react';
import { Hero } from '../sections/Hero';
import { ContentTiles } from '../sections/ContentTiles';
import { IconsWithText } from '../sections/IconsWithText';
import { ClientList } from '../sections/ClientList';
import { Devices, Clean, Experience, Ingenuity, Integrity, Refined } from '../icons/';
import { ContactForm } from '@/sections/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero
        heading="Personalized Development Solutions"
        text="Personalized Shopify development, making it easy to take your project from start to finish."
        btnText="Get in Touch"
      />
      <IconsWithText
        heading="Capabilities"
        subheading="We tailor each project to help you show off your brand in a unique, modern and engaging way."
        icons={[
          {
            icon: <Experience />,
            title: "Experience",
            text: "Years of knowledge in Shopify and its app ecosystems to help find the right fit for you."
          },
          {
            icon: <Integrity />,
            title: "Integrity",
            text: "Working with you and beyond to ensure a dynamic site experience for your audience."
          },
          {
            icon: <Ingenuity />,
            title: "Ingenuity",
            text: "Develop creative solutions to fit the needs of the uniqueness of each project."
          },
        ]}
        btnText="Get in Touch"
      />
      <ContentTiles
        heading="Elevate Your Brand"
        tiles={[
          {
            icon: <Clean />,
            title: 'Clean + Modern',
            text: 'Every line of code is written to the highest standards — readable, maintainable, and built to scale. We treat your codebase like a long-term investment, not a short-term fix.'
          },
          {
            icon: <Devices />,
            title: 'Scalable + Dynamic',
            text: 'We build for where you\'re going, not just where you are. Every solution is architected to integrate seamlessly into your codebase, making future growth and content changes effortless.'
          },
          {
            icon: <Refined />,
            title: 'Eloquent + Refined',
            text: 'Good code is precise — no more, no less. We write exactly what\'s needed for the task at hand, resulting in lean, expressive solutions that are as easy to read as they are to maintain.'
          },
        ]}
      />
      <ClientList />
      <ContactForm
        heading="Get in Touch"
        text="Tell us a bit about your business needs and goals to ensure we can tailor an engagement to reach your goals."
      />
    </main>
  );
}
