import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Title, Card} from 'react-native-paper';

//componente representativo da tela de visualização dos dados
const Data = ({navigation, route}) => {
    //hook de estado
    const [info, setInfo] = useState({
        name: 'Loading...',
        temp: 'Loading...',
        humidity: 'Loading...',
        desc: 'Loading...',
        icon: 'Loading...',
    });

    //chama apenas uma vez a função responsável por buscar a informação de clima
    useEffect(() => {
        weather();
    }, []);

    //função de busca pela informação de clima
    const weather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${route.params.latitude}&lon=${route.params.longitude}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric`)
        .then(item => item.json())
        .then(results => setInfo({
            name: results.name,
            temp: results.main.temp,
            humidity: results.main.humidity,
            desc: results.weather[0].description,
            icon: results.weather[0].icon,
        }))
    }

    return(
        <View style={styles.display}>
            
            <View style={styles.imagePlace}>
                <Title style={styles.place}>
                    {info.name}
                </Title>

                <Image 
                style={styles.image}
                source={{uri:`http://openweathermap.org/img/w/${info.icon}.png`}} />
            </View>

            <Card style={styles.weatherCard}>
                <Text style={styles.weatherText}>
                <Title style={styles.weatherTitle}>Temperature:</Title> {info.temp}
                </Text>
            </Card>
        
            <Card style={styles.weatherCard}>
                <Text style={styles.weatherText}>
                <Title style={styles.weatherTitle}>Humidity:</Title> {info.humidity}
                </Text>
            </Card>

            <Card style={styles.weatherCard}>
                <Text style={styles.weatherText}>
                    <Title style={styles.weatherTitle}>Description:</Title> {info.desc}
                </Text>
            </Card>
        </View>

    );
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
    },
    imagePlace:{
        alignItems: 'center',
    },
    place: {
        color: 'rgba(0, 120, 255, .65)', 
        marginTop: 30, fontSize: 30,
    },
    image: {
        width: 120, 
        height: 120,
        marginBottom: 30,
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
    }
});

export default Data;
