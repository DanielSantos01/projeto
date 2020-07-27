//importações necessárias
import {TextInput} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import Block from './ButtonBlocks';

//componente: Tela de pesquisa
const Search = ({navigation, route}) => {
  //State Hooks
  const [city, setCity] = useState('');
  const [userPosition, setUserPosition] = useState({latitude: 0, longitude: 0});
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [markedPlace, setMarkedPlace] = useState({latitude: 0, longitude: 0});

  //função de procura pelas informações de temperatura de acordo com o texto digitado
  const fetchCities = async (text) => {
    setCity(text);
    (
      await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + text + '&appid=d812ba41f36e1b6fdb2e8a4b8224ec45')
      .then(item => item.json())
      .then(cityData => { if(cityData.cod == 200) updateMarkerByCityName(cityData) })
    )
  }

  //função que atualiza a posição do marcador de acordo com o nome do textInput
  const updateMarkerByCityName = (data) => {
    setMarkedPlace(
      {
        latitude: data.coord.lat,
        longitude: data.coord.lon,
      }
    );
  }

  //funçã responsável por verificar a permissão do usuário
  const verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasLocationPermission(true);

      }else {
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  //analisa as mudanças nas propriedades recebidas
  useEffect(() => {
    verifyLocationPermission();
    if(hasLocationPermission){
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }
          );
          setMarkedPlace(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }
          );

        }, error => {console.log(error.code, error.message)}

      );
    }
  }, [hasLocationPermission]);

  //função que atualiza a posição do marcador
  const gerenciar = (position, route) => {
    setMarkedPlace(
      {
        latitude: position.coordinate.latitude, 
        longitude: position.coordinate.longitude,
      }
    );
  }

  return (
    <View style={styles.display}>

      {/* Caixa de entrada de texto */}
      <TextInput 
      label='search by city name' 
      theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }} 
      value={city}
      onChangeText={(text) => fetchCities(text)} />

      {/* Mapa */}
      <MapView
      scrollEnabled={true}
      zoomEnabled={true}
      style={styles.map}
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
      onPress={(position) => {gerenciar(position.nativeEvent)}} >
        <Marker coordinate={markedPlace} />
      </MapView>{/*Fim do mapa*/}

      <Block
      navigation={navigation}
      markedPlace={markedPlace}
      route={route}
      userLocation={userPosition} />

    </View>//fim da View principal
  );
};

//folha de estilo
const styles = StyleSheet.create({
  display: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '50%',
  },
});

export default Search;
