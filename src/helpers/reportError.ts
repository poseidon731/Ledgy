export const reportError = (error: Error, extras?: Record<string, unknown>) => {
  const { Sentry } = window;
  if (!Sentry) {
    console.log(extras, error);
    return;
  }

  Sentry.withScope((scope: UntypedObject) => {
    if (extras) scope.setExtras(extras);
    Sentry.captureException(error);
  });
};
