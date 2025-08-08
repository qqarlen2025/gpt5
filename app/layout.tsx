import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPT-5 - The Most Advanced AI Language Model | OpenAI',
  description: 'Experience GPT-5, OpenAI\'s most advanced AI language model with unprecedented reasoning capabilities, faster response times, and enhanced safety features. Start chatting now.',
  keywords: 'GPT-5, OpenAI, AI language model, artificial intelligence, chatbot, GPT5, advanced AI, machine learning, natural language processing',
  openGraph: {
    title: 'GPT-5 - The Most Advanced AI Language Model',
    description: 'Experience GPT-5, OpenAI\'s most advanced AI language model with unprecedented reasoning capabilities and enhanced features.',
    type: 'website',
    url: 'https://gpt5pro.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT-5 - The Most Advanced AI Language Model',
    description: 'Experience GPT-5, OpenAI\'s most advanced AI language model with unprecedented reasoning capabilities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
