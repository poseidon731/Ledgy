import React from 'react';

import { CustomFade, Section, Image, DynamicTrans } from './utils';

const Logo = ({ logo, index }: { logo: ImageProps; index: number }) => (
  <CustomFade delay={index * 100} className="col-12 col-sm-6 col-md-4 col-xl-2 my-2">
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70px' }}>
      <Image image={logo} />
    </div>
  </CustomFade>
);

export const LogoBanner = ({
  logos,
  description,
  smallPadding = false,
}: LogoBannerProps & { smallPadding?: boolean }) => (
  <Section className="bg-lightest" smallPadding={smallPadding}>
    {!!description && (
      <div className="text-lg font-weight-light mb-4 text-gray-dark text-center">
        <DynamicTrans>{description}</DynamicTrans>
      </div>
    )}
    <div className="row align-items-center justify-content-around">
      {logos.map((logo, index) => (
        <Logo logo={logo} key={`logo-banner-${logo.title}`} index={index} />
      ))}
    </div>
  </Section>
);
