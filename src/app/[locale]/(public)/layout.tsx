import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import ReduxProvider from './Provider';
import { ToastContainer } from 'react-toastify';
import Header from './layout/Header';
import Footer from './layout/Footer';
import MobileHeader from './layout/MobileHeader';

interface Props {
  children: React.ReactNode;
  params: { locale: 'en' | 'fr' };
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
      <ReduxProvider>
        <Header />
        <MobileHeader />
        <ToastContainer />
        {children}
        <Footer />
      </ReduxProvider>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
