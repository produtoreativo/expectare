import React from 'react';
import {View, Text, StyleProp, ViewStyle, Button} from 'react-native';
import { useDispatch } from 'react-redux';

const style: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Settings() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

  function errao() {
    throw new Error('Sentry');
  }

  return (
    <View style={style}>
      <Text>Settings</Text>
      <Button title="error" onPress={errao} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default Settings;
