import { LeadFormType, ParsedFormValues } from './formTypes';
import { getCookie, reportError, getGoogleAdsClickId } from '../../../helpers';
import { FORM_STATUSES } from './constants';

const SIGNUP_FORM_ID = 'a80fb54c-06a2-45af-914c-07b935c56e82';
const DEMO_FORM_ID = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const HUBSPOT_UTK = 'hubspotutk';
const GOOGLE_CID = '_ga';

const getHubspotUserToken = () => getCookie(HUBSPOT_UTK) || undefined;
const getGoogleAnalyticsClientId = () => getCookie(GOOGLE_CID).slice(6);

type ErrorResponse = {
  errorType: string;
  message: string;
};

type JsonResponse = {
  errors?: ErrorResponse[];
};

type EncodeBodyData = {
  pipelinevalue: number;
  email: string;
  google_analytics_client_id?: string;
  google_ads_click_id?: string;
  numberofemployees?: number;
  numberofinvestments?: number;
  lead_form_source: LeadFormType;
  referred_from?: string;
  source?: string;
};

type NewsLetterBodyData = {
  email: string;
  google_analytics_client_id?: string;
  google_ads_click_id?: string;
  lead_form_source: LeadFormType;
};

const isInvalidEmailError = (errors: ErrorResponse[]): boolean =>
  errors.some((error) => ['INVALID_EMAIL', 'BLOCKED_EMAIL'].includes(error.errorType));

const encodeBody = (data: EncodeBodyData | NewsLetterBodyData) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

export const INVALID_EMAIL = 'invalidEmail';

export const submitToHubspot = async ({
  isCompany,
  email,
  size,
  value,
  lead_form_source,
  partner,
}: ParsedFormValues) => {
  const body = encodeBody({
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    pipelinevalue: value,
    email,
    google_analytics_client_id: getGoogleAnalyticsClientId(),
    google_ads_click_id: getGoogleAdsClickId(),
    lead_form_source,
    ...(partner && partner !== ''
      ? { referred_from: partner.toLowerCase(), source: 'Partnerships' }
      : {}),
  });
  const response = await fetch(`/submit/6881367/${DEMO_FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  if (response.status !== 200) {
    const jsonResponse: JsonResponse = await response.json();
    const errors = jsonResponse.errors || [];
    if (isInvalidEmailError(errors)) {
      throw new Error(FORM_STATUSES.INVALID_EMAIL);
    }

    const error = new Error(response.statusText);
    reportError(error, { body, jsonResponse, errors });
    throw error;
  }

  return response;
};
export const submitToHubspotNewsletter = async ({
  email,
  lead_form_source,
}: {
  email: string;
  lead_form_source: LeadFormType;
}) => {
  const body = encodeBody({
    email,
    google_analytics_client_id: getGoogleAnalyticsClientId(),
    google_ads_click_id: getGoogleAdsClickId(),
    lead_form_source,
  });
  const response = await fetch(`/submit/6881367/${SIGNUP_FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  if (response.status !== 200) {
    const jsonResponse: JsonResponse = await response.json();
    const errors = jsonResponse.errors || [];
    if (isInvalidEmailError(errors)) {
      throw new Error(FORM_STATUSES.INVALID_EMAIL);
    }

    const error = new Error(response.statusText);
    reportError(error, { body, jsonResponse, errors });
    throw error;
  }

  return response;
};
