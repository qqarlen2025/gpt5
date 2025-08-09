import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPT-5 Pro - Ultimate GPT-5 Resources, Tutorials & Tools Directory',
  description: 'Discover the best GPT-5 resources, tutorials, plugins, and SAAS tools. Your ultimate guide to GPT-5 with expert blogs, comprehensive tutorials, and curated tool directory.',
  keywords: 'GPT-5, GPT5, GPT-5 tutorials, GPT-5 plugins, GPT-5 tools, GPT-5 blog, AI tutorials, ChatGPT-5, GPT-5 resources, GPT-5 directory, AI tools, GPT-5 guide',
  openGraph: {
    title: 'GPT-5 Pro - Ultimate GPT-5 Resources & Tools Directory',
    description: 'Discover the best GPT-5 resources, tutorials, plugins, and SAAS tools. Your ultimate guide to GPT-5 with expert content.',
    type: 'website',
    url: 'https://gpt5pro.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT-5 Pro - Ultimate GPT-5 Resources & Tools Directory',
    description: 'Discover the best GPT-5 resources, tutorials, plugins, and SAAS tools. Your ultimate guide to GPT-5.',
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
