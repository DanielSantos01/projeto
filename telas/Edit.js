import {TextInput, Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

//componente representativo da tela de registro
const Edit = ({ navigation, route }) => {
    //hook de estado
    const [newName, setNewName] = useState('');

    //função de envio de informação entre telas
    const send = () => {
        
        let newLocal = {
            name: newName,
            loc: route.params.loc,
            change: '2',
        };
        
        navigation.navigate('Home', {newLocal});
        //console.log(newPlaceName);

    }

    return(
        <View style={styles.display}>

            {/* Caixa de entrada de texto */}
            <TextInput 
            label='new place name' 
            theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
            value={newName}
            onChangeText={(text) => {setNewName(text)}} />

            {/* botçao para saolvar o local*/}
            <Button 
            icon='content-save'
            mode="contained" 
            onPress={() => {send()}}
            theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
            style={styles.button} >
                <Text style={{color: 'white'}}>Change</Text>
            </Button>


            <View style={styles.textContainer}>
                <Text style={styles.text}>Current Name: {route.params.name}</Text>
            </View>
            
        </View>
    );
}

//folhas de estilo
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
        marginTop: '10%',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'rgba(0, 120, 255, .65)',
        fontWeight: 'bold',
        marginTop: '10%',
    },

    textContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default Edit;
