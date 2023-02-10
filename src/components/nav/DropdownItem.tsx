import React, { MouseEvent } from 'react';
import { Link } from 'gatsby';

import { formatUrl, NavbarMenuColumn } from '../lib';
import { dynamicI18n, track } from '../../helpers';
import { DynamicTrans } from '../utils';
import { ListItem } from './ListItem';

const decorateHeader = (header: string) => {
  const firstTwoLetters = header.slice(0, 2);
  const rest = header.slice(2);
  return firstTwoLetters ? `<u>${firstTwoLetters}</u>${rest}` : '';
};

export type CommonListProps = Prefix & { isTextShown: boolean };

type ParentListItemProps = { title: string } & CommonListProps & {
    eventHandlingProps: {
      onMouseEnter: (e: MouseEvent) => void;
      onMouseLeave: (e: MouseEvent) => void;
    };
    menuColumns: NavbarMenuColumn[];
    disappear: () => void;
    className: string;
  };

export const DropdownItem = ({
  eventHandlingProps,
  title: parentTitle,
  menuColumns,
  prefix,
  disappear,
  isTextShown,
  className,
}: ParentListItemProps) => {
  const columns = menuColumns.length;
  const { items: firstColItems } = menuColumns[0];

  const isSingleLink = columns === 1 && firstColItems.length === 1;
  const { link: firstLink } = firstColItems[0];

  return isSingleLink ? (
    <li {...eventHandlingProps} className="dropdown-item-hover">
      <p>
        <Link to={formatUrl(prefix, firstLink)} onClick={disappear}>
          <DynamicTrans>{parentTitle}</DynamicTrans>
        </Link>
      </p>
    </li>
  ) : (
    <li {...eventHandlingProps} className="dropdown-item-hover">
      <p>
        <DynamicTrans>{parentTitle}</DynamicTrans>
      </p>

      <div className={`hover-list-child ${className}`}>
        {menuColumns.map((column, i) => {
          const { items, header } = column;
          const formattedHeader = dynamicI18n(header || '').toUpperCase();
          return (
            <div key={`${header}-${i}`} className="flex-1 px-2">
              {!!header && (
                <h6
                  className="column-header text-gray-neutral my-2"
                  dangerouslySetInnerHTML={{ __html: decorateHeader(formattedHeader) }}
                />
              )}
              {items.map((item) => {
                const { link } = item;
                const onClick = () => {
                  track('menuLink', { link });
                  disappear();
                };
                return (
                  <ListItem
                    {...item}
                    prefix={prefix}
                    key={link}
                    onClick={onClick}
                    isTextShown={isTextShown}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </li>
  );
};
