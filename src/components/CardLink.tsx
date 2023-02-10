import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { targetBlank } from '../helpers';

import { LinkWithChevron } from './utils';
import { formatUrl } from './lib';

export const CardLink = ({
  title,
  type,
  description,
  image,
  to,
  prefix,
  date,
  isExternal = false,
  showImage = true,
}: Prefix & {
  title: ReactNode;
  type: 'blog' | 'customer-story';
  description: string | ReactNode;
  image: ReactNode;
  to: string;
  date?: string;
  isExternal?: boolean;
  showImage?: boolean;
}) => (
  <Link to={formatUrl(prefix, to)} {...(isExternal ? targetBlank : {})}>
    <div className={`card card-${type} mb-6`}>
      <div className="row m-0 flex-1">
        {showImage && (
          <div className="col-md-6 col-lg-3">
            <div className="d-table h-100 w-100">
              <div className="card-image-wrapper">{image}</div>
            </div>
          </div>
        )}
        <div className={`${showImage ? 'col-md-6 col-lg-9' : 'col-12'} px-2 py-4`}>
          <div className="row h-100 m-0">
            <div className="col-lg-10">
              <div className="text-primary">{title}</div>
            </div>
            <small className="col-lg-2 text-lg-right text-muted">{date}</small>
            <div className="col-12 text-primary">{description}</div>
            <div className="col-12 mt-auto">
              <LinkWithChevron
                text={isExternal ? 'Watch now' : 'Read more'}
                to={to}
                prefix={prefix}
              ></LinkWithChevron>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
