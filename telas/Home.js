import {Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const Home = ({ navigation, route }) => {
    //hook de estado
    const [items, setItems] = useState([]);
    const [refresh, refreshing] = useState(false);

    //verifica se o estado de refresh mudou (virando verdadeiro), se sim, o torna falso novamente
    /*Necessário para atualizar a lista após editar algum nome*/
    useEffect(() => {
        refreshing(false);
    }, [refresh]);

    //verifica mudanças na variável route
    useEffect(() => {
        checkSetItems();
    }, [route]);

    //função que verifica se deve ou não atualizar o estado do componente
    const checkSetItems = () => {
        if(route.params !== undefined && items[0] !== undefined){
            if((route.params.newLocal != items[items.length - 1]) && route.params.newLocal.change === '1'){
                let la = items;
                la.push(route.params.newLocal);
                setItems(la);

            }else if(route.params.newLocal.change === '2'){
                let la = items;
                la[route.params.newLocal.loc].title = route.params.newLocal.name;
                setItems(la);
                refreshing(true);
            }

        }else if(route.params !== undefined){
            setItems([route.params.newLocal]);
        }
    }

    //função responsável por retirar um elemento da lista
    const cutOut = (item) => {
        let la = items;
        if(la.length === 1){
            la = [];

        }else{
            la.splice(la.indexOf(item), 1);
        }
        setItems(la);
        refreshing(true);
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
                    })
                }}
                theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
                style={styles.complements} />

                {/*botão para excluir o elemento*/}
                <Button 
                icon='close-circle'
                mode="contained" 
                onPress={() => {cutOut(item)}}
                theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
                style={styles.complements} />

            </View>   
        );
    }

    //componente mostrado quando a lista está vazia
    const empty = () => {
        return(
            <View>
                <Text style={styles.empty}>add the first place</Text>
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
            
            {/*Lista de lugares favoritados*/}
            <View style={{height: 250}}>
                <FlatList 
                refreshing={refresh}
                onRefresh={() => {}}
                ListEmptyComponent={empty}
                data={items}
                renderItem={renderItem}
                style={styles.list}
                keyExtractor={item => item.key} />
            </View>
        
            <Button 
            mode="contained" 
            onPress={() => {navigation.navigate('Search', {elements: items})}}
            theme={{ colors:{primary: 'rgba(0, 120, 255, .65)'} }}
            style={styles.button} >
                <Text style={{color: 'white'}}>Search Place</Text>
            </Button>

            <View style={styles.ground}>
                <Text style={styles.groundText}>by TrackingTrade{'\n'}2020</Text>
            </View>
            
        </View>
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
        marginTop: 10,
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
        fontSize: 20,
        color: 'rgba(0, 120, 255, .83)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontWeight: 'bold',
    },

    ground: {
        marginTop: '42%',
        backgroundColor: 'rgba(0, 120, 255, .75)',
    },
    
    groundText: {
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
        
    }
});

export default Home;
