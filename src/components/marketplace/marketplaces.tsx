import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody } from '..';
import { MarketplaceSection } from './MarketplaceSection';

const getMarketplaces = () =>
  useStaticQuery(graphql`
    query {
      allContentfulMarketplace {
        edges {
          node {
            id
            company
            description
            logo {
              localFile {
                childImageSharp {
                  fixed(width: 180) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            slug
            isIntegration
          }
        }
      }
    }
  `);

export const Marketplaces = ({ prefix }: Prefix) => {
  const marketplaces = getMarketplaces();
  const { edges } = marketplaces.allContentfulMarketplace;
  const integrations = edges.filter((v: { node: MarketplaceProps }) => v.node.isIntegration);
  const partnerships = edges.filter((v: { node: MarketplaceProps }) => !v.node.isIntegration);

  return (
    <ContentBody>
      <div className="mt-2 mb-4">
        {integrations.length > 0 && (
          <MarketplaceSection edges={integrations} prefix={prefix} isIntegration />
        )}
        {partnerships.length > 0 && <MarketplaceSection edges={partnerships} prefix={prefix} />}
      </div>
    </ContentBody>
  );
};
