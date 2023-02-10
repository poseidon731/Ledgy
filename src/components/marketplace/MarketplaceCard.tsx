import { Link } from 'gatsby';
import React from 'react';
import { Image } from '../utils';

export const MarketplaceCard = ({
  marketplace,
  prefix,
}: Prefix & { marketplace: MarketplaceBaseProps }) => {
  const { slug, company, description, logo, isIntegration } = marketplace;
  const pagePath = `${prefix}/${isIntegration ? 'integrations' : 'partnerships'}/${slug}/`;
  return (
    <Link to={pagePath} className="col-12 col-lg-6 col-xl-4 p-3">
      <div className="card-border-style h-100 d-flex flex-column">
        <div className="bg-secondary card-marketplace p-4 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            <Image image={logo} />
          </div>
        </div>
        <div className="p-4 text-primary">
          <div className="mb-1">
            <b>{company}</b>
          </div>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
};
