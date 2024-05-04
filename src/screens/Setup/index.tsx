import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';

function Setup(): React.JSX.Element {
  const dispatch = useDispatch();
  const {name, email, errorMessage} = useSelector(state => state.signUp);
  const setName = (text: string) => dispatch({type: 'SET_NAME', payload: text});
  const setEmail = (text: string) =>
    dispatch({type: 'SET_EMAIL', payload: text});
  const handleSignUp = () => dispatch({type: 'SIGN_UP'});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

      <Button title="Sign Up" onPress={handleSignUp} style={styles.button} />
    </View>
  );
}

export default Setup;
