import React from 'react';

import { TopBannerLayout } from '../TopBannerLayout';

import { DemoForm } from '../forms';
import { CapterraBadge, G2Badge, SourceforgeBadge } from '../../layouts/demo';
import { isBrowser } from '../../helpers';

const getPathName = () => {
  return isBrowser ? window.location.pathname : '';
};

export const DemoTopBanner = ({
  title,
  subtitle,
}: {
  title: JSX.Element;
  subtitle: JSX.Element;
}) => {
  const pathname = getPathName();
  const form = (
    <DemoForm
      buttonText={'Show me a demo'}
      contentfulRequesterType={undefined}
      pathname={pathname}
    />
  );

  return (
    <div id="demo">
      <TopBannerLayout
        title={title}
        subtitle={subtitle}
        buttonOne={<CapterraBadge />}
        buttonTwo={<G2Badge />}
        buttonThree={<SourceforgeBadge />}
        componentRight={form}
        smallPadding
      />
    </div>
  );
};
