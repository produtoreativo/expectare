import * as React from 'react';
import * as Sentry from '@sentry/react-native';
import {SENTRY_DSN} from '@env';
import {Provider} from 'react-redux';
import CreateStore from '@expectare/redux/CreateStore';
import Theme from '@expectare/components/Theme';

console.log('Sentry DSN:', SENTRY_DSN);

Sentry.init({
  dsn: SENTRY_DSN,
  // dsn: 'https://31a9f08aca14a8608318a87ef2a3ffa7@o4507098805567488.ingest.us.sentry.io/4507098808254464',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  _experiments: {
    // profilesSampleRate is relative to tracesSampleRate.
    // Here, we'll capture profiles for 100% of transactions.
    profilesSampleRate: 1.0,
  },
});

function App(): React.JSX.Element {
  const store = CreateStore();
  console.log('store[2]:', store);
  return (
    <Provider store={store}>
      <Theme />
    </Provider>
  );
}

export default Sentry.wrap(App);
