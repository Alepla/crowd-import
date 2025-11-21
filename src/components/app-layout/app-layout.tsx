import React from 'react';
import {
  Header,
  Footer,
  Sidebar,
  ScrollToTop,
  ScrollToTopButton,
  FloatingThemeToggle,
} from '../';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Sidebar />
      {children}
      <Footer />
      <ScrollToTopButton />
      <FloatingThemeToggle />
    </>
  );
};

