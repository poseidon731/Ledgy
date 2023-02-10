import {
  isFieldMissing,
  isValidEmail,
  track,
  setDomainCookie,
  identifyOrAlias,
} from '../../../helpers';

import { FormValues, ParsedFormValues } from './formTypes';
import { submitToHubspot } from './hubspot';
import {
  investorUrl,
  COMPANY,
  EMPLOYEE_VALUE,
  INVESTMENT_VALUE,
  DEER_COMPANY_THRESHOLD,
  FUND_INVESTMENT_THRESHOLD,
  smallCompanyUrl,
  FORM_STATUSES,
  DEMO_REQUEST,
} from './constants';
import { getUrlFromCountryCode } from './getUrlFromCountryCode';

const { INVALID_EMAIL, INVALID_FIELDS, INVALID_SIZE, LOADING, SUBMITTED, FETCH_ERROR } =
  FORM_STATUSES;

const LEAD_STATUS = 'leadStatus';
const IDENTIFIED = 'identified';

const isDeerCompany = (size: number) => size >= DEER_COMPANY_THRESHOLD;
const isFund = (size: number) => size >= FUND_INVESTMENT_THRESHOLD;

const getEmployeeValue = (size: number) => {
  if (isDeerCompany(size)) return size * EMPLOYEE_VALUE;
  return 0;
};
const getInvestmentValue = (size: number) => {
  if (isFund(size)) return size * INVESTMENT_VALUE;
  return 0;
};

const getPipelineValue = (size: number, isCompany: boolean) =>
  isCompany ? getEmployeeValue(size) : getInvestmentValue(size);

const getLocation = async <T extends { country: string }>(): Promise<T> => {
  const ipData: T = await (await fetch('https://ipapi.co/json/')).json();
  return ipData;
};

const getRegionalMarketingUrl = async () => {
  let countryCode = 'CH';
  try {
    const { country } = await getLocation();
    if (country) {
      countryCode = country;
    }
  } catch (e) {
    // ignore
  }

  return getUrlFromCountryCode(countryCode);
};

const getUrl = async ({ isCompany, size, email }: ParsedFormValues) => {
  const meetingRequestUrlWithEmail = `${await getRegionalMarketingUrl()}?email=${email}`;

  const alwaysBook = window.location.hash.includes('#book');
  if (alwaysBook) return meetingRequestUrlWithEmail;

  if (!isCompany) {
    return isFund(size) ? meetingRequestUrlWithEmail : investorUrl;
  }
  return isDeerCompany(size) ? meetingRequestUrlWithEmail : smallCompanyUrl;
};

const redirect = async (values: ParsedFormValues) => {
  if (window) {
    (window as DisableTypeScript).location = await getUrl(values);
  }
};

export const handleDemoSubmit = async ({
  values,
  event,
  pathname,
  setFormStatus,
}: {
  values: FormValues;
  event: React.FormEvent<HTMLFormElement>;
  pathname: string;
  setFormStatus: (arg0: string) => void;
}): Promise<void> => {
  event.preventDefault();
  setFormStatus(LOADING);
  const { requesterType, email, size: sizeString, partner } = values;
  const size = Number(sizeString);
  if (isFieldMissing({ requesterType, sizeString })) {
    setFormStatus(INVALID_FIELDS);
    return;
  }

  if (!isValidEmail(email)) {
    setFormStatus(INVALID_EMAIL);
    return;
  }

  if (size < 1) {
    setFormStatus(INVALID_SIZE);
    return;
  }
  const isCompany = requesterType === COMPANY;

  const value = getPipelineValue(size, isCompany);
  const parsedFormValues = {
    isCompany,
    email,
    size,
    value,
    lead_form_source: DEMO_REQUEST,
    partner,
  };

  try {
    await submitToHubspot(parsedFormValues);
  } catch (error) {
    if (error.message === INVALID_EMAIL) {
      setFormStatus(INVALID_EMAIL);
    } else {
      setTimeout(() => {
        setFormStatus(FETCH_ERROR);
      }, 1000);
    }
    return;
  }

  const eventName = `getDemo.submit.${requesterType}`;
  if (isDeerCompany(size)) {
    track('TagManagerBigCompany');
  } else {
    track('TagManagerSmallCompany');
  }
  identifyOrAlias(email);

  track(eventName, { value, pathname, size, email });
  track('captureLead');

  await redirect(parsedFormValues);
  setFormStatus(SUBMITTED);
  setDomainCookie(LEAD_STATUS, IDENTIFIED);
};
