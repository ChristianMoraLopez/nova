import './globals.css';
import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NOVA Real Estate Villavicencio | Propiedades Exclusivas',
  description: 'Encuentra las mejores propiedades en Villavicencio con NOVA Real Estate. Casas, apartamentos y locales comerciales en las mejores ubicaciones.',
  keywords: 'real estate, villavicencio, properties, houses, apartments, commercial, nova real estate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-[#F7F9FC] font-open-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}