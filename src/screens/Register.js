import { TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';
import {
  View, StyleSheet, Text, Alert,
} from 'react-native';

// componente representativo da tela de registro
const Register = ({ navigation, route: { params: { latitude, longitude, elements } } }) => {
  // hook de estado
  const [local, setLocal] = useState('');

  // variável que representa o valor da última chave da lista
  let lastKey;
  if (elements) {
    lastKey = elements[0].key;
  } else {
    lastKey = '0';
  }

  // função de envio de informação entre telas
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

  // Verifica se o nome digitado pelo usuário já consta na lista
  const verifyName = () => {
    let cont = 0;
    if (elements) {
      elements.forEach((element, index, array) => {
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
    <View style={styles.display}>

      {/* Caixa de entrada de texto */}
      <TextInput
        label="local name"
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        value={local}
        onChangeText={(text) => { setLocal(text); }}
      />

      {/* botçao para saolvar o local */}
      <Button
        icon="content-save"
        mode="contained"
        onPress={() => { verifyName(); }}
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        style={styles.button}
      >
        <Text style={{ color: 'white' }}>Register</Text>
      </Button>

    </View>
  );
};

// folhas de estilo
const styles = StyleSheet.create({
  display: {
    flex: 1,
  },

  button: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 20,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Register;
