import React from 'react';
import Img from 'gatsby-image';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CustomFade, DynamicTrans, Section, SectionHeader } from './utils';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const ChecklistWithScreenshot = ({
  header,
  description,
  longDescription,
  checklist = [],
  image,
  inverted,
  smallImage,
}: ChecklistWithScreenshotProps) => {
  const { childImageSharp } = image.localFile || {};
  const order = inverted ? 'order-last' : '';
  const withChecklist = !!checklist;
  const isLongChecklist = withChecklist ? checklist.length > 3 : false;
  const smallImageCol = smallImage ? 5 : 8;
  const textCol = 12 - smallImageCol;
  return (
    <Section>
      <SectionHeader header={header} />
      <div className={`row ${inverted ? 'pl-lg-3' : ''}`}>
        <div
          className={`${order} col-lg-${textCol} pr-4 d-flex flex-column justify-content-center`}
        >
          <div className="text-deep-blue my-2 my-lg-0">
            {!!description && (
              <p className={`${isLongChecklist ? 'mb-2 mb-xl-3' : 'mb-4'}`}>
                <DynamicTrans>{description}</DynamicTrans>
              </p>
            )}
            {!!longDescription && !description && (
              <MDXRenderer>{longDescription.childMdx.body}</MDXRenderer>
            )}
          </div>
          {withChecklist && (
            <ul className="my-2 pl-0">
              {checklist.map((item) => {
                return (
                  <li
                    key={item}
                    className={`media d-flex align-items-center ${
                      isLongChecklist ? 'mb-2' : 'mb-3'
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`icon mr-3 text-light-energetic-blue`}
                      size="lg"
                    />
                    <p className="text-deep-blue mb-0">
                      <DynamicTrans>{item}</DynamicTrans>
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={`col-lg-${smallImageCol} pl-lg-0`}>
          <CustomFade translate="0, 100px">
            <div className="screenshot">{!!childImageSharp && <Img {...childImageSharp} />}</div>
          </CustomFade>
        </div>
      </div>
    </Section>
  );
};
