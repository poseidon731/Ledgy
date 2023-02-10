export const isExternalUrl = (url: string): boolean =>
  url.startsWith('http') || url.startsWith('www') || url.startsWith('mailto');

const stripDoubleSlashes = (url: string): string => url.replace(/\/\//g, '/');
export const formatUrl = (prefix: string, url: string): string =>
  isExternalUrl(url) ? url : stripDoubleSlashes(`${prefix}/${url}/`);
