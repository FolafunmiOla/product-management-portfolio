import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Management Portfolio',
  description: 'Warm, minimal product manager portfolio with case studies, experience, and a downloadable resume.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
