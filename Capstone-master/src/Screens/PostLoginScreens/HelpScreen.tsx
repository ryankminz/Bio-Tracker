import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StatusBar, Modal } from "react-native";
import Button from "../../Components/Buttons";

const HelpScreen = () => {
  //Code here
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.navigate(`ProfileHome` as never, {} as never);
  };
  const onReport = () => {
    navigation.navigate(`Report` as never, {} as never);
  };
  const onAddConsumable = () => {
    navigation.navigate(`HowToAddConsumable` as never, {} as never);
  };
  const onAddPrescription = () => {
    navigation.navigate(`HowToAddPrescription` as never, {} as never);
  };
  //Html here
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <Text style={{ fontSize: 60, marginLeft: 10, alignSelf: "center" }}>
        Help screen
      </Text>
      <StatusBar hidden />
      <Button
        text="How to add food/Drink item"
        onPress={onAddConsumable}
        containerType="Help"
        textType=""
      />
      <Button
        text="How to add a prescription"
        onPress={onAddPrescription}
        containerType="Help"
        textType=""
      />
      <Button
        text="Report an issue"
        onPress={onReport}
        containerType="Help"
        textType=""
      />

      <View style={{ marginRight: 100, marginTop: 250, marginLeft: 5 }}>
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

export default HelpScreen;
