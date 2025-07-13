import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Forward Sector - Professional Security Services" />
        <meta name="keywords" content="security, CCTV, monitoring, alarm systems, manned guarding" />
        <meta name="author" content="Forward Sector" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Forward Sector" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 