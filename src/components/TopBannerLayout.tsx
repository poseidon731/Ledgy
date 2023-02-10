import React, { ReactNode } from 'react';

import { CustomFade, Section } from './utils';

type TopBannerLayoutProps = {
  title: ReactNode | string;
  subtitle: ReactNode | string;
  buttonOne: ReactNode;
  buttonTwo?: ReactNode;
  buttonThree?: ReactNode;
  deco?: ReactNode;
  componentRight: ReactNode;
  smallPadding?: boolean;
};

const DecoShapes = () => (
  <>
    <div className="new-top-deco-shape new-top-deco-shape--one" />
    <div className="new-top-deco-shape new-top-deco-shape--two" />
  </>
);

export const TopBannerLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  buttonThree,
  componentRight,
  smallPadding,
}: TopBannerLayoutProps) => (
  <header className="top-banner d-flex bg-lightest overflow-hidden">
    <Section className="w-100 pb-lg-4" smallPadding={smallPadding}>
      <div className="row">
        <div className="col-xl-5 d-flex flex-column justify-content-center position-relative z-index-base">
          <CustomFade translate="-100px, 0">
            <div className="mt-md-4 mt-lg-2 text-gray-dark">
              <h1 className="mb-2 mb-sm-3" id="topBannerTitle">
                {title}
              </h1>
              <div className="pb-3 text-lg font-weight-light line-height-lg">{subtitle}</div>
            </div>
            <div className="d-flex align-items-center flex-wrap">
              {buttonOne}
              {buttonTwo}
              {buttonThree}
            </div>
          </CustomFade>
        </div>
        <div className="col-xl-7 d-flex flex-column justify-content-center align-items-center position-relative pr-xl-0">
          <div className="w-100 mt-4 px-lg-4 px-xl-0 d-flex flex-column justify-content-center">
            <CustomFade translate="0, 100px" className="position-relative z-index-base">
              {componentRight}
            </CustomFade>
          </div>
          <DecoShapes />
        </div>
      </div>
    </Section>
  </header>
);
