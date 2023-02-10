import { useStaticQuery, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { hasAcceptedCookies } from '../../helpers';
import { NewsletterPopUp } from './NewsletterPopUp';

const NEWSLETTER = 'newsletter';

const MILLISECONDS_PER_SECOND = 1000;

export const PopUp = ({ popup }: { popup: PopupProps }) => {
  const [show, setShow] = useState(false);
  const { type, delay } = popup;

  const hide = () => setShow(false);

  useEffect(() => {
    if (hasAcceptedCookies()) {
      setTimeout(() => {
        setShow(true);
      }, delay * MILLISECONDS_PER_SECOND);
    }
  }, []);

  switch (type) {
    case NEWSLETTER:
      return (show && <NewsletterPopUp hide={hide} />) || null;
    default:
      return null;
  }
};

const popupQuery = graphql`
  {
    allContentfulPagePopup {
      edges {
        node {
          url
          popup {
            type
            delay
          }
        }
      }
    }
  }
`;

const getPagePopup = (pages: PagePopupProps[], pathname: string) =>
  pages.filter((page) => {
    const { url, popup } = page.node;
    const validURL = new RegExp(`^/${url}/.+`);
    return !!(validURL.test(pathname) && popup);
  });

export const PopUpCard = ({ pathname }: { pathname: string }) => {
  const result = useStaticQuery(popupQuery);
  const pages: PagePopupProps[] = result.allContentfulPagePopup.edges;
  const [pagePopup] = getPagePopup(pages, pathname);
  if (!pagePopup) return null;
  const { popup } = pagePopup.node;
  return popup ? <PopUp popup={popup} /> : null;
};
