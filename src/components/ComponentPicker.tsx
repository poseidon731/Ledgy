import React from 'react';

import { CallToAction } from './CallToAction';
import { ContentWithChecklist } from './ContentWithChecklist';
import { FeatureGrid } from './FeatureGrid';
import { TitleWithGraphic } from './TitleWithGraphic';
import { TestimonialCards } from './TestimonialCards';
import { LogoBanner } from './LogoBanner';
import { SelectableCardsWithScreenshots } from './cardsWithScreenshots';
import { TopBanner } from './TopBanner';
import { ChecklistWithScreenshot } from './ChecklistWithScreenshot';
import { LongTextComponent } from './LongTextComponent';
import { StaticBlockPicker } from './StaticBlockPicker';
import { Testimonials } from './Testimonials';
import { LargeTestimonial } from './LargeTestimonial';

export const ComponentPicker = ({
  entry,
  prefix,
  smallPadding = false,
}: Prefix & { entry: MainPageEntryProps; smallPadding?: boolean }) => {
  if (!entry.id) return null;

  switch (entry.__typename) {
    case 'ContentfulTopBanner':
      return <TopBanner {...entry} prefix={prefix} />;

    case 'ContentfulLogoBanner':
      return <LogoBanner {...entry} smallPadding={smallPadding} />;

    case 'ContentfulSelectableCardsWithScreenshots':
      return <SelectableCardsWithScreenshots {...entry} />;

    case 'ContentfulFeatureGrid':
      return <FeatureGrid {...entry} />;

    case 'ContentfulTestimonialCards':
      return <TestimonialCards {...entry} prefix={prefix} />;

    case 'ContentfulTitleWithGraphic':
      return <TitleWithGraphic {...entry} prefix={prefix} />;

    case 'ContentfulContentWithChecklist':
      return <ContentWithChecklist {...entry} prefix={prefix} />;

    case 'ContentfulChecklistWithScreenshot':
      return <ChecklistWithScreenshot {...entry} />;

    case 'ContentfulCallToAction2021':
      return <CallToAction {...entry} prefix={prefix} />;

    case 'ContentfulLongText':
      return <LongTextComponent {...entry} prefix={prefix} />;

    case 'ContentfulStaticBlock':
      return <StaticBlockPicker {...entry} prefix={prefix} />;

    case 'ContentfulTestimonials':
      return <Testimonials {...entry} />;

    case 'ContentfulLargeTestimonial':
      return <LargeTestimonial {...entry} prefix={prefix} />;

    default:
      throw new Error('content __typename not recognized');
  }
};
