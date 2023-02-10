import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { MarkdownImage, Lead, Anchor } from './Markdown';

const getAnchorComponent =
  (prefix: string) =>
  // eslint-disable-next-line react/display-name
  ({ children, href, title }: { children: string; href: string; title: string }) =>
    (
      <Anchor href={href} title={title} prefix={prefix}>
        {children}
      </Anchor>
    );

export const getProviderComponents = (prefix: string) => ({
  a: getAnchorComponent(prefix),
  img: MarkdownImage,
  Lead,
});

export const LongText = ({
  content,
  isMarkdown = true,
  isWideMarkdown = false,
  className = '',
  prefix,
}: Prefix & {
  content: Mdx;
  isMarkdown?: boolean;
  isWideMarkdown?: boolean;
  className?: string;
}) => {
  const components = getProviderComponents(prefix);
  const markdownClassName = isWideMarkdown ? 'wide-markdown' : 'markdown';
  return (
    <div className="d-flex justify-content-center mb-4 mb-lg-5">
      <div className={`${isMarkdown ? markdownClassName : ''}  ${className} `}>
        {content && (
          <MDXProvider components={components}>
            <MDXRenderer>{content.childMdx.body}</MDXRenderer>
          </MDXProvider>
        )}
      </div>
    </div>
  );
};
