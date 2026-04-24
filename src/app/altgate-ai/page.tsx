import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Pricing } from "./Pricing";

export const metadata: Metadata = {
  title: "AltGate AI — AI Alt Text for Shopify",
  description:
    "AltGate AI generates accessibility-ready, SEO-optimized alt text for your Shopify store images. Powered by Gemini AI.",
};

// Update once the app is live on the App Store
const APP_STORE_URL = "https://apps.shopify.com/altgate-ai";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Upload",
    body: "Drop an image into the app — JPG, PNG, GIF, or WebP.",
  },
  {
    step: "2",
    title: "Generate",
    body: "Gemini AI analyzes your image and writes descriptive, accurate alt text in seconds.",
  },
  {
    step: "3",
    title: "Done",
    body: "The image is saved to your Shopify Files library with alt text already set, ready to use anywhere in your store.",
  },
];

export default function AltGateAIPage() {
  return (
    <main>
      <section className="bg-darkGreen py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-brightGreen">
              Shopify App
            </p>
            <h1 className="mb-6 font-mono text-5xl text-white md:text-7xl">
              AltGate AI
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-white">
              AI-generated alt text for every image in your store. Improve
              accessibility, boost SEO, and save time — automatically.
            </p>
            <a
              href={APP_STORE_URL}
              className="inline-block rounded-full bg-brightGreen px-8 py-3 font-mono text-lg uppercase text-darkGreen transition-opacity hover:opacity-90"
            >
              Add to Shopify
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div>
            <h2 className="mb-12 text-center font-mono text-3xl text-darkGreen">
              How it works
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {HOW_IT_WORKS.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="rounded-2xl border border-darkGreenTransparent p-8"
                >
                  <p className="mb-3 font-mono text-sm text-brightGreen">
                    {step}
                  </p>
                  <h3 className="mb-3 font-mono text-xl text-darkGreen">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-grey">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tan py-20">
        <Container>
          <div>
            <h2 className="mb-3 text-center font-mono text-3xl text-darkGreen">
              Pricing
            </h2>
            <p className="mb-12 text-center text-grey">
              Start free. Upgrade as you grow.
            </p>
            <Pricing />
          </div>
        </Container>
      </section>

      <section className="bg-darkGreen py-20">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 font-mono text-3xl text-white md:text-4xl">
              Ready to fix your alt text?
            </h2>
            <p className="mb-10 text-lg text-white">Free plan available.</p>
            <a
              href={APP_STORE_URL}
              className="inline-block rounded-full bg-brightGreen px-8 py-3 font-mono text-lg uppercase text-darkGreen transition-opacity hover:opacity-90"
            >
              Add to Shopify
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
