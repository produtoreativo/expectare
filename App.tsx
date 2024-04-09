import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@expectare/screens/Home';
import Settings from '@expectare/screens/Settings';
import Workspace from '@expectare/screens/Workspace';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFC107'
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => ( // Use tabBarIcon prop for icon
              <Icon name="house" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Workspace" 
          component={Workspace} 
          options={{
            tabBarIcon: ({ color }) => ( // Use tabBarIcon prop for icon
              <Icon name="briefcase" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({ color }) => ( // Use tabBarIcon prop for icon
              <Icon name="gear" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
