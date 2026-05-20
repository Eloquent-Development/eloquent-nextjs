"use client";

import { useState } from "react";

type Interval = "monthly" | "annual";
type PlanKey = "free" | "standard" | "pro";

// Unified feature matrix so every plan card renders the same rows — included
// features get a green check, unavailable ones a red cross. Keep in sync with
// the in-app billing page (alt-gate repo: app/routes/app.billing.tsx).
const FEATURES: Array<{ label: string } & Record<PlanKey, boolean>> = [
  { label: "AI-generated alt text", free: true, standard: true, pro: true },
  { label: "Saves to Shopify Files library", free: true, standard: true, pro: true },
  { label: "Bulk upload", free: false, standard: true, pro: true },
  { label: "Files library with per-page batch generation", free: false, standard: true, pro: true },
  { label: "Per-image context hints", free: false, standard: true, pro: true },
  { label: "AI-generated SEO filenames", free: false, standard: false, pro: true },
  { label: "Brand-aware alt text", free: false, standard: false, pro: true },
  { label: "Product catalogue browser", free: false, standard: false, pro: true },
];

const PLANS = [
  {
    key: "free" as const,
    name: "Free",
    monthlyPrice: "$0",
    annualPrice: null,
    perMonth: null,
    trialDays: null,
    quota: "25 images per month",
    highlighted: false,
  },
  {
    key: "standard" as const,
    name: "Standard",
    monthlyPrice: "$9.99",
    annualPrice: "$99",
    perMonth: "$8.25",
    trialDays: 7,
    quota: "250 images per month",
    highlighted: true,
  },
  {
    key: "pro" as const,
    name: "Pro",
    monthlyPrice: "$24.99",
    annualPrice: "$249",
    perMonth: "$20.75",
    trialDays: 7,
    quota: "1,000 images per month",
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
              {/* CSS grid keeps the icon column at a fixed 1rem regardless of */}
              {/* its glyph (or empty for the quota row), so every label in */}
              {/* column 2 starts at exactly the same x-position. */}
              <ul className="space-y-3">
                <li
                  className={`grid grid-cols-[1rem_1fr] items-start gap-2 text-sm ${
                    plan.highlighted ? "text-white" : "text-grey"
                  }`}
                >
                  <span />
                  <span>{plan.quota}</span>
                </li>
                {FEATURES.map((f) => {
                  const included = f[plan.key];
                  return (
                    <li
                      key={f.label}
                      className={`grid grid-cols-[1rem_1fr] items-start gap-2 text-sm ${
                        plan.highlighted ? "text-white" : "text-grey"
                      }`}
                    >
                      <span
                        className={`mt-0.5 text-center ${
                          included
                            ? "text-brightGreen"
                            : plan.highlighted
                              ? "text-red-400"
                              : "text-red-500"
                        }`}
                      >
                        {included ? "✓" : "✗"}
                      </span>
                      <span>{f.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
