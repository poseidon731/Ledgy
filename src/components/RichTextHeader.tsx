import React from 'react';
import Img from 'gatsby-image';
import { renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';

import { dynamicI18n } from '../helpers';

const Paragraph = (_: DisableTypeScript, children: string[]) => {
  const translatedChildren = children.map((v) => dynamicI18n(v));
  return <h1 className="my-0 mr-2">{translatedChildren}</h1>;
};

const EmbeddedAsset = (node: DisableTypeScript) => <Img {...node.data.target} className="mr-2" />;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: Paragraph,
    [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
  },
};

export const RichTextHeader = ({
  richTextData,
  className,
}: {
  richTextData: RenderRichTextData<DisableTypeScript>;
  className: string;
}) => (
  <div className={`d-flex align-items-center flex-wrap text-muted ${className}`}>
    {renderRichText(richTextData, options)}
  </div>
);
