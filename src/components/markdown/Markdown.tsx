import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { targetBlank, youtubeEmbedBaseUrl } from '../../helpers';
import { Embed, DynamicTrans } from '../utils';
import { isExternalUrl, formatUrl } from '../lib';
import { AuthorProps, getTeamData } from '../teamMembers';

const About = ({ about, img }: { about: AuthorProps; img: GatsbyImageFluidProps }) => (
  <div className="about d-flex justify-content-center pt-3 mt-3">
    <Img {...img} alt={about.name} className="m-4 rounded-circle float-left" />
    <div className="d-flex flex-column justify-content-center align-items-end">
      <h5 className="pt-3">{about.name}</h5>
      <h5 className="mb-3">
        <small className="text-nowrap text-muted">{about.role}</small>
      </h5>
      <div>
        <a className="social-icon mx-2" href={about.twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="social-icon" href={about.linkedIn}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  </div>
);

export const Author = ({ name }: Prefix & { name: string }) => {
  const team = getTeamData();
  return <About about={team[name]} img={team[name].profileImage} />;
};

const getImageParams = (
  params?: string
): {
  [key: string]: string;
} =>
  (params || '').split(' ').reduce((res, v) => {
    const [key, value] = v.split('=');
    return { ...res, [key]: value };
  }, {});

export const MarkdownImage = ({
  alt,
  src,
  title,
}: {
  alt: string;
  src: string;
  title?: string;
}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(limit: 1000) {
        nodes {
          contentful_id
          localFile {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `);
  const contentfulId = src.split('/')[4];
  const record = data.allContentfulAsset.nodes.find(
    (v: UntypedObject) => v.contentful_id === contentfulId
  );
  const { align, w } = getImageParams(title);
  const img = record?.localFile?.childImageSharp;
  const imgSrc = record?.localFile?.publicURL;
  const Image =
    (img && <Img {...img} />) ||
    (imgSrc && <img src={imgSrc} className="d-block mx-auto" />) ||
    null;
  return Image ? (
    <figure
      className={align ? `mx-auto float-md-${align} size-md-small m-6` : 'mx-auto my-6'}
      style={w ? { maxWidth: `${w}px` } : {}}
    >
      <a href={imgSrc} data-provide="lightbox" {...targetBlank}>
        {Image}
      </a>
      {alt && (
        <figcaption className="text-muted text-center px-4 font-weight-light mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  ) : null;
};

const languages = { en: 'English', de: 'German', fr: 'French' };

export const LanguageHint = ({ lang, documentLang }: { lang: string; documentLang: Language }) => {
  if (lang === documentLang) return null;
  const hint = `This page is only available in ${languages[documentLang]}`;
  return <DynamicTrans>{hint}</DynamicTrans>;
};

export const Lead = ({ children }: { children: Node }) => <div className="lead">{children}</div>;

export const Anchor = ({
  href,
  title,
  children,
  prefix,
}: Prefix & { children: ReactNode; href: string; title: string }) => {
  if (href.startsWith(youtubeEmbedBaseUrl)) {
    return <Embed src={href} title={title} className="embed-small" />;
  }
  const isExternal = isExternalUrl(href);
  const url = formatUrl(prefix, href);

  return (
    <a
      href={url}
      title={title}
      {...(isExternal ? targetBlank : {})}
      className="d-inline-flex align-items-center"
    >
      {children}
      {isExternal && <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 fa-xs" />}
    </a>
  );
};
