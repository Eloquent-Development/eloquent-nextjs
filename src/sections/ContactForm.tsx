"use client";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { TextInput } from "@/components/TextInput";
import { TextArea } from "@/components/TextArea";
import { Container } from "@/components/Container";
import { FadeUp } from "@/components/FadeUp";

interface ContactFormProps {
  heading: string;
  text: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export const ContactForm = ({ heading, text }: ContactFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message, honeypot }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="bg-darkGreen py-[2rem] text-white lg:py-[9rem]"
      data-contact-form
    >
      <Container>
        <div className="grid gap-[2.375rem] lg:grid-cols-2 lg:gap-0">
          <div className="lg:max-w-[26.25rem]">
            <FadeUp>
              <h2 className="mb-[.5rem] text-[2.25rem] font-[300] text-brightGreen lg:text-[2.875rem]">
                {heading}
              </h2>
            </FadeUp>
            <FadeUp delay={100}>
              <p className="text-[1.25rem]">{text}</p>
            </FadeUp>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />
            <div className="grid gap-[1.25rem]">
              <div className="grid gap-[1.25rem] lg:flex lg:gap-[1.25rem]">
                <TextInput
                  theme="dark"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                  maxLength={100}
                />
                <TextInput
                  theme="dark"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                  maxLength={100}
                />
              </div>
              <TextInput
                theme="dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                required
                maxLength={254}
              />
              <TextArea
                theme="dark"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
                maxLength={5000}
              />
            </div>
            {status === "success" && (
              <p className="mt-[1rem] text-brightGreen">
                Message sent! We&apos;ll be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-[1rem]">
                Something went wrong. Please try again.
              </p>
            )}
            <div className="mt-[2rem] flex justify-end">
              <Button
                onClick={() => {}}
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
