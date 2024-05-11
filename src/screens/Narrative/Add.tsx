import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './style';

function Add() {
  const {t} = useTranslation();
  const button = t('screen.add.narrative.button');
  const name = t('screen.add.narrative.name');
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={name} />
      <Button title={button} style={styles.button} />
    </View>
  );
}

export default Add;
