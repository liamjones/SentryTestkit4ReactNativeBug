import * as Sentry from '@sentry/react-native';
import sentryTestkit from 'sentry-testkit';

it('should init sentry', () => {
  const {sentryTransport} = sentryTestkit();

  Sentry.init({
    dsn: 'https://dummy_dsn_with_valid_format@example.org/123',
    enableNative: false,
    tracesSampleRate: 1,
    transport: sentryTransport,
  });
});
