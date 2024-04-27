import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@expectare/screens/Home';
import Settings from '@expectare/screens/Settings';
import Workspace from '@expectare/screens/Workspace';
import SetupScreen from '@expectare/screens/Setup';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function tabBarIcon(name: string) {
  return ({color}: {color: string}) => (
    <Icon name={name} size={30} color={color} />
  );
}

function Theme() {
  const isLogged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();
  console.log('isLogged:', isLogged);

  React.useEffect(() => {
    dispatch({type: 'APP_INIT'});
  }, []);

  return (
    <NavigationContainer>
      {!isLogged ? (
        <Stack.Navigator>
          <Stack.Screen name="Setup" component={SetupScreen} />
        </Stack.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  );
}

export default Theme;
