import { auth } from '../../firebase';
import React, { useEffect, useState } from 'react';
import BottomTabs from './BottomTabs';
import Navigation from './Navigation';
import { View, StatusBar } from 'react-native';

const AuthNavigation = () => {



    const [currUser, setCurrUser] = useState(null);
    const userHandler = (user: any) => {
        user ? setCurrUser(user) : setCurrUser(null)
    }


    useEffect(() => {
        auth.onAuthStateChanged(user => {
            userHandler(user);
        });
    })

    return <>{currUser ? <BottomTabs /> : <View><StatusBar hidden /><Navigation /></View>}</>
};

export default AuthNavigation;