import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

const style: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
function Workspace() {
  return (
    <View style={style}>
      <Text>Workspace</Text>
    </View>
  );
}

export default Workspace;
