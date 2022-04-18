import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Image } from 'react-native';
import { auth } from '../../../firebase';
import Button from '../../Components/Buttons';
import Input from '../../Components/Inputs';
//@ts-ignore
import Logo from '../../Images/LogoText.png';


const LoginScreen = () => {
  //Code here

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {

      }
    })
    return unsubscribe;
  }, [])


  const onCreatePress = () => {
    navigation.navigate(`SignUp` as never, {} as never)
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('logged in with ', user?.email);
      })
      .catch(error => alert(error.message))
  }

  //Html here
  return (

    <KeyboardAvoidingView style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputContainer}>

        <Input
          placeholder="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={null}
        />

        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text='Login'
          onPress={handleLogin}
          containerType=''
          textType=''
        />
        <Button
          text='Create Account'
          onPress={onCreatePress}
          containerType=''
          textType=''
        />
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  inputContainer: {
    width: '80%',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  logo: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 10
  }
})

export default LoginScreen;