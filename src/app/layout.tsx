import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Assessment App',
  description: 'Basic Next.js with TypeScript and Tailwind CSS',
};

export default function RootLayout ({
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
