import {TextInput, Button} from 'react-native-paper';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';

//componente representativo da tela de registro
const Edit = ({ navigation, route:{ params: { name, loc, elements } } }) => {
    //hook de estado
    const [newName, setNewName] = useState('');

    //função de envio de informação entre telas
    const send = () => {
        let newLocal = {
            name: newName,
            loc: loc,
            change: '2',
        };
        navigation.navigate('Home', {newLocal});
    }

    const verifyName = () => {
        let cont = 0;
        if(elements){
            elements.forEach((element, index, array) => {
                if(element.title == newName){
                    cont++;
                }
            });

            if(cont === 0){
                send();
            }else{
                Alert.alert('invalid name', 
                'This name already exist. Please, type an different name and try again',
                [
                    {text: 'ok', onPress: () => navigation.navigate('Edit')}
                ], {cancelable: true});
            }
        }
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
            onPress={() => {verifyName()}}
            theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
            style={styles.button} >
                <Text style={{color: 'white'}}>Change</Text>
            </Button>

            {/*Texto mostrando o atual nome do lugar*/}
            <View style={styles.textContainer}>
                <Text style={styles.text}>Current Name: {name}</Text>
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
        color: 'white',
        fontWeight: 'bold',
        marginTop: '10%',
        marginBottom: 'auto',
        marginTop: 'auto',
    },

    textContainer: {
        marginTop: 40,
        marginBottom: 10,
        height: 50,
        backgroundColor: 'rgba(255, 0, 0, .7)',
    },
});

export default Edit;
