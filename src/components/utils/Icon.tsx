import React from 'react';

export const Icon = ({
  icon,
  height = 40,
  width = 40,
  className = '',
}: {
  icon: IconType;
  height?: number;
  width?: number;
  className?: string;
}) => {
  const src = require(`../../img/svg/icons/${icon}.svg`).default;

  return src ? (
    <img src={src} height={height} width={width} className={className} alt={`${icon} icon`} />
  ) : null;
};
