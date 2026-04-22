'use client';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { TextInput } from '@/components/TextInput';
import { TextArea } from '@/components/TextArea';
import { Container } from '@/components/Container';

interface ContactFormProps {
  heading: string,
  text: string,
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm = ({ heading, text }: ContactFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-[2rem] bg-darkGreen text-white lg:py-[9rem]" data-contact-form>
      <Container>
        <div className="grid gap-[2.375rem] lg:grid-cols-2 lg:gap-0">
          <div className="lg:max-w-[26.25rem]">
            <h2 className="text-brightGreen text-[2.25rem] mb-[.5rem] lg:text-[2.875rem] font-[300]">{heading}</h2>
            <p className="text-[1.25rem]">{text}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-[1.25rem]">
              <div className="grid gap-[1.25rem] lg:flex lg:gap-[1.25rem]">
                <TextInput
                  theme="dark"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <TextInput
                  theme="dark"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              <TextInput
                theme="dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <TextArea
                theme="dark"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              />
            </div>
            {status === 'success' && (
              <p className="mt-[1rem] text-brightGreen">Message sent! We&apos;ll be in touch.</p>
            )}
            {status === 'error' && (
              <p className="mt-[1rem] text-red-400">Something went wrong. Please try again.</p>
            )}
            <div className="mt-[2rem] flex justify-end">
              <Button onClick={() => {}} type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};