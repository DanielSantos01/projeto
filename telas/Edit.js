import {TextInput, Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

//componente representativo da tela de registro
const Edit = ({ navigation, route }) => {
    //hook de estado
    const [local, setLocal] = useState('');

    //variável que representa o valor da última chave da lista
    let lastKey;
    if(route.params.elements){
        lastKey = route.params.elements[route.params.elements.length - 1].key;
    }else{
        lastKey = '0';
    }

    //função de envio de informação entre telas
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

            {/* Caixa de entrada de texto */}
            <TextInput 
            label='local name' 
            theme={{ colors:{primary: '#000000'} }} 
            value={local}
            onChangeText={(text) => {setLocal(text)}} />

            {/* botçao para saolvar o local*/}
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

//folhas de estilo
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

export default Edit;
