import React, { useState, MouseEvent } from 'react';

import { CSSTransition } from 'react-transition-group';

import { NAVBAR_TITLES, NAVBAR_LINKS, NavbarMenuColumn } from '../lib';

import { DropdownItem } from './DropdownItem';

const NAV_ID = 'custom-hover-nav';
const getNavbar = () => document.getElementById(NAV_ID);

const { solutionsTitle, resourcesTitle, pricingTitle, companyTitle } = NAVBAR_TITLES;
const { solutions, resources, pricing, company } = NAVBAR_LINKS;

const dropdownItems: [string, NavbarMenuColumn[], string][] = [
  [solutionsTitle, solutions, 'solutions-dd'],
  [resourcesTitle, resources, 'resources-dd'],
  [pricingTitle, pricing, 'pricing-dd'],
  [companyTitle, company, 'company-dd'],
];

export const DropdownFollowAlong = (props: LayoutProps) => {
  const [isFloatingBackground, setFloatingBackground] = useState(false);
  const [backgroundWidth, setBackgroundWidth] = useState('');
  const [backgroundHeight, setBackgroundHeight] = useState('');
  const [backgroundTransform, setBackgroundTransform] = useState('');
  const [firstHover, setFirstHover] = useState(true);
  const [isTextShown, setShowText] = useState(true);

  const hoverIn = (e: MouseEvent) => {
    setShowText(true);
    const navbar = getNavbar();
    if (navbar) {
      const { currentTarget } = e;
      currentTarget.classList.add('trigger-enter');
      setTimeout(() => currentTarget.classList.add('trigger-enter-active'), 100);
      const dropdown = currentTarget.querySelector('.hover-list-child');
      if (dropdown) {
        const dropdownPosition = dropdown.getBoundingClientRect();
        const nav = navbar.getBoundingClientRect();
        const shiftX = dropdownPosition.left - nav.left;
        const shiftY = dropdownPosition.top - nav.top;

        setFloatingBackground(true);
        setBackgroundWidth(`${dropdownPosition.width}px`);
        setBackgroundHeight(`${dropdownPosition.height}px`);
        setBackgroundTransform(`translate(${shiftX}px, ${shiftY}px)`);
        if (firstHover) setTimeout(() => setFirstHover(false), 0);
      }
    }
  };

  const hoverOut = (e: MouseEvent) => {
    const { currentTarget } = e;
    currentTarget.classList.remove('trigger-enter');
    setTimeout(() => currentTarget.classList.remove('trigger-enter-active'), 100);
    setFloatingBackground(false);
  };

  const disappear = () => {
    setShowText(false);
    setFloatingBackground(false);
    const triggered = document.querySelector('.trigger-enter');
    if (triggered) triggered.classList.remove('trigger-enter');
  };

  const eventHandlingProps = {
    onMouseEnter: (e: MouseEvent) => hoverIn(e),
    onMouseLeave: (e: MouseEvent) => hoverOut(e),
  };
  return (
    <>
      <nav id={NAV_ID}>
        <CSSTransition
          in={isFloatingBackground}
          timeout={500}
          classNames="dropdown-background-transition"
          unmountOnExit
        >
          <div
            className="dropdown-background d-flex justify-content-center position-absolute bg-white"
            style={{
              width: backgroundWidth,
              height: backgroundHeight,
              transform: backgroundTransform,
              transition: firstHover ? 'opacity 300ms' : 'all 200ms',
            }}
          >
            <span className="bubble-tip" />
          </div>
        </CSSTransition>

        <ul className="dropdown-items-parent">
          {dropdownItems.map(([parentTitle, menuColumns, className]) => (
            <DropdownItem
              key={className}
              eventHandlingProps={eventHandlingProps}
              title={parentTitle}
              menuColumns={menuColumns}
              prefix={props.prefix}
              disappear={disappear}
              isTextShown={isTextShown}
              className={className}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
