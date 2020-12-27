import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import {
  Button,
  Container,
  TextContainer,
  TextInfo,
} from './styles';

const Edit = ({ navigation, route: { params: { name, loc, elements } } }) => {
  const [newName, setNewName] = useState('');

  const send = () => {
    const newLocal = {
      name: newName,
      loc,
      change: '2',
    };
    navigation.navigate('Home', { newLocal });
  };

  const verifyName = () => {
    let cont = 0;
    if (elements) {
      elements.forEach((element) => {
        if (element.title === newName) {
          cont++;
        }
      });

      if (cont === 0) {
        send();
      } else {
        Alert.alert('invalid name',
          'This name already exist. Please, type an different name and try again',
          [
            { text: 'ok', onPress: () => navigation.navigate('Edit') },
          ], { cancelable: true });
      }
    }
  };

  return (
    <Container>

      <TextInput
        label="new place name"
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        value={newName}
        onChangeText={(text) => { setNewName(text); }}
      />

      <Button
        onPress={() => { verifyName(); }}
      >
        <Text style={{ color: 'white' }}>Change</Text>
      </Button>

      <TextContainer>
        <TextInfo>
          Current Name:
          {name}
        </TextInfo>
      </TextContainer>

    </Container>
  );
};

export default Edit;
