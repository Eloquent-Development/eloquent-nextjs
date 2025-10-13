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
            text: 'Lorem ipsum dolor sit amet consectetur. Sed auctor sed sapien tempus id. Lectus sodales sed commodo lorem tellus natoque. Tempor porta mauris sodales nulla arcu tempus fringilla. Ultrices vitae tempus egestas elit arcu.'
          },
          {
            icon: <Devices />,
            title: 'Scalable + Dynamic',
            text: 'Lorem ipsum dolor sit amet consectetur. Sed auctor sed sapien tempus id. Lectus sodales sed commodo lorem tellus natoque. Tempor porta mauris sodales nulla arcu tempus fringilla. Ultrices vitae tempus egestas elit arcu.'
          },
          {
            icon: <Refined />,
            title: 'Eloquent + Refined',
            text: 'Lorem ipsum dolor sit amet consectetur. Sed auctor sed sapien tempus id. Lectus sodales sed commodo lorem tellus natoque. Tempor porta mauris sodales nulla arcu tempus fringilla. Ultrices vitae tempus egestas elit arcu.'
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
