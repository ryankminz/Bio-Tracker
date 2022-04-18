import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from '../Screens/PostLoginScreens/Calendar';
import AddScreen from '../Screens/PostLoginScreens/AddScreen';
import CustomMeal from '../Screens/PostLoginScreens/CustomMeal';
import WorkoutAdd from '../Screens/PostLoginScreens/AddWorkout';
import AddPrescription from '../Screens/PostLoginScreens/AddPrescription';
import ProfileScreen from '../Screens/PostLoginScreens/ProfileScreen';
import Details from '../Screens/PostLoginScreens/Details';
import HomeScreen from '../Screens/PostLoginScreens/HomeScreen';
import HelpScreen from '../Screens/PostLoginScreens/HelpScreen';
import { StatusBar } from 'react-native';
import ReportIssue from '../Screens/PostLoginScreens/ReportIssue';
import HowToAddConsumable from '../Screens/PostLoginScreens/HowToAddConsumable';
import HowToAddPrescription from '../Screens/PostLoginScreens/HowToAddPrescription';

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Stack3 = createNativeStackNavigator();
const Stack4 = createNativeStackNavigator();

const AddScreenNavigate = () => {
    return (
        <Stack.Navigator >

            <Stack.Screen options={{ headerShown: false }}
                name='AddScreen'
                component={AddScreen} />
            <Stack.Screen options={{ headerShown: false }}
                name='CustomMeal'
                component={CustomMeal} />
        </Stack.Navigator>
    );
}
export { AddScreenNavigate };

const CalendarScreenNavigate = () => {
    return (
        <Stack2.Navigator>
            <Stack.Screen options={{ headerShown: false }}
                name='CalendarScreen'
                component={Calendar} />
            <Stack.Screen options={{ headerShown: false }}
                name='WorkoutAdd'
                component={WorkoutAdd} />
            <Stack.Screen options={{ headerShown: false }}
                name='AddPrescription'
                component={AddPrescription} />
        </Stack2.Navigator>
    );
}
export { CalendarScreenNavigate };

const ProfileScreenNavigate = () => {
    return (
        <Stack3.Navigator >
            <Stack.Screen options={{ headerShown: false }}
                name='ProfileHome'
                component={ProfileScreen} />
            <Stack.Screen options={{ headerShown: false }}
                name='Details'
                component={Details} />
            <Stack.Screen options={{ headerShown: false }}
                name='Help'
                component={HelpScreen} />
                <Stack.Screen options={{ headerShown: false }}
                name='Report'
                component={ReportIssue} />
                <Stack.Screen options={{ headerShown: false }}
                name='HowToAddConsumable'
                component={HowToAddConsumable} />
                <Stack.Screen options={{ headerShown: false }}
                name='HowToAddPrescription'
                component={HowToAddPrescription} />
                
        </Stack3.Navigator>
    );
}
export { ProfileScreenNavigate };

const HomeScreenNavigate = () => {
    return (
        <Stack4.Navigator >
            <Stack.Screen options={{ headerShown: false }}
                name='HomeScreen'
                component={HomeScreen} />
        </Stack4.Navigator>
    );
}

export { HomeScreenNavigate };
