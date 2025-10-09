import type { Metadata } from 'next';
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
      <body>{children}</body>
    </html>
  );
}
