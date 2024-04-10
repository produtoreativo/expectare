import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

const style: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Settings() {
  return (
    <View style={style}>
      <Text>Settings</Text>
    </View>
  );
}

export default Settings;
