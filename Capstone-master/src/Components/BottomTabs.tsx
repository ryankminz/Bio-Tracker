import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AddScreenNavigate, CalendarScreenNavigate, ProfileScreenNavigate, HomeScreenNavigate } from './LoginNavigate';
import { NavigationContainer } from '@react-navigation/native';

const BottomTabs = () => {



  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          
        }}
      >

        <Tab.Screen
          name="Home"
          component={HomeScreenNavigate}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#182398'} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPage"
          component={AddScreenNavigate}
          options={{
            tabBarLabel: 'Add Meal',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-apple" color={'#BB1125'} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreenNavigate}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={'#0E882A'} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreenNavigate}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-box" color={'#ABA533'} size={size} />
            ),
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default BottomTabs;