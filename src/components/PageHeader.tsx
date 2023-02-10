import React from 'react';

import { LanguageHint } from '../components';
import { CustomFade } from './utils';

const DEFAULT_LANG = 'en';

export const PageHeader = ({
  title,
  subtitle = '',
  lang = DEFAULT_LANG,
  documentLang = DEFAULT_LANG,
  textCenter = false,
}: {
  title: string;
  subtitle?: string;
  lang?: Language;
  documentLang?: Language;
  textCenter?: boolean;
}) => {
  return (
    <header className="header-custom bg-lightest text-gray-dark d-flex flex-column justify-content-center mb-4 mb-md-5 mb-lg-7">
      <CustomFade translate="-100px, 0">
        <div className={`container my-4 my-lg-6 my-xl-7 ${textCenter ? 'text-center' : ''}`}>
          <h1>{title}</h1>
          {subtitle && <p className="text-lg">{subtitle}</p>}
          <LanguageHint lang={lang} documentLang={documentLang} />
        </div>
      </CustomFade>
    </header>
  );
};
