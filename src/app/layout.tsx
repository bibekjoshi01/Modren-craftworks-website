'use client';
import './globals.css';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

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
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';
  // Determine the font class based on language
  // useEffect(() => {
  //   // Update CSS variables based on language
  //   if (language === 'np') {
  //     //change font roboto to bukra regular when changing language to ar
  //     document.documentElement.style.setProperty(
  //       '--reg-roboto-bukra',
  //       'var(--bukra-regular)'
  //     );

  //     document.documentElement.style.setProperty(
  //       '--reg-helveticaNeue-bukra',
  //       'var(--bukra-regular)'
  //     );

  //     document.documentElement.style.setProperty(
  //       '--med--helveticaNeueMedium-bukra',
  //       'var(--bukra-medium)'
  //     );

  //     document.documentElement.style.setProperty(
  //       '--reg-helvetica-bukra',
  //       'var(--bukra-regular)'
  //     );
  //   } else {
  //     document.documentElement.style.setProperty(
  //       '--reg-roboto-bukra',
  //       'var(--roboto)'
  //     );

  //     document.documentElement.style.setProperty(
  //       '--reg-helveticaNeue-bukra',
  //       'var(--HelveticaNeue)'
  //     );

  //     document.documentElement.style.setProperty(
  //       '--med--helveticaNeueMedium-bukra',
  //       'var(--HelveticaNeue-medium)'
  //     );

  //     document.documentElement.style.setProperty(
  //       '--reg-helvetica-bukra',
  //       'var(--helvetica)'
  //     );
  //   }
  // }, [language]);

  return (
    <html
      className={`${BukraBold.variable} ${BukraMedium.variable} ${BukraRegular.variable} ${Helvetica.variable} ${HelveticaNeue.variable} ${HelveticaNeueMedium.variable} ${roboto.variable}`}
      lang={language === 'ar' ? 'ar' : 'en'}
    >
      <body>{children}</body>
    </html>
  );
}
