'use client';
import './globals.css';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--roboto',
});

const BukraBold = localFont({
  src: './fonts/Bukra/BukraBold.otf',
  display: 'swap',
  variable: '--bukra-bold',
});

const BukraRegular = localFont({
  src: './fonts/Bukra/BukraRegular.otf',
  display: 'swap',
  variable: '--bukra-regular',
});

const BukraMedium = localFont({
  src: './fonts/Bukra/BukraMedium.otf',
  display: 'swap',
  variable: '--bukra-medium',
});

const HelveticaNeue = localFont({
  src: './fonts/Helvetica_Neue.ttf',
  display: 'swap',
  variable: '--HelveticaNeue',
});

const HelveticaNeueMedium = localFont({
  src: './fonts/HelveticaNeue/HelveticaNeueRoman.otf',
  display: 'swap',
  variable: '--HelveticaNeue-medium',
});

const Helvetica = localFont({
  src: './fonts/helvetica/Helvetica.ttf',
  display: 'swap',
  variable: '--helvetica',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${BukraBold.variable} ${BukraMedium.variable} ${BukraRegular.variable} ${Helvetica.variable} ${HelveticaNeue.variable} ${HelveticaNeueMedium.variable} ${roboto.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
