import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./public/TRA_logo.png')} style={styles.logo}/> */}
      <Text style={styles.title}>Tennessee Resettlement Aid</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.divider}/>
      <View style={styles.signupView}>
        <Text>Don't have account yet?</Text>
        <Text style={styles.signup} onPress={() => Linking.openURL('http://google.com')}>Sign Up</Text>
      </View>
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
    // flex: 1,
    margin: 16,
  },
  input: {
    borderRadius: 4,
    padding: 4,
    marginBottom: 16,
    width: 300,
    height: 55,
    fontSize: 16,
    shadowRadius: 40,
    // backgroundColor: 'rgb(220, 220, 220)',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'rgb(22, 73, 176)',
    borderRadius: 6,
    padding: 12,
    width: 300,
    alignItems: 'center',
    marginVertical: 12, 
  },
  divider: {
    width: 150,
    marginVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(220, 220, 220)'
  },
  signupView: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  signup: {
    fontWeight: 'bold',
    color: 'rgb(22, 73, 176)',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginPage;
