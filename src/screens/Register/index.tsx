import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import { Button, Container } from './styles';

const Register = ({ navigation, route: { params: { latitude, longitude, elements } } }) => {
  const [local, setLocal] = useState('');

  let lastKey;
  if (elements) {
    lastKey = elements[0].key;
  } else {
    lastKey = '0';
  }

  const send = () => {
    const newLocal = {
      key: `${parseInt(lastKey, 10) + 1}`,
      title: local,
      latitude,
      longitude,
      change: '1',
    };
    navigation.navigate('Home', { newLocal });
  };

  const verifyName = () => {
    let cont = 0;
    if (elements) {
      elements.forEach((element) => {
        if (element.title === local) {
          cont++;
        }
      });

      if (cont === 0) {
        send();
      } else {
        Alert.alert('invalid name',
          'This name already exist. Please, type an different name and try again',
          [
            { text: 'ok', onPress: () => navigation.navigate('Register') },
          ], { cancelable: true });
      }
    } else {
      send();
    }
  };

  return (
    <Container>

      <TextInput
        label="local name"
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        value={local}
        onChangeText={(text) => { setLocal(text); }}
      />

      <Button
        onPress={() => { verifyName(); }}
      >
        <Text style={{ color: 'white' }}>Register</Text>
      </Button>

    </Container>
  );
};

export default Register;
