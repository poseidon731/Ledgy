import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CustomerStoryLink } from './CustomerStoryLink';
import { ContentBody } from '../../components';

const getCustomerStories = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            id
            slug
            title
            subtitle
            date
            isOurStory
            company {
              logo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

export const CustomerStoriesList = ({ prefix }: Prefix) => {
  const customerStories = getCustomerStories();
  const { edges } = customerStories.allContentfulCustomerStory;
  return (
    <ContentBody>
      {edges.map(({ node }: { node: CustomerStoryBaseProps }) => {
        return (
          !node.isOurStory && (
            <CustomerStoryLink key={node.id} customerStory={node} prefix={prefix} />
          )
        );
      })}
    </ContentBody>
  );
};
