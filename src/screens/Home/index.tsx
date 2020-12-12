import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import HandleNavigation from '../../services/HandleNavigation';
import Main from './Home';

const Home = ({ route: { params } }) => {
  const [verified, setVerified] = useState(false);
  const [refresh, refreshing] = useState(false);
  const [items, setItems] = useState([]);
  let init;

  const verify = async () => {
    try {
      init = await AsyncStorage.getItem('@data');
      if (init != null) {
        init = JSON.parse(init);
        setItems(init);
        refreshing(true);
      } else {
        init = [];
      }
    } catch (e) {
      alert(e);
    }
  };

  const checkSetItems = () => {
    if (params !== undefined && items[0] !== undefined) {
      if ((params.newLocal != items[items.length - 1]) && params.newLocal.change === '1') {
        const data = items;
        data.unshift(params.newLocal);
        setItems(data);
        saveData(data);
      } else if (params.newLocal.change === '2') {
        const data = items;
        data[params.newLocal.loc].title = params.newLocal.name;
        setItems(data);
        saveData(data);
        refreshing(true);
      }
    } else if (params !== undefined) {
      const data = [params.newLocal];
      setItems(data);
      saveData(data);
    }
  };

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem('@data', JSON.stringify(data));
    } catch (e) {
      alert(e);
    }
  };

  const cutOut = (item) => {
    let data = items;
    if (data.length === 1) {
      data = [];
    } else {
      data.splice(data.indexOf(item), 1);
    }
    setItems(data);
    saveData(data);
    refreshing(true);
  };

  const areYouSure = (item) => {
    Alert.alert('Are You Sure?',
      'This action will exclude the place.',
      [
        { text: "yes, i'm sure", onPress: () => cutOut(item) },
        { text: 'ops, my mistake', onPress: () => HandleNavigation.navigate('Home') },
      ], { cancelable: true });
  };

  useEffect(() => {
    refreshing(false);
  }, [refresh]);

  useEffect(() => {
    checkSetItems();
  }, [params]);

  useEffect(() => {
    verify();
    setVerified(true);
  }, []);

  return <Main areYouSure={areYouSure} isRefreshing={refresh} items={items} />;
};

export default Home;
