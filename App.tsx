import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@expectare/screens/Home';
import Settings from '@expectare/screens/Settings';
import Workspace from '@expectare/screens/Workspace';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="Workspace" 
          component={Workspace} 
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
