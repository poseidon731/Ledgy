import React from 'react';

import { LongText } from './markdown';
import { Section } from './utils';

export const LongTextComponent = ({
  isWide,
  longTextContent,
  prefix,
}: Prefix & LongTextComponentProps) => (
  <Section>
    <LongText content={longTextContent} prefix={prefix} isWideMarkdown={isWide} />
  </Section>
);
