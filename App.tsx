import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@expectare/screens/Home';
import Settings from '@expectare/screens/Settings';
import Workspace from '@expectare/screens/Workspace';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://31a9f08aca14a8608318a87ef2a3ffa7@o4507098805567488.ingest.us.sentry.io/4507098808254464',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  _experiments: {
    // profilesSampleRate is relative to tracesSampleRate.
    // Here, we'll capture profiles for 100% of transactions.
    profilesSampleRate: 1.0,
  },
});

const Tab = createBottomTabNavigator();

function tabBarIcon(name: string) {
  return ({color}: {color: string}) => (
    <Icon name={name} size={30} color={color} />
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFC107',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: tabBarIcon('house'),
          }}
        />
        <Tab.Screen
          name="Workspace"
          component={Workspace}
          options={{
            tabBarIcon: tabBarIcon('briefcase'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: tabBarIcon('gear'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Sentry.wrap(App);
