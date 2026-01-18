import React from 'react';

const SEO = ({
  title,
  description,
  url = 'https://pratapaditya.com',
  image = '/og-image.jpg',
}) => {
  const siteTitle = 'Aditya Pratap Singh | Software Engineer';
  const fullTitle = title ? `${title} | Aditya Pratap Singh` : siteTitle;

  return (
    <>
      {/* React 19 automatically moves these to the <head> */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@pratapaditya97_" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEO;
