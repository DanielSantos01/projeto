import { TextInput } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Marker } from 'react-native-maps';
import Block from '../../components/ButtonBlocks';
import { Container, ViewMap } from './styles';

const Search = ({ navigation, route }) => {
  const [city, setCity] = useState('');
  const [userPosition, setUserPosition] = useState({ latitude: 0, longitude: 0 });
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [markedPlace, setMarkedPlace] = useState({ latitude: 0, longitude: 0 });

  const fetchCities = async (text) => {
    setCity(text);
    (
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45`)
        .then((item) => item.json())
        .then((cityData) => { if (cityData.cod == 200) updateMarkerByCityName(cityData); })
    );
  };

  const updateMarkerByCityName = (data) => {
    setMarkedPlace(
      {
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      },
    );
  };

  const verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasLocationPermission(true);
      } else {
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    verifyLocationPermission();
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setUserPosition(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          );
          setMarkedPlace(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          );
        }, (error) => { console.log(error.code, error.message); },

      );
    }
  }, [hasLocationPermission]);

  const gerenciar = (position) => {
    setMarkedPlace(
      {
        latitude: position.coordinate.latitude,
        longitude: position.coordinate.longitude,
      },
    );
  };

  return (
    <Container>

      <TextInput
        label="search by city name"
        theme={{ colors: { primary: 'rgba(0, 120, 255, .65)' } }}
        value={city}
        onChangeText={(text) => fetchCities(text)}
      />

      <ViewMap
        scrollEnabled
        zoomEnabled
        initialRegion={{
          latitude: userPosition.latitude,
          longitude: userPosition.longitude,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
        region={{
          latitude: markedPlace.latitude,
          longitude: markedPlace.longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        showsUserLocation
        loadingEnabled
        onPress={(position) => { gerenciar(position.nativeEvent); }}
      >
        <Marker coordinate={markedPlace} />
      </ViewMap>

      <Block
        navigation={navigation}
        markedPlace={markedPlace}
        route={route}
        userLocation={userPosition}
      />

    </Container>
  );
};

export default Search;
