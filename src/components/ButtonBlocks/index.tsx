import React from 'react';
import { View} from 'react-native';

import {
  ButtonText, Button, HalfContainer, RowContainer, BoxTitle,
} from './styles';

const Block = ({
  navigation, markedPlace, route, userLocation,
}) => {
  const registerUserPlace = () => {
    if (route.params.elements[0]) {
      navigation.navigate('Register',
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          elements: route.params.elements,
        });
    } else {
      navigation.navigate('Register',
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        });
    }
  };

  const registerMarkedPlace = () => {
    if (route.params.elements[0]) {
      navigation.navigate('Register',
        {
          latitude: markedPlace.latitude,
          longitude: markedPlace.longitude,
          elements: route.params.elements,
        });
    } else {
      navigation.navigate('Register',
        {
          latitude: markedPlace.latitude,
          longitude: markedPlace.longitude,
        });
    }
  };

  const showWeather = (where) => {
    if (where === 1) {
      navigation.navigate('Data', {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      });
    } else if (where === 2) {
      navigation.navigate('Data', {
        latitude: markedPlace.latitude,
        longitude: markedPlace.longitude,
      });
    }
  };

  return (
    <>
      <RowContainer>
        <View style={{ width: '50%' }}>
          <BoxTitle>Marked Place</BoxTitle>
        </View>

        <View style={{ width: '50%' }}>
          <BoxTitle>Your Place</BoxTitle>
        </View>
      </RowContainer>

      <RowContainer>

        <HalfContainer>

          <Button
            onPress={() => { registerMarkedPlace(); }}
          >
            <ButtonText>Favorite</ButtonText>
          </Button>

          <Button
            onPress={() => { showWeather(2); }}
          >
            <ButtonText>weather</ButtonText>
          </Button>

        </HalfContainer>

        <HalfContainer>

          <Button
            onPress={() => { registerUserPlace('user'); }}
          >
            <ButtonText>Favorite</ButtonText>
          </Button>

          <Button
            onPress={() => { showWeather(1); }}
          >
            <ButtonText>weather</ButtonText>
          </Button>

        </HalfContainer>
      </RowContainer>
    </>
  );
};

export default Block;
