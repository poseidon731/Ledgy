import React from 'react';

import { DynamicTrans, SectionHeader, Image } from '../utils';

export const MobileCardsWithScreenshots = ({
  header,
  content,
}: SelectableCardsWithScreenshotsProps) => {
  return (
    <div className="d-lg-none">
      <SectionHeader header={header} className="text-center" />
      {content.map((v) => {
        const { title, screenshot, description } = v;
        return (
          <div className="text-center" key={`img-${title}`}>
            <h5>
              <DynamicTrans>{title}</DynamicTrans>
            </h5>
            <p>
              <DynamicTrans>{description}</DynamicTrans>
            </p>
            <div className="screenshot mb-5">
              <Image image={screenshot} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
