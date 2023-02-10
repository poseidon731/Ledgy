import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContentBody, PostLink } from '../components';
import { ButtonGroup } from './utils';
import { ALL_TOPICS, BLOG_TAGS } from '../helpers';

const getBlogs = () =>
  useStaticQuery(graphql`
    query {
      ...DefaultCover
      allContentfulPage(
        filter: { namespace: { eq: "/blog/" } }
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            id
            tags
            slug
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

export const BlogsList = ({ prefix }: Prefix) => {
  const blogs = getBlogs();
  const { edges } = blogs.allContentfulPage;
  const [tag, setTag] = useState(ALL_TOPICS);
  return (
    <ContentBody>
      <ButtonGroup buttonTexts={BLOG_TAGS} onClick={setTag} tag={tag} />
      {edges.map((edge: UntypedObject) => {
        const { node } = edge;
        const { id, slug, tags, description: postDescription } = node;
        const showBlog = (!!tags && tags.includes(`Blog_${tag}`)) || tag === ALL_TOPICS;

        return showBlog ? (
          <PostLink
            key={id}
            to={`blog/${slug}`}
            post={node}
            description={postDescription}
            prefix={prefix}
          />
        ) : (
          <div />
        );
      })}
    </ContentBody>
  );
};
