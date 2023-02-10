import React from 'react';

import { dynamicI18n } from '../helpers';
import { DynamicTrans, Section, Image } from './utils';
import { formatUrl, getUnderlineHtml } from './lib';
import { RichTextHeader } from './RichTextHeader';
import { CustomButton } from './CustomButton';

export const TitleWithGraphic = ({
  title,
  headerWithMedia,
  motivationText,
  graphic,
  description,
  buttons,
  prefix,
  isTopBanner = false,
}: TitleWithGraphicProps & Prefix & { isTopBanner?: boolean }) => {
  const wrapperClassName = isTopBanner ? 'bg-lightest top-banner' : 'py-8 mb-n5';
  const tiltedBackground = isTopBanner ? '' : 'bg-primary tilted-background';

  const motivationTextColor = isTopBanner ? 'text-gray-dark' : 'text-secondary';
  const titleColor = isTopBanner ? 'text-primary' : 'text-secondary';
  const titleClassName = `my-4 font-weight-bold ${titleColor}`;
  const descriptionColor = isTopBanner ? 'text-primary' : 'text-white';

  const rowMargin = isTopBanner ? 'my-3 my-xl-5' : 'my-5 my-xl-7';
  const graphicCol = isTopBanner ? 'order-last' : '';
  const textCol = isTopBanner ? 'col-lg-6' : 'col-lg-5';

  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      <Section className="position-relative" noPadding={isTopBanner} smallPadding>
        <div className={`${tiltedBackground} position-absolute z-index-background`} />
        <div className={`row justify-content-center py-5 py-lg-7 ${rowMargin}`}>
          <div
            className={`${graphicCol} col-11 col-sm-9 col-md-7 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end`}
          >
            <div className="w-100">
              <Image image={graphic} />
            </div>
          </div>
          <div className={`${textCol} pt-2 pt-lg-0`}>
            <p className={motivationTextColor}>
              <DynamicTrans>{motivationText.toUpperCase()}</DynamicTrans>
            </p>
            {headerWithMedia ? (
              <RichTextHeader richTextData={headerWithMedia} className={titleClassName} />
            ) : (
              <h1
                className={`custom-underline ${titleClassName}`}
                dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(title)) }}
              />
            )}

            <p className={descriptionColor}>
              <DynamicTrans>{description}</DynamicTrans>
            </p>
            {!!buttons && (
              <div className="d-flex align-items-center flex-wrap">
                {buttons.map(({ id, text, url }, index) => (
                  <CustomButton
                    key={id}
                    text={text}
                    url={formatUrl(prefix, url)}
                    isPrimary={index === 0}
                    isTopBanner={isTopBanner}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};
