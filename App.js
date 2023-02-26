import { StatusBar } from 'expo-status-bar';
import { React, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './frontend/login';

export default function App() {

  const [message, setMessage] = useState('starting');
  const [lyrics, setLyrics] = useState('dummyLyric');

  
  useEffect(() => {
    fetch(`http://172.20.10.2:5002/hello`) // change this
      .then(res => res.text()) // gets the response object in this case in the form of text (could be json)
      .then(data => setMessage(data)) // here you could .property
      .catch(err=>{console.log(err)})
  }, [])

  useEffect(() => {
    fetch(`http://172.20.10.2:5002/lyrics/2`) // change this
      .then(res => res.json()) // gets the response object in this case in the form of text (could be json)
      .then(data => setLyrics(data[0])) // here you could .property
      .catch(err=>{console.log(err)})
  }, [])

  return (
    <View style={styles.container}>
      <LoginPage></LoginPage>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
