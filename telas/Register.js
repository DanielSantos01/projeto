import {TextInput, Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Register = ({ navigation, route }) => {
    const [local, setLocal] = useState('');
    let lastKey;
    if(route.params.elements){
        lastKey = route.params.elements[route.params.elements.length - 1].key;
    }else{
        lastKey = '0';
    }

    const send = () => {
        let newLocal = {
            key: `${parseInt(lastKey, 10)+1}`,
            title: local,
            latitude: route.params.latitude,
            longitude: route.params.longitude,
        };
        navigation.navigate('Home', {newLocal});
    }

    return(
        <View style={{flex: 1}}>
            <TextInput 
            label='local name' 
            theme={{ colors:{primary: '#000000'} }} 
            value={local}
            onChangeText={(text) => {setLocal(text)}} />

            <Button 
            icon='content-save'
            mode="contained" 
            onPress={() => {send()}}
            theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
            style={styles.button} >
                <Text style={{color: 'white'}}>Register place</Text>
            </Button>
            
        </View>
    );
}

const styles = StyleSheet.create({
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
