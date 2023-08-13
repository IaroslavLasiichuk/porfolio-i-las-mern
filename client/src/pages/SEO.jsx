import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, link }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={link} />
    </Helmet>
  );
}
