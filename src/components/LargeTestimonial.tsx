import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { getProviderComponents } from './markdown';
import { Section, Image } from './utils';

export const LargeTestimonial = ({
  name,
  quote,
  image,
  company,
  prefix,
  showInfo,
}: LargeTestimonialProps & Prefix) => {
  const components = getProviderComponents(prefix);

  return (
    <div className="overflow-hidden py-8 mb-n5 text-white">
      <Section className="position-relative" noPadding={true}>
        <div className="my-5 my-xl-7 position-absolute z-index-background bg-primary tilted-background" />
        <div className="row  py-5 py-lg-7 my-5 my-xl-7">
          <div className="col-lg-5">
            <div className="">
              <Image image={image} />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-end ">
            <p className="text-secondary font-italic text-lg p-0 d-flex align-content-start flex-wrap m-0">
              <MDXProvider components={components}>
                <MDXRenderer>{quote.childMdx.body}</MDXRenderer>
              </MDXProvider>
            </p>
            {showInfo && (
              <p className="">
                {name.toUpperCase()}
                <br></br>
                {company}
              </p>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};
