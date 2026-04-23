'use client';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from './Button';
import scrollToContactForm from '../helpers/scroll';

export const Header = () => {
  return (
    <header className="py-4 lg:py-5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <Image
            className="w-36 lg:w-64"
            src="/logo.svg"
            alt="Eloquent Development Logo"
            width={252}
            height={76}
            priority
          />
        </Link>
        <div>
          <Button onClick={scrollToContactForm}>
            Get In Touch
          </Button>
        </div>
      </div>
    </header>
  );
};