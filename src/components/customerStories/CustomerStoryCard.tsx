import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const CustomerStoryCard = ({
  customerStory,
  prefix,
}: Prefix & {
  customerStory: AllContentfulCustomerStoryProps;
}) => {
  const { slug, company } = customerStory;
  const pagePath = `${prefix}/customer-stories/${slug}/`;
  const { logo, cover } = company;
  const { childImageSharp: logoChildImageSharp } = logo.localFile || {};
  const { childImageSharp: coverChildImageSharp = null } = cover?.localFile || {};
  const logoImage = logoChildImageSharp ? <Img {...logoChildImageSharp} /> : null;
  const coverImage = coverChildImageSharp ? <Img {...coverChildImageSharp} /> : null;
  return (
    <Link to={pagePath}>
      <div className="card card-more-stories mb-4 mx-auto px-4 py-1">
        <div className={`${coverImage ? 'h-50' : 'h-100'} d-table`}>
          <div className="card-image-wrapper">{logoImage}</div>
        </div>
        {coverImage && (
          <div className="h-50 d-table">
            <div className="card-image-wrapper">{coverImage}</div>
          </div>
        )}
      </div>
    </Link>
  );
};
