import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Hero } from '../sections/Hero';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Hero',
  component: Hero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    heading: 'Personalized Development Solutions',
    text: 'Personalized Shopify development, making it easy to take your project from start to finish.',
    btnText: 'Get in Touch',
  },
};
