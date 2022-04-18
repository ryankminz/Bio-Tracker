//@ts-nocheck
import React, { useEffect, useState } from 'react';
import Button from '../../Components/Buttons';
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'LocalBioTrackerDB' }, () => { }, err => { console.log(err) });

const Profile = () => {
    //Code here
    const navigation = useNavigation();

    var [accItems, setAccItems] = useState({});
    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM AccountInfo WHERE AccInfoID = 1', [], (tx, results) => {
                    setAccItems(results.rows.item(0));
                })
        })
    }, [accItems]);

    const logOut = () => {
        auth
            .signOut()
            .then(() => {
            })
    }
    const handleDetails = () => {
        navigation.navigate('Details' as never);
    }
    const handleHelp = () => {
        navigation.navigate('Help' as never);
    }


    //Html here
    return (
        <View style={styles.root}>
            <StatusBar hidden />
            <View>
                <View style={styles.txtField}>
                    <Text style={styles.txt}>First Name</Text>
                    <Text style={styles.accItems}>{accItems.FirstName}{'\n'}</Text>

                    <Text style={styles.txt}>Last Name</Text>
                    <Text style={styles.accItems}>{accItems.LastName}{'\n'}</Text>

                    <Text style={styles.txt}>Weight</Text>
                    <Text style={styles.accItems}>{accItems.Weight}{'\n'}</Text>

                    <Text style={styles.txt}>Height</Text>
                    <Text style={styles.accItems}>{accItems.Height}{'\n'}</Text>
                </View>
            </View>

            <Button text="Edit Profile Details" onPress={handleDetails} containerType='' textType='' />
            <Button text="Help" onPress={handleHelp} containerType='' textType='' />

            <Button text='Log Out' onPress={logOut} containerType='Cancel' textType='White' />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },
    txtField: {
        marginTop: '10%',
        alignItems: 'center'
    },
    txt: {
        fontSize: 18,
    },
    accItems: {
        fontSize: 18
    }
})

export default Profile;