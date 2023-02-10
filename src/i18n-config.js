/* eslint-disable no-undef */
const compose = require('lodash/fp/compose');
const pick = require('lodash/fp/pick');
const flatten = require('lodash/fp/flatten');
const values = require('lodash/fp/values');
const compact = require('lodash/fp/compact');

const defaultLanguage = 'en';
const languages = [defaultLanguage, 'de', 'fr'];

const langPrefix = (lang) => (lang === defaultLanguage ? '' : `/${lang}`);
const deprefix = (pathname) =>
  pathname[0] === '/' && pathname[3] === '/' ? pathname.substr(3) : pathname;
const langFromPath = (pathname) => {
  const lang = pathname.split('/')[1];
  return languages.includes(lang) ? lang : defaultLanguage;
};

const browserLanguagePropertyKeys = [
  'languages',
  'language',
  'browserLanguage',
  'userLanguage',
  'systemLanguage',
];
const getLocale = () =>
  compose(
    compact,
    flatten,
    values,
    pick(browserLanguagePropertyKeys)
  )(window.navigator)
    .map((s) => s.substr(0, 2))
    .find((s) => languages.includes(s)) || defaultLanguage;

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.langPrefix = langPrefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
exports.getLocale = getLocale;
