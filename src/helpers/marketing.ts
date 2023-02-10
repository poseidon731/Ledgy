import { ledgyDomain } from './constants';
import { loadSegment, loadCapterra, loadG2, loadBing } from './snippets';

const getDestinations = (destinations: string[]): Record<string, boolean> =>
  destinations.reduce((res, v) => ({ ...res, [v]: true }), { All: false });

export const GOOGLE_ADS_CLICK_ID = 'gclid';
const HAS_ACCOUNT_COOKIE_ID = 'hasAccount';
const cookieLifetime = 60 * 60 * 24 * 365;

export const getCookie = (name: string) => {
  if (typeof document !== 'object') return '';

  const snippet = `${name}=`;
  return (document.cookie.split('; ').find((v) => v.startsWith(snippet)) || '').slice(
    snippet.length
  );
};

const getUrlParam = (name: string) =>
  typeof location === 'object'
    ? (
        location.search
          .slice(1)
          .split('&')
          .find((v) => v.startsWith(name)) || ''
      ).slice(name.length + 1)
    : '';

export const setDomainCookie = (name: string, value: string) => {
  const cookie = `${name}=${value}; domain=${ledgyDomain}; path=/; max-age=${cookieLifetime}`;
  document.cookie = cookie;
};

export const saveGoogleAdsClickId = () => {
  const clickId = getUrlParam(GOOGLE_ADS_CLICK_ID);
  if (clickId) setDomainCookie(GOOGLE_ADS_CLICK_ID, clickId);
};

export const getGoogleAdsClickId = () => getCookie(GOOGLE_ADS_CLICK_ID);

export const hasAcceptedCookies = () =>
  !!(getCookie('ajs_anonymous_id') || getCookie('ajs_user_id'));
export const hasLedgyAccount = () => !!getCookie(HAS_ACCOUNT_COOKIE_ID);

export const loadMarketingTools = (segmentDestinations: string[]) => {
  loadSegment(getDestinations(segmentDestinations));
  loadG2();
  loadCapterra();
  loadBing();
};
