import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const RegisterPage = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <View style={styles.screen}>
      <View style={styles.fieldContainer}>
        <Image source={require('./public/TRA-logo.png')} style={styles.logo}/>
        <Text style={styles.title}>Tennessee Resettlement Aid</Text>
        <View style={styles.nameView}>
          <TextInput
            style={styles.nameInput}
            placeholder="First name"
            onChangeText={setFirstName}
            value={firstName}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Last name"
            onChangeText={setLastName}
            value={lastName}
            autoCapitalize="none"
          />
        </View>
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
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <View style={styles.loginView}>
          <Text>Already have an account?</Text>
          <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>Log in</Text>
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
  nameView: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  nameInput: {
    borderRadius: 4,
    padding: 4,
    width: '50%',
    fontSize: 16,
    shadowRadius: 40,
    borderBottomWidth: 1,
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
    backgroundColor: 'rgb(22, 73, 176)',
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
  loginView: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'rgb(22, 73, 176)',
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegisterPage;
