import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const RegisterPage = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');


  const handleRegister = () => {
    // Handle register logic here
    // need to check that passwords match
  };

  return (
    <ScrollView style={styles.scrollContainer}>
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
          placeholder="Address"
          onChangeText={setAddress}
          value={address}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          onChangeText={setConfirmedPassword}
          value={confirmedPassword}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
        <View style={styles.loginView}>
          <Text>Already have an account?</Text>
          <Text style={styles.loginText} onPress={() => navigation.navigate("Login")}>Log in</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    alignSelf: 'center', // scrollView is weird, you can't use alignItems or justifyContent
    backgroundColor: '#fff',
  },
  fieldContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 16,
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
    marginTop: 12,
    marginBottom: 24,
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
