import React from 'react';
import { i18n } from '@lingui/core';

import { isBrowser, addTranslation } from '../../helpers';

export const DynamicTrans = ({ children: text }: { children: string }) => {
  if (!isBrowser) addTranslation(text);

  return <>{i18n._(text)}</>;
};
