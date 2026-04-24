import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — AltGate AI",
  description: "Privacy policy for AltGate AI, a Shopify app by Eloquent Development.",
};

const EFFECTIVE_DATE = "April 24, 2026";
const CONTACT_EMAIL = "brian@eloquentdev.com";

export default function AltGatePrivacyPolicy() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">

          <h1 className="font-mono text-3xl md:text-4xl text-darkGreen mb-2">
            Privacy Policy
          </h1>
          <p className="font-mono text-brightGreen text-sm mb-10">
            AltGate AI &mdash; Effective {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10 text-grey leading-relaxed">

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Overview</h2>
              <p>
                AltGate AI (&quot;the App&quot;) is a Shopify application developed and operated by
                Eloquent Development. The App generates AI-powered alt text for images uploaded
                by Shopify merchants and saves those images to the merchant&apos;s Shopify Files
                library with alt text already set.
              </p>
              <p className="mt-3">
                This policy explains what data we collect, how we use it, and your rights with
                respect to that data.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Data We Collect</h2>
              <p className="mb-3">
                We collect and store the minimum data necessary to operate the App:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  <span className="text-darkGreen font-semibold">Shop domain and access token</span> —
                  required to authenticate with the Shopify API on your behalf. Stored securely
                  in our database.
                </li>
                <li>
                  <span className="text-darkGreen font-semibold">Monthly image usage count</span> —
                  a simple counter (shop domain + month + count) used to enforce your plan&apos;s
                  monthly image limit. No image content or metadata is stored.
                </li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-darkGreen">not</strong> collect or store any customer
                data — no names, email addresses, order history, or any other personally
                identifiable information belonging to your store&apos;s customers.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">How We Use Your Data</h2>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  Your shop credentials are used solely to upload images to your Shopify Files
                  library and to set alt text on those files.
                </li>
                <li>
                  Your usage count is used solely to display your current usage in the App and
                  to enforce monthly plan limits.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your data with third parties for marketing or
                advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Image Processing</h2>
              <p>
                When you upload an image through AltGate AI, that image is transmitted to
                Google&apos;s Gemini API for AI-powered alt text generation. <strong className="text-darkGreen">
                AltGate AI does not store your images.</strong> Images are held in memory only
                for the duration of the API call and are then discarded.
              </p>
              <p className="mt-3">
                Google processes the image under their standard API data usage policies. Images
                submitted via the Gemini API are not used to train Google&apos;s models. For
                details, refer to{" "}
                <a
                  href="https://ai.google.dev/gemini-api/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brightGreen underline underline-offset-2"
                >
                  Google&apos;s Gemini API Terms of Service
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Third-Party Services</h2>
              <p className="mb-3">The App relies on the following third-party infrastructure:</p>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>
                  <span className="text-darkGreen font-semibold">Google Gemini API</span> —
                  AI image analysis and alt text generation. Images are transmitted to Google
                  for processing and are not retained by Google beyond the API call.
                </li>
                <li>
                  <span className="text-darkGreen font-semibold">Vercel</span> —
                  application hosting and serverless infrastructure.
                </li>
                <li>
                  <span className="text-darkGreen font-semibold">Shopify</span> —
                  the platform through which the App operates. Your use of Shopify is governed
                  by Shopify&apos;s own privacy policy.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Data Retention and Deletion</h2>
              <p>
                We retain your shop&apos;s session data and usage records for as long as the App
                is installed on your store. When you uninstall AltGate AI, we receive a
                notification from Shopify and delete your session records within 48 hours in
                accordance with Shopify&apos;s data protection requirements.
              </p>
              <p className="mt-3">
                To request manual deletion of your data at any time, contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brightGreen underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">GDPR and Data Subject Rights</h2>
              <p>
                AltGate AI stores no personally identifiable information about your store&apos;s
                customers. In the event Shopify forwards a customer data request or redact
                request, we acknowledge and honor it. No customer data is held on our end to
                delete or provide.
              </p>
              <p className="mt-3">
                Merchants who are data controllers under GDPR may contact us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brightGreen underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                with any data-related requests.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Security</h2>
              <p>
                Access tokens are stored in a secured PostgreSQL database. All data in transit
                is encrypted via HTTPS. We do not log or persist image content at any point in
                the processing pipeline.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Changes to This Policy</h2>
              <p>
                We may update this policy as the App evolves. Material changes will be
                communicated via the App or by email. Continued use of the App after changes
                are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-lg text-darkGreen mb-3">Contact</h2>
              <p>
                Questions or concerns about this policy? Reach us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-brightGreen underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
