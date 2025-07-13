import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noHeader?: boolean;
  noFooter?: boolean;
}

const Layout = ({
  children,
  title = 'Forward Sector - Professional Security Services',
  description = 'Professional security services with cutting-edge technology and eco-friendly solutions. CCTV towers, alarm systems, manned guarding, and continuous monitoring.',
  keywords = 'security services, CCTV, alarm systems, manned guarding, continuous monitoring, solar powered, eco-friendly',
  ogImage = '/images/og-image.jpg',
  noHeader = false,
  noFooter = false,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://forwardsector.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href="https://forwardsector.com" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        {!noHeader && <Header />}
        <main className={`flex-1 ${!noHeader ? 'pt-28' : ''}`}>
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout; 