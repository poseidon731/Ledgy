import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

import { targetBlank } from '../../helpers';
import { isExternalUrl } from '../lib';

type ButtonType = 'button' | 'submit' | 'reset';

export const Button = ({
  children,
  outline = false,
  cta = false,
  energetic = false,
  inverted = false,
  secondary = false,
  className = '',
  onClick,
  href,
  id = '',
  disabled = false,
  type = 'button',
  ...buttonProps
}: {
  children: ReactNode;
  outline?: boolean;
  cta?: boolean;
  energetic?: boolean;
  inverted?: boolean;
  secondary?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  id?: string;
  disabled?: boolean;
  type?: ButtonType;
}) => {
  const color =
    (cta && 'btn-red') ||
    (energetic && 'btn-info text-white hover-brigthen') ||
    (secondary && 'btn-secondary border border-light-energetic-blue') ||
    (inverted && outline && 'btn-white border border-primary') ||
    (outline && 'btn-primary border border-white') ||
    (inverted && 'btn-light') ||
    'btn-primary';
  const classes = `btn ${color} ${className} ${disabled ? 'button-disabled' : ''}`;
  const props = { ...buttonProps, onClick, className: classes };

  if (href) {
    if (isExternalUrl(href))
      return (
        <a {...props} id={id} href={disabled ? undefined : href} {...targetBlank}>
          {children}
        </a>
      );

    return (
      <Link to={disabled ? '' : href}>
        <button {...props} id={id}>
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button {...props} id={id} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
