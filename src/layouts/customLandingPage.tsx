import React from 'react';
import { graphql } from 'gatsby';

import { dynamicI18n } from '../helpers';
import { ComponentPicker } from '../components';
import { Title } from '../layouts/utils';

const CustomLandingPage = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulCustomLandingPageWithBanner: CustomLandingPageProps;
    allContentfulCustomLandingPageWithBanner: UnknownObject;
  };
}) => {
  const { title, description, entries } = data.contentfulCustomLandingPageWithBanner;

  return (
    <div>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} indexable />
      {entries.map((entry) => (
        <ComponentPicker key={entry.id} entry={entry} prefix={prefix} smallPadding />
      ))}
    </div>
  );
};

export default CustomLandingPage;

export const customLandingPageQuery = graphql`
  query ($id: String!) {
    contentfulCustomLandingPageWithBanner(id: { eq: $id }) {
      id
      slug
      title
      description
      entries {
        ...ContentfulTopBannerFragment
        ...LargeTestimonialFragment
        ...ContentWithChecklistFragment
        ...TitleWithGraphicFragment
        ...FeatureGridFragment
        ...TestimonialFragment
        ...LogoBannerFragment
        ...SelectableCardsWithScreenshotsFragment
        ...CallToAction2021Fragment
        ...ChecklistWithScreenshotFragment
      }
    }
  }
`;
