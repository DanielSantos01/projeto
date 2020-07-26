//importações necessárias
import {TextInput, Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps'

//componente: Tela de pesquisa
const Search = ({navigation, route}) => {
  //State Hooks
  const [city, setCity] = useState('');
  const [userPosition, setUserPosition] = useState({latitude: 0, longitude: 0});
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [visibility, setVisibility] = useState({latitude: 0, longitude: 0});

  //função de procura pelas informações de temperatura
  const fetchCities = (text) => {
    setCity(text);
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + text + '&appid=d812ba41f36e1b6fdb2e8a4b8224ec45')
    .then(item => item.json())
    .then(cityData => {
      if(cityData.cod == 200){
        updateMarkerByCityName(cityData);
      }
    })
  }

  const updateMarkerByCityName = (data) => {
    setVisibility({
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    });
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
              setVisibility(
                {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                }
              );
            },
            error => {
              console.log(error.code, error.message);
            }
        );

    }
  }, [hasLocationPermission]);

  //função que atualiza a posição do marcador
  const gerenciar = (position, route) => {
    setVisibility(
      {
        latitude: position.coordinate.latitude, 
        longitude: position.coordinate.longitude,
      }
    );
  }

  const send = () => {
  
    if(route.params.elements[0]){
      navigation.navigate('Register', 
        {
          latitude: visibility.latitude, 
          longitude: visibility.longitude,
          elements: route.params.elements,
        }
      )
    }else{
      navigation.navigate('Register', 
        {
          latitude: visibility.latitude, 
          longitude: visibility.longitude,
        }
      )
    }
  }

  return (
    <View style={styles.display}>
        
        <TextInput 
        label='search by city name' 
        theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }} 
        value={city}
        onChangeText={(text) => fetchCities(text)} />

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
          latitude: visibility.latitude,
          longitude: visibility.longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        showsUserLocation
        loadingEnabled
        onPress={(position) => {gerenciar(position.nativeEvent)}} >
          <Marker coordinate={visibility}/>
        </MapView>

        <Button 
        mode="contained"
        theme={{ colors:{primary: '#00aaff'} }}
        onPress={() => {send()}}
        style={styles.button} >

          <Text style={styles.text}>Favourite</Text>

        </Button>

    </View>
  );
};

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

  text: {
    color: 'white',
  },

  map: {
    width: '100%',
    height: '50%',
    marginTop: 2,
  },

});

export default Search;
