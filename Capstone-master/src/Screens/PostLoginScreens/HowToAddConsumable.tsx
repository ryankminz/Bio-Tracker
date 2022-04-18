import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';
import Button from "../../Components/Buttons";

const HowToAddConsumable = () => {
    //Code here
    const navigation = useNavigation();
    const onBackPress = () => {
        navigation.navigate(`Help` as never, {} as never);
      };

    //Html here
    return (
        <View>
        <Text style={{alignSelf:'center', fontSize:30}}>How to add Consumable</Text>
        <Text style={{}}>Step 1: Open the "Add Meal" in the app.</Text>
        <Text style={{}}>Step 2: Hit the top button that says "Custom Meal".</Text>
        <Text style={{}}>Step 3: Choose between adding a food or drink item and enter the required information</Text>
        <Text style={{}}>Step 4: Hit the "Add" button that correlates with your selected entry.</Text>
  
        <Text style={{marginTop:10}}>You can then view this on your Home screen and in the "Add Meal" tab.</Text>
        <View style={{marginTop:360}}>
        <Button
          text="Back"
          onPress={onBackPress}
          containerType="Back"
          textType="White"
        />
        </View>
      </View>
        
    );
};


export default HowToAddConsumable;