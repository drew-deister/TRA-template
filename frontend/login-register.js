import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const LoginRegisterPage = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tennessee Resettlement Aid</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Go to Login!</Text>
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
  button: {
    backgroundColor: 'rgb(22, 73, 176)',
    borderRadius: 6,
    padding: 12,
    width: 300,
    alignItems: 'center',
    marginVertical: 12, 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginRegisterPage;
