import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import { appUrl, name } from '../../helpers';
import logo from '../../img/logo.png';

import { toggleOverlay } from '../lib';
import { Button } from '../utils';

import { NavbarButtons } from './NavbarButtons';
import { DropdownFollowAlong } from './DropdownFollowAlong';
import { MobileNavbar } from './MobileNavbar';
import { TopUpdateBanner } from './TopUpdateBanner';

const Logo = (props: LayoutProps) => {
  return (
    <Link to={`${props.prefix}/#start`}>
      <img className="navbar-logo" src={logo} alt={name} width="141" />
    </Link>
  );
};

const toggleNav = (navRef: MutableRefObject<HTMLElement | null>) => {
  window.addEventListener('scroll', () => {
    const currentOffset = window.pageYOffset;
    const { current } = navRef || {};
    if (current) {
      if (currentOffset > 50) {
        current.classList.add('navbar-scroll');
      } else {
        current.classList.remove('navbar-scroll');
      }
    }
  });
};

export const Nav = (props: LayoutProps & { showInternalNavigation?: boolean }) => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    toggleNav(navRef);
  }, []);

  return (
    <>
      <nav ref={navRef} className="navbar bg-lightest text-dark-gray sticky-top p-0">
        {props.showInternalNavigation && <TopUpdateBanner prefix={props.prefix} />}
        <div className="container flex-nowrap">
          <Logo {...props} />
          {props.showInternalNavigation && (
            <>
              <div className="desktop-navbar">
                <DropdownFollowAlong {...props} />
                <NavbarButtons className="justify-content-end ml-2 ml-lg-4" prefix={props.prefix} />
              </div>
              <div className="nav-mobile-left">
                <a href={appUrl}>Log In</a>
                <Button
                  id="mobile-navbar-toggler"
                  className={isOpen ? 'open' : ''}
                  onClick={() => toggleOverlay(isOpen, setOpen)}
                >
                  <span /> <span /> <span /> <span />
                </Button>
              </div>
              <CSSTransition
                in={isOpen}
                timeout={750}
                classNames="mobile-navbar-transition"
                unmountOnExit
              >
                <MobileNavbar
                  isOpen={isOpen}
                  setOpen={setOpen}
                  toggleOverlay={toggleOverlay}
                  prefix={props.prefix}
                />
              </CSSTransition>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
