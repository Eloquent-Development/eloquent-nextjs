import React from "react";
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { ballingerMono, rethinkSans } from '../src/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${rethinkSans.variable} ${ballingerMono.variable}`}>
        <div className="font-sans">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
