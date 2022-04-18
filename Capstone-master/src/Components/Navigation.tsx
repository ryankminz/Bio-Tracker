import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/PreLoginScreens/LoginScreen';
import SignUpScreen from '../Screens/PreLoginScreens/SignUpScreen';
import { ImageBackground } from 'react-native';
//@ts-ignore
import Background from '../Images/Background.png'

const Stack = createNativeStackNavigator();


const Navigation = () => {
    //Code here
    const Theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent'
        },
    };
    //Html here
    return (
        <NavigationContainer theme={Theme}>
            <ImageBackground source={Background} style={{ width: '100%', height: '100%' }}>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </ImageBackground>
        </NavigationContainer >
    );
};


export default Navigation;