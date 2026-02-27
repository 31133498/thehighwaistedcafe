import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AgeVerificationModal from '@/components/AgeVerificationModal';

export const metadata: Metadata = {
  title: 'High Waisted Café | Cannabis Infused Edibles & Treats',
  description: 'Discover a unique selection of cannabis-infused products at High Waisted Café. From THC lollipops and lean to medicated salves and cannabutter, we offer premium, lab-tested treats and culinary essentials.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <AgeVerificationModal />
        <Toaster />
      </body>
    </html>
  );
}
