const appUrl = 'https://app.ledgy.com';
const esopTemplates = '/employee-participation-plan-templates/';
const pricing = '/company-pricing/';
const stateOfEquity = 'https://stateofequity.ledgy.com';
const signup = appUrl + '/signup';

// eslint-disable-next-line no-undef
exports.redirects = [
  ['/esop', esopTemplates],
  ['/psop', esopTemplates],
  ['/vsop', esopTemplates],
  ['/equity-plans', esopTemplates],
  ['/jobs', '/careers'],
  ['/pricing', pricing],
  ['/features', '/'],
  ['/g2', '/?utm_source=g2'],
  ['/finance-legal-accounting', '/finance-accounting'],

  //external links
  ['/signup', signup],
  ['/sign-up', signup],
  ['/register', signup],
  ['/login', appUrl],
  ['/signin', appUrl],
  ['/sign-in', appUrl],

  ['/stateofequity', stateOfEquity],
  ['/state-of-equity', stateOfEquity],
];
