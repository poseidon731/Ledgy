import {
  meetingRequestUrlDACH,
  meetingRequestUrlNordics,
  meetingRequestUrlRestOfEurope,
  meetingRequestUrlRestOfWorld,
  meetingRequestUrlUKIE,
} from './constants';

export const getUrlFromCountryCode = (countryCode: string) => {
  switch (countryCode) {
    case 'CH':
    case 'DE':
    case 'AT':
      return meetingRequestUrlDACH;
    case 'GB':
    case 'IE':
      return meetingRequestUrlUKIE;
    case 'NO':
    case 'SE':
    case 'FI':
    case 'EE':
    case 'DK':
      return meetingRequestUrlNordics;
    case 'BE':
    case 'BG':
    case 'HR':
    case 'CY':
    case 'CZ':
    case 'FR':
    case 'GR':
    case 'HU':
    case 'IT':
    case 'LV':
    case 'LT':
    case 'LU':
    case 'MT':
    case 'NL':
    case 'PL':
    case 'PT':
    case 'RO':
    case 'SK':
    case 'SI':
    case 'ES':
      return meetingRequestUrlRestOfEurope;
    default:
      return meetingRequestUrlRestOfWorld;
  }
};
