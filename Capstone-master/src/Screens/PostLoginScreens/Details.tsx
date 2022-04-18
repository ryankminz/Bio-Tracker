import React, { useState } from 'react';
import Input from '../../Components/Inputs';
import Button from '../../Components/Buttons';
import SQLite from 'react-native-sqlite-storage';
import { useNavigation } from '@react-navigation/core';
import { StatusBar, View } from 'react-native';

const db = SQLite.openDatabase({ name: 'LocalBioTrackerDB' }, () => { }, err => { console.log(err) });

const Details = () => {
    //Code here
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const setProfileInfo = () => {
        try {

            db.transaction((tx) => {
                tx.executeSql(
                    'UPDATE AccountInfo SET FirstName=?, LastName=?, Height=?, Weight=? WHERE AccInfoID=?', [firstName, lastName, height, weight, 1]);
            })
            navigation.navigate('ProfileHome' as never, {} as never);
        }
        catch (err) {
            console.log(err);
        }
    };

    const cancelPress = () => {
        navigation.navigate('ProfileHome' as never, {} as never);
    }

    //Html here
    return (
        <View>
            <StatusBar hidden />
            <Input
                placeholder='First Name'
                value={firstName}
                setValue={setFirstName}
                secureTextEntry={null}
                containerType=''
            />
            <Input
                placeholder='Last Name'
                value={lastName}
                setValue={setLastName}
                secureTextEntry={null}
                containerType=''
            />
            <Input
                placeholder='Height'
                value={height}
                setValue={setHeight}
                secureTextEntry={null}
                containerType=''
            />
            <Input
                placeholder='Weight'
                value={weight}
                setValue={setWeight}
                secureTextEntry={null}
                containerType=''
            />
            <Button
                text='Save'
                onPress={setProfileInfo}
                containerType='Save'
                textType='White'
            />
            <Button
                text='Cancel'
                onPress={cancelPress}
                containerType='Cancel'
                textType='White'
            />
        </View>
    );
};


export default Details;