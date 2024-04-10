import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

const style: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Home() {
  return (
    <View style={style}>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
