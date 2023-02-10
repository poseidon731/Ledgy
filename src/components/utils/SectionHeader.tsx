import React from 'react';
import { dynamicI18n } from '../../helpers';
import { getUnderlineHtml } from '../lib';

export const SectionHeader = ({
  header,
  className = '',
}: {
  header: string;
  className?: string;
}) => (
  <h2
    className={`pb-2 mb-md-4 custom-underline ${className}`}
    dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(header)) }}
  ></h2>
);
