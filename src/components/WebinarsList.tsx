import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { ContentBody, PostLink } from '../components';

const getWebinars = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulWebinar(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            id
            title
            date(formatString: "DD MMM YYYY")
            youtube
            description {
              childMdx {
                body
              }
            }
            cover {
              localFile {
                childImageSharp {
                  ...CoverImage
                }
              }
            }
          }
        }
      }
    }
  `);

export const WebinarsList = ({ prefix }: Prefix) => {
  const webinars = getWebinars();
  const { edges } = webinars.allContentfulWebinar;
  return (
    <ContentBody>
      {edges.map((edge: UntypedObject) => {
        const { node } = edge;
        const { id, youtube, description } = node;
        return (
          <PostLink
            key={id}
            to={youtube}
            post={node}
            description={<MDXRenderer>{description.childMdx.body}</MDXRenderer>}
            prefix={prefix}
            isExternal
          />
        );
      })}
    </ContentBody>
  );
};
