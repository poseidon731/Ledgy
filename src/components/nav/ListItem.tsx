import React from 'react';
import { Link } from 'gatsby';

import { formatUrl, isExternalUrl, NavbarMenuItem } from '../lib';
import { targetBlank } from '../../helpers';
import { DynamicTrans, Icon } from '../utils';
import { CommonListProps } from './DropdownItem';

const Arrow = () => <span className="list-item-hover-arrow">&#10132;</span>;

export const ListItem = ({
  icon,
  title,
  description,
  link,
  prefix,
  onClick,
  isTextShown,
}: NavbarMenuItem & CommonListProps & { onClick: () => void }) => {
  const ItemContent = (
    <div className="d-flex">
      <Icon icon={icon} className="mt-3 mr-2" height={30} width={30} />
      <div>
        <h6
          className={`text-primary text-lg d-flex align-items-center mt-2 ${
            description ? 'mb-1' : 'mb-2'
          }`}
        >
          <DynamicTrans>{title}</DynamicTrans>
          <Arrow />
        </h6>
        <div className="list-item-hover-text mb-2">
          <DynamicTrans>{description}</DynamicTrans>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`list-item-hover pr-2 py-2 ${isTextShown ? 'show' : 'hide'}`}>
      {isExternalUrl(link) ? (
        <a href={link} onClick={onClick} {...targetBlank}>
          {ItemContent}
        </a>
      ) : (
        <Link to={formatUrl(prefix, link)} onClick={onClick}>
          {ItemContent}
        </Link>
      )}
    </div>
  );
};
