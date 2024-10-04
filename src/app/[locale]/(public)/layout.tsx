import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Header from './layout/Header';
import Footer from './layout/Footer';
import MobileHeader from './layout/MobileHeader';

interface Props {
  children: React.ReactNode;
  params: { locale: 'en' | 'ar' };
}

export const metadata: Metadata = {
  title: 'Emkaan Medican Co.',
  description: '',
  icons: './assets/images/icon.ico',
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
};

export default RootLayout;
