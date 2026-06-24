import { Cormorant_Garamond, Lato } from 'next/font/google';
import './global.css';
import { Toaster } from '@/components/ui/sonner';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata = {
  title: "Legacy's Maquillage | Ancient Wisdom. Timeless Beauty.",
  description: 'Premium Luban Beauty Soap. Handcrafted Ayurvedic ritual with sacred Frankincense.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-[#c9a84c] selection:text-white" suppressHydrationWarning>
        {children}
        <Toaster position="top-center" expand={false} richColors />
      </body>
    </html>
  );
}
