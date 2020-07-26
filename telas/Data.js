import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Title, Card} from 'react-native-paper';

const Data = ({navigation, route}) => {
    const [info, setInfo] = useState({
        name: 'Loading...',
        temp: 'Loading...',
        humidity: 'Loading...',
        desc: 'Loading...',
        icon: 'Loading...',
    });

    useEffect(() => {
        weather();
    }, []);

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
        <View style={{flex: 1}}>
            
            <View style={{alignItems: 'center'}}>
                <Title style={{color: '#00aaff', marginTop: 30, fontSize: 30}}>
                    {info.name}
                </Title>

                <Image 
                style={{width: 120, height: 120}}
                source={{uri:'http://openweathermap.org/img/w/'+info.icon+'.png'}} />
            </View>

            <Card style={{main: 5, padding: 12}}>
                <Title style={{color: '#00aaff'}}>
                    Temperature = {info.temp}
                </Title>
            </Card>
        
            <Card style={{main: 5, padding: 12}}>
                <Title style={{color: '#00aaff'}}>
                    Humidity = {info.humidity}
                </Title>
            </Card>

            <Card style={{main: 5, padding: 12}}>
                <Title style={{color: '#00aaff'}}>
                    Description = {info.desc}
                </Title>
            </Card>
        </View>

    );
}

export default Data;
