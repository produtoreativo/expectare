import React, {useEffect} from 'react';
import {View, Text, StyleProp, ViewStyle, Button, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';

function Settings() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

  const handleFirebaseLogin = () => {
    dispatch({type: 'SIGN_IN'});
  };

  function errao() {
    throw new Error('Sentry');
  }

  return (
    <View style={styles.container}>
      {Reflect.has(user, 'additionalUserInfo') && (
        <View style={styles.profileContainer}>
          <Image
            source={{uri: user.additionalUserInfo.profile.picture}}
            width={50}
            height={50}
            style={styles.profileImage}
          />
          <Text style={styles.greetings}>
            Welcome {user.additionalUserInfo.profile.name}
          </Text>
        </View>
      )}
      <View style={styles.contentContainer}>
        <Text>Settings</Text>

        <Button title="error" onPress={errao} />

        <View style={styles.divider} />
        <Button title="Logout" onPress={handleLogout} />
        <View style={styles.divider} />

        {!Reflect.has(user, 'id') && (
          <Button title="Login with Google" onPress={handleFirebaseLogin} />
        )}
      </View>
    </View>
  );
}

export default Settings;
