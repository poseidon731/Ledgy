import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody, PostLink } from '../components';
import { ButtonGroup } from './utils';
import { ALL_TOPICS, UPDATE_TAGS } from '../helpers';

const getUpdates = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulPage(
        filter: { namespace: { eq: "/updates/" } }
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            id
            slug
            tags
            title
            description
            language
            date(formatString: "DD MMM YYYY")
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

export const UpdatesList = ({ prefix }: Prefix) => {
  const updates = getUpdates();
  const { edges } = updates.allContentfulPage;
  const [tag, setTag] = useState(ALL_TOPICS);
  return (
    <div>
      <ContentBody>
        <ButtonGroup buttonTexts={UPDATE_TAGS} onClick={setTag} tag={tag} />
        {edges.map((edge: UntypedObject) => {
          const { node } = edge;
          const { id, slug, tags, description: postDescription } = node;
          const showUpdate = (!!tags && tags.includes(`Updates_${tag}`)) || tag === ALL_TOPICS;

          return showUpdate ? (
            <PostLink
              key={id}
              to={`updates/${slug}`}
              post={node}
              description={postDescription}
              prefix={prefix}
              showImage={false}
            />
          ) : (
            <div />
          );
        })}
      </ContentBody>
    </div>
  );
};
