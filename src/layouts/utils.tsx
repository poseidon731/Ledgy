import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { name } from '../helpers';

const MetaTags = ({
  indexable,
  title,
  description,
  thumbnailUrl,
}: {
  indexable: boolean;
  title: string;
  description?: string;
  thumbnailUrl?: string;
}) => (
  <>
    {!indexable && <meta name="robots" content="noindex"></meta>}
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    {thumbnailUrl && <meta property="og:image" content={thumbnailUrl} />}
    <meta name="twitter:title" content={title} />
    {description && <meta name="twitter:description" content={description} />}
    {thumbnailUrl && <meta name="twitter:image" content={thumbnailUrl} />}
  </>
);

export const Title = ({
  title,
  section,
  description,
  thumbnailUrl,
  indexable = true,
}: {
  title: string;
  section?: string;
  description?: string;
  thumbnailUrl?: string;
  indexable?: boolean;
}) => (
  <Helmet>
    <title>
      {title} {section && `| ${section}`} | {name}
    </title>
    <MetaTags
      indexable={indexable}
      title={title}
      description={description}
      thumbnailUrl={thumbnailUrl}
    />
  </Helmet>
);
Title.defaultProps = { section: '', description: '', thumbnailUrl: '' };

export const Li = ({ children }: { children: ReactNode }) => (
  <li className="media mb-1">
    <FontAwesomeIcon icon={faCheck} className="text-success mr-1 mt-1" />
    <div className="media-body ml-3">{children}</div>
  </li>
);

export const Hr = ({ marginX }: { marginX?: number }) => (
  <hr className={`my-5 my-md-7 ${marginX ? `mx-md-${marginX}` : ''}`} />
);
Hr.defaultProps = { marginX: 0 };

export const Header = ({ text, children }: { text: ReactNode | string; children?: ReactNode }) => (
  <header className="header text-white">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{text}</h1>
          {children}
        </div>
      </div>
    </div>
  </header>
);
