import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";
import Button from "../../Components/Buttons";

const HowToAddPrescription = () => {
  //Code here
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.navigate(`Help` as never, {} as never);
  };

  //Html here
  return (
    <View>
      <Text style={{alignSelf:'center', fontSize:30}}>How to add prescription</Text>
      <Text style={{}}>Step 1: Open the "Calendar" tab in the app.</Text>
      <Text style={{}}>Step 2: Hit the bottom button that says "Prescription Add".</Text>
      <Text style={{}}>Step 3: Fill the the required information. (Name, Number of pills, and frequency)</Text>
      <Text style={{}}>Step 4: Hit the "Add Prescription" button and it will be saved to your profile.</Text>

      <Text style={{marginTop:10}}>You can then view this in the calendars tab.</Text>
      <View style={{marginTop:375}}>
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

export default HowToAddPrescription;
