import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Image, Text,
} from 'react-native';
import { Title, Card } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

// componente representativo da tela de visualização dos dados
const Data = ({ navigation, route: { params: { latitude, longitude } } }) => {
  // hook de estado
  const [info, setInfo] = useState({
    name: 'Loading...',
    temp: 'Loading...',
    humidity: 'Loading...',
    desc: 'Loading...',
    icon: 'Loading...',
  });

  // chama apenas uma vez a função responsável por buscar a informação de clima
  useEffect(() => {
    weather();
  }, []);

  // função de busca pela informação de clima
  const weather = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric`)
      .then((item) => item.json())
      .then((results) => setInfo({
        name: results.name,
        temp: results.main.temp,
        humidity: results.main.humidity,
        desc: results.weather[0].description,
        icon: results.weather[0].icon,
      }))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.display}>

      {/* Nome do lugar e imagem representativa do tempo */}
      <View style={styles.imagePlace}>
        <Title style={styles.place}>
          {info.name}
        </Title>

        <Image
          style={styles.image}
          source={{ uri: `https://openweathermap.org/img/w/${info.icon}.png` }}
        />
      </View>

      {/* Card com a informação da temperatura */}
      <Card style={styles.weatherCard}>
        <Text style={styles.weatherText}>
          <Title style={styles.weatherTitle}>Temperature:</Title>
          {' '}
          {info.temp}
          {' '}
          ºC
        </Text>
      </Card>

      {/* Card com a informação da humidade */}
      <Card style={styles.weatherCard}>
        <Text style={styles.weatherText}>
          <Title style={styles.weatherTitle}>Humidity:</Title>
          {' '}
          {info.humidity}
          {' '}
          g/Kg
        </Text>
      </Card>

      {/* Card com a descrição do clima */}
      <Card style={styles.weatherCard}>
        <Text style={styles.weatherText}>
          <Title style={styles.weatherTitle}>Description:</Title>
          {' '}
          {info.desc}
        </Text>
      </Card>

      {/* Card com a informação da temperatura */}
      <View style={styles.mapInfoContainer}>
        <Text style={styles.mapInfo}>You are looking at here</Text>
      </View>

      {/* Mapa estático mostrando a região a qual o clima que o usuário está vendo corresponde */}
      <MapView
        scrollEnabled={false}
        zoomEnabled={false}
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.6,
          longitudeDelta: 0.6,
        }}
        loadingEnabled
      >
        <Marker coordinate={{
          latitude,
          longitude,
        }}
        />
      </MapView>
    </View>

  );
};

// folha de estilo
const styles = StyleSheet.create({
  display: {
    flex: 1,
  },
  imagePlace: {
    alignItems: 'center',
  },
  place: {
    color: 'rgba(0, 120, 255, .65)',
    marginTop: 30,
    fontSize: 30,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: '3%',
  },
  weatherCard: {
    padding: 12,
  },
  weatherTitle: {
    fontWeight: 'bold',
    color: 'rgba(0, 120, 255, .65)',
  },
  weatherText: {
    color: 'rgba(0, 120, 255, .65)',
    fontSize: 20,
  },
  map: {
    width: '100%',
    height: '30%',
  },
  mapInfo: {
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 17,
    color: 'white',
  },
  mapInfoContainer: {
    marginTop: '4%',
    backgroundColor: 'rgba(0, 120, 255, .5)',
  },
});

export default Data;
