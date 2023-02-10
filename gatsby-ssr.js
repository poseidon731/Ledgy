import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-optimize"
      src="https://www.googleoptimize.com/optimize.js?id=OPT-K7Q54LK"
    />,
  ]);
};
