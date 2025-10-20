import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buildable - Build something amazing',
  description: 'Create apps and websites by chatting with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.droppable.ai/widget.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
