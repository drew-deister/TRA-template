import { StatusBar } from 'expo-status-bar';
import { React, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginRegisterPage from './frontend/login-register';
import LoginPage from './frontend/login';
import RegisterPage from './frontend/register';


export default function App() {

  const [message, setMessage] = useState('starting');
  const [lyrics, setLyrics] = useState('dummyLyric');

  const Stack = createNativeStackNavigator();

  
  // useEffect(() => {
  //   fetch(`http://192.168.10.112:5002/hello`) // change this
  //     .then(res => res.text()) // gets the response object in this case in the form of text (could be json)
  //     .then(data => setMessage(data)) // here you could .property
  //     .catch(err=>{console.log(err)})
  // }, [])

  // useEffect(() => {
  //   fetch(`http://192.168.10.112:5002/lyrics/2`) // change this
  //     .then(res => res.json()) // gets the response object in this case in the form of text (could be json)
  //     .then(data => setLyrics(data[0])) // here you could .property
  //     .catch(err=>{console.log(err)})
  // }, [])

  return (
    <Stack.Navigator initialRouteName="LoginRegister">
      <Stack.Screen name="LoginRegister" component={LoginRegisterPage}/>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="Register" component={RegisterPage}/>
    </Stack.Navigator>
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
