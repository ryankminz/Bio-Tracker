import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import Button from '../../Components/Buttons';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../Components/Inputs';
import { auth } from '../../../firebase';
import SQLite from 'react-native-sqlite-storage';
//@ts-ignore
import Logo from '../../Images/LogoText.png';


const db = SQLite.openDatabase({ name: 'LocalBioTrackerDB' }, () => { }, err => { console.log(err) });



const SignUpScreen = () => {
  //Code here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        createAccInfo();
      }
    })
    return unsubscribe;
  }, [])

  const createAccInfo = () => {
    db.executeSql("CREATE TABLE IF NOT EXISTS AccountInfo(AccInfoID INTEGER PRIMARY KEY AUTOINCREMENT, FirstName TEXT, LastName TEXT, Height TEXT, Weight TEXT);")
  }

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        db.executeSql("INSERT INTO AccountInfo (FirstName, LastName, Height, Weight) VALUES (?,?,?,?)",
          [firstName, lastName, height, weight])
        console.log('Created in with ', user?.email);
      })
      .catch(error => alert(error.message))
  }

  const onLoginPress = () => {
    navigation.navigate(`Login` as never, {} as never);
  }
  //Html here
  return (
    <KeyboardAvoidingView style={styles.root}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter First Name"
          value={firstName}
          setValue={setFirstName}
          secureTextEntry={null}
          containerType=""
        />
        <Input
          placeholder="Enter Last Name"
          value={lastName}
          setValue={setLastName}
          secureTextEntry={null}
          containerType=""
        />
        <Input
          placeholder="Enter Weight"
          value={weight}
          setValue={setWeight}
          secureTextEntry={null}
          containerType=""
        />
        <Input
          placeholder="Enter Height"
          value={height}
          setValue={setHeight}
          secureTextEntry={null}
          containerType=""
        />
        <Input
          placeholder='Enter Email'
          value={email}
          setValue={setEmail}
          secureTextEntry={null} 
          containerType=""/>
        <Input
          placeholder='Enter Password'
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          containerType="" />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Register" onPress={handleSignup} containerType="" textType='' />
        <Button text="Already have an account? Login!" onPress={onLoginPress} containerType="" textType='' />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop:-80

  },
  inputContainer: {
    width: '80%',
    marginTop:-70
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

export default SignUpScreen;