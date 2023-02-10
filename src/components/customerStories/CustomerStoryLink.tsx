import React from 'react';
import Img from 'gatsby-image';

import { CardLink } from '../CardLink';

export const CustomerStoryLink = ({
  customerStory,
  prefix,
}: Prefix & { customerStory: CustomerStoryBaseProps }) => {
  const { header, subtitle, slug, company } = customerStory;
  const { childImageSharp } = company.logo.localFile || {};
  const to = `customer-stories/${slug}`;
  const image = childImageSharp ? <Img {...childImageSharp} /> : null;
  const cardTitle = <h5>{header}</h5>;
  return (
    <CardLink
      title={cardTitle}
      type="customer-story"
      description={subtitle}
      to={to}
      image={image}
      prefix={prefix}
    />
  );
};
