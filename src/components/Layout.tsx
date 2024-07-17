import React, { useEffect, useState } from 'react';
import StyledComponentsRegistry from '../../lib/registry';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return <></>;

  return (
    <StyledComponentsRegistry>
      <Navbar invert={true} />
      {children}
      <Footer />
    </StyledComponentsRegistry>
  );
}
