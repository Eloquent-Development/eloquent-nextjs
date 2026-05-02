"use client";
import React from "react";
import { Hero } from "../sections/Hero";
import { ContentTiles } from "../sections/ContentTiles";
import { IconsWithText } from "../sections/IconsWithText";
import { ClientList } from "../sections/ClientList";
import {
  Devices,
  Clean,
  Experience,
  Ingenuity,
  Integrity,
  Refined,
} from "../icons/";
import { ContactForm } from "@/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero
        heading="Storefronts worth shipping"
        text="Over a decade of Shopify expertise — themes, apps, Hydrogen — combined with AI fluency to keep your brand a step ahead."
        btnText="Get in Touch"
      />
      <IconsWithText
        heading="The Eloquent Difference"
        subheading="What distinguishes our work."
        icons={[
          {
            icon: <Experience />,
            title: "Experience",
            text: "Over ten years deep in Shopify — themes, apps, Plus, and Hydrogen.",
          },
          {
            icon: <Integrity />,
            title: "Integrity",
            text: "Architectural integrity, top to bottom. We build for the long haul.",
          },
          {
            icon: <Ingenuity />,
            title: "Ingenuity",
            text: "Creative solutions that go the extra mile and beyond.",
          },
        ]}
        btnText="Get in Touch"
      />
      <ContentTiles
        heading={
          <>
            Re<span className="animate-subtle-pulse opacity-40 motion-reduce:animate-none">(de)</span>fine Your Storefront
          </>
        }
        tiles={[
          {
            icon: <Clean />,
            title: "Clean + Modern",
            text: "Every line of code is written to the highest standards — readable, maintainable, and built to scale. We treat your codebase like a long-term investment, not a short-term fix.",
          },
          {
            icon: <Devices />,
            title: "Scalable + Dynamic",
            text: "We build for where you're going, not just where you are. Every solution is architected to integrate seamlessly into your codebase, making future growth and content changes effortless.",
          },
          {
            icon: <Refined />,
            title: "Eloquent + Refined",
            text: "Good code is precise — no more, no less. We write exactly what's needed for the task at hand, resulting in lean, expressive solutions that are as easy to read as they are to maintain.",
          },
        ]}
      />
      <ClientList />
      <ContactForm
        heading="Get in Touch"
        text="Tell us what you're building. We'll come back with a thoughtful read on how to get there."
      />
    </main>
  );
}
