import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const LoginRegisterPage = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image source={require('./public/TRA-logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Tennessee Resettlement Aid</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginButtonText}>Go to Login!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerButtonText}>Go to Register!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    margin: 16,
    // fontFamily: 'monospace',
    // https://stackoverflow.com/questions/53329578/react-native-expo-fontfamily-simplelineicons-is-not-a-system-font-and-has-n
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 16,
  },
  loginButton: {
    borderColor: 'rgb(12, 13, 67)',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    width: 300,
    alignItems: 'center',
    marginVertical: 12, 
  },
  registerButton: {
    backgroundColor: 'rgb(12, 13, 67)',
    borderWidth: 1, 
    borderColor: 'rgb(12, 13, 67)',
    borderRadius: 12,
    padding: 12,
    width: 300,
    alignItems: 'center',
    marginVertical: 12, 
  },
  loginButtonText: {
    color: '#0c0d43',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginRegisterPage;
