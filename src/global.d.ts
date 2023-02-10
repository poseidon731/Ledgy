import { GatsbyImageProps } from 'gatsby-image';

declare global {
  interface Window {
    analytics: UntypedObject;
    dataLayer: UntypedObject;
    Sentry?: UntypedObject;
    Grnhse?: UntypedObject;
  }
  type ImageProps = {
    localFile?: { childImageSharp: GatsbyImageProps };
    title: string;
    description?: string;
  };
  type CompanyProps = {
    name: string;
    logo: ImageProps;
    cover: ImageProps;
    contactName: string;
    contactTitle: string;
    mainQuote: Mdx;
    yearFounded: string;
    funding?: string;
    employeeCount: string;
    sector: string;
    location: string;
    stage: string;
  };
}
