import React from 'react';

import { CustomFade, DynamicTrans, Icon, Section, SectionHeader } from './utils';

const FeatureGridCard = ({
  featureGridSection,
  index,
}: {
  featureGridSection: FeatureGridSectionProps;
  index: number;
}) => {
  const { title, description, icon } = featureGridSection;
  return (
    <CustomFade
      delay={index * 200}
      translate="0, 100px"
      className="col-12 col-sm-6 col-xl-3 mb-4 mb-xl-0"
    >
      <div className="left-border-with-accent h-100">
        <Icon icon={icon} />
        <h5 className="my-2 accent-border">
          <DynamicTrans>{title}</DynamicTrans>
        </h5>
        <p className="my-2">
          <DynamicTrans>{description}</DynamicTrans>
        </p>
      </div>
    </CustomFade>
  );
};

export const FeatureGrid = ({ header, sections }: FeatureGridContentProps) => (
  <Section>
    <SectionHeader header={header} />
    <div className="row my-4">
      {sections.map((section, index) => (
        <FeatureGridCard key={section.title} index={index} featureGridSection={section} />
      ))}
    </div>
  </Section>
);
