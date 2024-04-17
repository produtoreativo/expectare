import React from 'react';
import {View, Text, StyleProp, ViewStyle, Button} from 'react-native';

const style: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Settings() {
  function errao() {
    throw new Error('Sentry');
  }

  return (
    <View style={style}>
      <Text>Settings</Text>
      <Button title="error" onPress={errao} />
    </View>
  );
}

export default Settings;
