export const track = (event: string, properties?: UnknownObject): void => {
  if (window.analytics) window.analytics.track(event, properties);
};
export const identify = (id: string, properties?: UnknownObject): void => {
  if (window.analytics) window.analytics.identify(id, properties);
};
const alias = (currentId: string, previousID: string): void => {
  if (window.analytics) window.analytics.alias(currentId, previousID);
};
const getCurrentSegmentId = (): string | undefined => {
  if (window.analytics) return window.analytics.user().id();
};
export const identifyOrAlias = (id: string, properties?: UnknownObject) => {
  const oldSegmentId = getCurrentSegmentId();
  if (oldSegmentId) {
    alias(id, oldSegmentId);
  } else {
    identify(id, properties);
  }
};
type ClickOptions = { text: string; url: string };

export const trackClick = (value: string, options?: ClickOptions) => {
  track(`click.${value}`, options);
};

export const isFieldMissing = (object: UnknownObject) =>
  Object.values(object).some((field) => !field);

export const shuffleArray = <T>(array: T[]): T[] =>
  array.reduce((res, val, index) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const copy = [...res];
    copy[index] = copy[randomIndex];
    copy[randomIndex] = val;
    return copy;
  }, array);

export const loadScript = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    return (document.body && document.body.appendChild(script)) || reject();
  });
