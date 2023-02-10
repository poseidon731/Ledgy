export const getEntriesHeight = (entries: ResizeObserverEntry[]): number =>
  entries.reduce((res, val) => {
    return val.target.clientHeight + res;
  }, 0);
