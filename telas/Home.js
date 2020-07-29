import {Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';

//componente representativo da tela inicial
const Home = ({ navigation, route:{ params } }) => {
    //hooks de estado
    const [verified, setVerified] = useState(false);
    const [refresh, refreshing] = useState(false);
    const [items, setItems] = useState([]);
    let init;

    //verifica se o estado de refresh mudou (virando verdadeiro), se sim, o torna falso novamente
    useEffect(() => {
        refreshing(false);
    }, [refresh]);

    //verifica mudanças na variável route
    useEffect(() => {
        checkSetItems();
    }, [params]);

    //chama a verificação dos dados salvos na memória
    useEffect(() => {
        verify();
        setVerified(true);
    }, []);

    //verifica se existem informações na memória e define um valor inicial de acordo com o que for recebido
    const verify = async () => {
        try{
            init = await AsyncStorage.getItem('@data');
            if(init != null){
                init = JSON.parse(init);
                setItems(init);
                refreshing(true);
            }else{
                init = [];
            }
        }catch(e){
            alert(e);
        }
    }

    //função que verifica se deve ou não atualizar o estado do componente
    const checkSetItems = () => {
        if(params !== undefined && items[0] !== undefined){

            //caso os itens sejam diferentes e a chave seja de criação (1), adiciona um novo item
            if((params.newLocal != items[items.length - 1]) && params.newLocal.change === '1'){
                let data = items;
                data.unshift(params.newLocal);
                setItems(data);
                saveData(data);
            
            //caso a chave seja de edição (2), muda o nome do lugar
            }else if(params.newLocal.change === '2'){
                let data = items;
                data[params.newLocal.loc].title = params.newLocal.name;
                setItems(data);
                saveData(data);
                refreshing(true);
            }
        
        //executado apenas no primeiro elemento, onde item[0] é undefined
        }else if(params !== undefined){
            let data = [params.newLocal];
            setItems(data);
            saveData(data);
        }
    }

    //função responsável por salvar os dados do app após modificações de estado
    const saveData = async (data) => {
        try{
            await AsyncStorage.setItem('@data', JSON.stringify(data));
        }catch(e){
            alert(e);
        }
    }

    //função responsável por retirar um elemento da lista
    const cutOut = (item) => {
        let data = items;
        if(data.length === 1){
            data = [];
        }else{
            data.splice(data.indexOf(item), 1);
        }
        setItems(data);
        saveData(data);
        refreshing(true);
    }

    //Pergunta ao usuário se ele deseja mesmo excluir o item
    const areYouSure = (item) => {
        Alert.alert('Are You Sure?', 
        'This action will exclude the place.',
        [
            {text: "yes, i'm sure", onPress: () => cutOut(item)},
            {text: "ops, my mistake", onPress: () => navigation.navigate('Home')}
        ], {cancelable: true});
    }

    //função que dita como os itens da lista devem ser renderizados
    const renderItem = ({ item }) => {
        return(
            <View style={styles.itemBox}>

                {/*botão com o nome escolhido pelo usuário*/}
                <View style={{width: '50%'}}>
                    <Button 
                    icon='cloud-outline'
                    mode="contained" 
                    onPress={() => {navigation.navigate('Data', {
                        latitude: item.latitude, 
                        longitude: item.longitude})
                    }}
                    theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
                    style={styles.weather} >
                        <Text style={styles.item}>{item.title}</Text>
                    </Button>
                    
                </View>
                
                {/*botão para editar o nome*/}
                <Button 
                icon='border-color'
                mode="contained" 
                onPress={() => {navigation.navigate('Edit', {
                    loc: items.indexOf(item),
                    name: item.title,
                    elements: items,
                    })
                }}
                theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
                style={styles.complements} />

                {/*botão para excluir o elemento*/}
                <Button 
                icon='close-circle'
                mode="contained" 
                onPress={() => {areYouSure(item)}}
                theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
                style={styles.complements} />
            </View>//Fim da view principal   
        );
    }

    //componente mostrado quando a lista está vazia
    const empty = () => {
        return(
            <View>
                <Text style={styles.empty}>your favorite places will appear here</Text>
            </View>
        );
    }

    return(
        <View>
            {/* título da página */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Weather</Text>
                <Text style={styles.subtitle}>each season your way</Text>
            </View>

            <View>
                <Text style={styles.listTitle}>Your list of places</Text>
            </View>
            
            {/*Lista de lugares favoritados*/}
            <View style={{height: 200}}>
                <FlatList 
                refreshing={refresh}
                onRefresh={() => {}}
                ListEmptyComponent={empty}
                data={items}
                renderItem={renderItem}
                style={styles.list}
                keyExtractor={item => item.key} />
            </View>
        
            {/*Botão de pesquisa por um novo local*/}
            <Button 
            icon='magnify'
            mode="contained" 
            onPress={() => {navigation.navigate('Search', {elements: items})}}
            theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
            style={styles.button} >
                <Text style={{color: 'white'}}>Search</Text>
            </Button>

            {/*Rodapé*/}
            <View style={styles.footer}>
                <Text style={styles.footerText}>by TrackingTrade{'\n'}2020</Text>
            </View>
        </View>//Fim da view principal
    );
}

//folhas de estilo
const styles = StyleSheet.create({
    title: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 30,
        color: 'rgba(0, 120, 255, .75)',
        fontWeight: 'bold',
    },
    titleContainer: {
        backgroundColor: '#ffffff',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        borderRadius: 25,
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'rgba(0, 120, 255, .65)',
        marginTop: -5,
    },
    listTitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        color: 'rgba(0, 120, 255, .83)',
        fontSize: 18,
        marginTop: '10%',
    },
    list: {
        marginTop: 20,
        marginBottom: 20,
    },
    item: {
        textAlign: 'left',
        fontSize: 11,
        color: 'white',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    itemBox: {
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        backgroundColor: '#0040',
        elevation: 2,
        flexDirection: 'row',
    },
    button: {
        marginBottom: 10,
        marginTop: 0,
        borderRadius: 20,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    weather: {
        marginBottom: 10,
        marginTop: 10,
        width: '100%',
        marginLeft: 5,
        marginRight: 0,
    },
    empty: {
        textAlign: 'left',
        fontSize: 15,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'rgba(0, 120, 255, .43)',
        padding: 7,
        borderRadius:5,
    },
    footer: {
        marginTop: '42%',
        backgroundColor: 'rgba(0, 120, 255, .75)',
    },
    footerText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    complements: {
        marginLeft: '5%',
        height: 30,
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '15%', 
    },
});

export default Home;
