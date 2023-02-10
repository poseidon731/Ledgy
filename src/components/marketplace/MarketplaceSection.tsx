import React from 'react';

import { MarketplaceCard } from './MarketplaceCard';
import { Section, DynamicTrans } from '../utils';

export const MarketplaceSection = ({
  edges,
  prefix,
  isIntegration = false,
}: {
  edges: { node: MarketplaceBaseProps }[];
  prefix: string;
  isIntegration?: boolean;
}) => (
  <Section smallPadding>
    <h4 className="my-2">
      <DynamicTrans>{isIntegration ? 'Integrations' : 'Partnerships'}</DynamicTrans>
    </h4>
    <div className="row">
      {edges.map(({ node }) => (
        <MarketplaceCard key={node.id} prefix={prefix} marketplace={node} />
      ))}
    </div>
  </Section>
);
