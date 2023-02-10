import React from 'react';
import Img from 'gatsby-image';

export const Image = ({
  image,
  alt = '',
  className = '',
}: {
  image?: ImageProps;
  alt?: string;
  className?: string;
}) => {
  const { childImageSharp } = image?.localFile || {};
  return childImageSharp ? <Img alt={alt} className={className} {...childImageSharp} /> : null;
};
