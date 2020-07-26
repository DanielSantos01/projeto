//importações necessárias
import {Button} from 'react-native-paper';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Block = ({navigation, markedPlace, route, userLocation}) => {

    //função de registro do lugar onde o usuário se encontra
    const registerUserPlace = () => {
        if(route.params.elements[0]){
            navigation.navigate('Register', 
                {
                    latitude: userLocation.latitude, 
                    longitude: userLocation.longitude,
                    elements: route.params.elements,
                }
            );
        }else{
            navigation.navigate('Register', 
                {
                    latitude: userLocation.latitude, 
                    longitude: userLocation.longitude,
                }
            );
        }
    }

    //função de registro do lugar onde o usuário marcou no mapa
    const registerMarkedPlace = () => {
        if(route.params.elements[0]){
            navigation.navigate('Register', 
                {
                    latitude: markedPlace.latitude, 
                    longitude: markedPlace.longitude,
                    elements: route.params.elements,
                }
            );
        }else{
            navigation.navigate('Register', 
                {
                    latitude: markedPlace.latitude, 
                    longitude: markedPlace.longitude,
                }
            );
        }
    }

    const showWeather = (where) => {
        if(where === 'user location'){
            navigation.navigate('Data', {
                latitude: userLocation.latitude,
                longitude: userLocation. longitude,
            });
        }else if(where === 'marked location'){
            navigation.navigate('Data', {
                latitude: markedPlace.latitude,
                longitude: markedPlace.longitude,
            });
        }
    }

    return(
        <View>
            {/*Títulos dos blocos*/}
            <View style={{flexDirection: 'row'}}>
                <View style={{width: '50%'}}>
                <Text style={styles.boxTitle}>Marked Place</Text>
                </View>

                <View style={{width: '50%'}}>
                <Text style={styles.boxTitle}>Your Location</Text>
                </View>
            </View>

            {/*Blocos de botões*/}
            <View style={{flexDirection: 'row'}}>

                {/*Botões para o lugar marcado no mapa*/}
                <View style={{width: '45%', 
                backgroundColor: 'rgba(0, 0, 0, .1)',
                borderRadius: 5,
                marginLeft: 5,}}>

                    <Button 
                    icon='star-outline'
                    mode="contained"
                    theme={{ colors:{primary: 'rgba(0, 120, 255, .75)'} }}
                    onPress={() => {registerMarkedPlace()}}
                    style={styles.button} >
                        <Text style={styles.text}>Favourite</Text>
                    </Button>

                    <Button 
                    icon='cloud-outline'
                    mode="contained"
                    theme={{ colors:{primary: 'rgba(0, 120, 255, .75)'} }}
                    onPress={() => {showWeather('marked location')}}
                    style={styles.button} >
                        <Text style={styles.text}>weather</Text>
                    </Button>

                </View>{/*Fim da view do lugar marcado no mapa*/}

                {/*Botões para a posição do usuário*/}
                <View style={{width: '45%', 
                backgroundColor: 'rgba(0, 0, 0, .1)',
                borderRadius: 5,
                marginLeft: 20,}}>

                    <Button 
                    icon='star-outline'
                    mode="contained"
                    theme={{ colors:{primary: 'rgba(0, 120, 255, .75)'} }}
                    onPress={() => {registerUserPlace('user')}}
                    style={styles.button} >
                        <Text style={styles.text}>Favourite</Text>
                    </Button>

                    <Button 
                    icon='cloud-outline'
                    mode="contained"
                    theme={{ colors:{primary: 'rgba(0, 120, 255, .75)'} }}
                    onPress={() => {showWeather('user location')}}
                    style={styles.button} >
                        <Text style={styles.text}>weather</Text>
                    </Button>

                </View>{/*fim da view do local do usuário*/}
            </View>{/*Fim da view agrupadora dos blocos*/}
        </View>//fim da view principal
    );
};

//folha de estilo
const styles = StyleSheet.create({
    button: {
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 20,
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    text: {
      color: 'white',
    },
    boxTitle: {
      textAlign: 'center',
      color: 'rgba(0, 120, 255, .75)',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 15,
      marginBottom: 5,
    },
});

export default Block;
