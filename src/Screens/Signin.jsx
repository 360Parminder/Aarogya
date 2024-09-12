import React, { useEffect, useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, useColorScheme } from 'react-native';

// import { getFCMToken } from '../utils/fcmUtils';
import LoadingWave from '../Components/LoadingWave';
import WifiLoader from '../Components/WifiLoader';
import LoaderLine from '../Components/LoaderLine';

const SignIn = () => {
  // const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [fcmToken, setFCMToken] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [loader, setLoader] = useState(false);

  const colorScheme = useColorScheme();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  console.log(API_BASE_URL);
  
  useEffect(() => {
    // getFCMToken().then((token) => {
    //   setFCMToken(token);
    //   console.log("form sign",token);
      
    // });
  }, []);

  const handleSignIn = async () => {
    setLoader(true);
   
  };

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    loader ? (
      <LoaderLine />
    ): (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/meditation.png')}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome Back to Swasthya</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor={colorScheme === 'dark' ? "#ffffff" : "#000000"}
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colorScheme === 'dark' ? "#ffffff" : "#000000"}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.notRegistered}>
          <Text style={[styles.buttonText, styles.notRegisteredText]}>Not registered yet!</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E2EE',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5D4FB3',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#5D4FB3',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notRegistered: {
    marginTop: 10,
  },
  notRegisteredText: {
    color: '#03045e',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#BB86FC',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#1E1E1E',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#BB86FC',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notRegistered: {
    marginTop: 10,
  },
  notRegisteredText: {
    color: '#0077b6',
  },
});

export default SignIn;
