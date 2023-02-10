import React from 'react';
import { CUSTOM_BUTTON, trackClick } from '../helpers';

import { DynamicTrans, Button } from './utils';

export const CustomButton = ({
  url,
  text,
  isPrimary,
  isTopBanner,
}: {
  url: string;
  text: string;
  isPrimary: boolean;
  isTopBanner: boolean;
}) => (
  <Button
    href={url}
    className="btn-xl mr-2 my-1 align-self-center"
    inverted={(isTopBanner && !isPrimary) || (!isTopBanner && isPrimary)}
    outline={(isTopBanner && !isPrimary) || (!isTopBanner && !isPrimary)}
    onClick={() => trackClick(CUSTOM_BUTTON, { text, url })}
  >
    <DynamicTrans>{text}</DynamicTrans>
  </Button>
);
