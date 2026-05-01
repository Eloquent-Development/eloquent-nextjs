"use client";

import { useState } from "react";

type Interval = "monthly" | "annual";

const PLANS = [
  {
    key: "free",
    name: "Free",
    monthlyPrice: "$0",
    annualPrice: null,
    perMonth: null,
    trialDays: null,
    features: [
      "25 images per month",
      "AI-generated alt text",
      "Saves to Shopify Files library",
    ],
    highlighted: false,
  },
  {
    key: "standard",
    name: "Standard",
    monthlyPrice: "$9.99",
    annualPrice: "$99",
    perMonth: "$8.25",
    trialDays: 7,
    features: [
      "250 images per month",
      "AI-generated alt text",
      "Saves to Shopify Files library",
      "Bulk upload",
      "Files library browser",
    ],
    highlighted: true,
  },
  {
    key: "pro",
    name: "Pro",
    monthlyPrice: "$24.99",
    annualPrice: "$249",
    perMonth: "$20.75",
    trialDays: 7,
    features: [
      "1,000 images per month",
      "AI-generated alt text",
      "Saves to Shopify Files library",
      "Bulk upload",
      "Files library browser",
      "AI-generated SEO filenames",
      "Brand-aware alt text",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const [interval, setSelectedInterval] = useState<Interval>("monthly");

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="flex overflow-hidden rounded-full border border-darkGreenTransparent">
          <button
            onClick={() => setSelectedInterval("monthly")}
            className={`px-6 py-2 font-mono text-sm transition-colors ${
              interval === "monthly"
                ? "bg-darkGreen text-brightGreen"
                : "bg-white text-darkGreen"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedInterval("annual")}
            className={`px-6 py-2 font-mono text-sm transition-colors ${
              interval === "annual"
                ? "bg-darkGreen text-brightGreen"
                : "bg-white text-darkGreen"
            }`}
          >
            Annual — 2 months free
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => {
          const price =
            interval === "annual" && plan.annualPrice
              ? plan.annualPrice
              : plan.monthlyPrice;
          const suffix =
            plan.key === "free"
              ? ""
              : interval === "annual"
                ? "/year"
                : "/month";
          const perMonth =
            interval === "annual" && plan.perMonth
              ? `${plan.perMonth}/month`
              : null;

          return (
            <div
              key={plan.key}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-darkGreen"
                  : "border border-darkGreenTransparent bg-white"
              }`}
            >
              {plan.highlighted && (
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brightGreen">
                  Most popular
                </p>
              )}
              <h3
                className={`mb-2 font-mono text-2xl ${
                  plan.highlighted ? "text-white" : "text-darkGreen"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mb-1 flex items-baseline gap-1">
                <span
                  className={`font-mono text-4xl ${
                    plan.highlighted ? "text-white" : "text-darkGreen"
                  }`}
                >
                  {price}
                </span>
                {suffix && (
                  <span
                    className={`font-mono text-sm ${
                      plan.highlighted ? "text-white" : "text-grey"
                    }`}
                  >
                    {suffix}
                  </span>
                )}
              </div>
              <div className="mb-6 h-5">
                {perMonth ? (
                  <p
                    className={`font-mono text-xs ${
                      plan.highlighted ? "text-white" : "text-grey"
                    }`}
                  >
                    {perMonth} billed annually
                  </p>
                ) : null}
              </div>
              {plan.trialDays && (
                <p className="mb-6 font-mono text-xs text-brightGreen">
                  {plan.trialDays}-day free trial
                </p>
              )}
              {!plan.trialDays && <div className="mb-6 h-4" />}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlighted ? "text-white" : "text-grey"
                    }`}
                  >
                    <span className="mt-0.5 shrink-0 text-brightGreen">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
