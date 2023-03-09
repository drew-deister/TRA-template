import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.screen}>
      <View style={styles.fieldContainer}>
        <Image source={require('./public/TRA-logo.png')} style={styles.logo}/>
        <Text style={styles.title}>Tennessee Resettlement Aid</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"gray"}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={"gray"}
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
          <Text style={styles.signupText} onPress={() => navigation.navigate("Register")}>Sign Up</Text>
        </View>
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  fieldContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 16,
  },
  title: {
    fontSize: 22,
    marginVertical: 16,
  },
  input: {
    borderRadius: 4,
    padding: 4,
    marginVertical: 16,
    width: '100%',
    fontSize: 16,
    shadowRadius: 40,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'rgb(12, 13, 67)',
    borderRadius: 6,
    padding: 12,
    width: 300,
    alignItems: 'center',
    marginVertical: 16, 
  },
  divider: {
    width: 150,
    marginVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(220, 220, 220)'
  },
  signupView: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  signupText: {
    fontWeight: 'bold',
    color: '#0c0d43',
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginPage;
