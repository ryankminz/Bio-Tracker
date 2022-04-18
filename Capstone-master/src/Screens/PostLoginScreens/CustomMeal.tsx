import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Button from "../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";
import Input from "../../Components/Inputs";
import SQLite from "react-native-sqlite-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const db = SQLite.openDatabase(
  { name: "LocalBioTrackerDB" },
  () => {},
  (err) => {
    console.log(err);
  }
);

const CustomMeal = () => {
  //Code here

  const navigation = useNavigation();
  //Food variables
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [totalFat, setFat] = useState("");
  const [sodium, setSodium] = useState("");

  //Drink Variables
  const [drinkName, setDrinkName] = useState("");
  const [drinkCalories, setDrinkCalories] = useState("");
  const [sugar, setSugar] = useState("");
  const [drinkSodium, setDrinkSodium] = useState("");

  //add food to DB
  const addFood = () => {
    db.executeSql(
      "INSERT INTO FoodType (FoodName, Calories, Information) VALUES (?,?,?)",
      [
        foodName,
        calories,
        " Total Fat: " + totalFat + "\n" + " Total Sodium:" + sodium,
      ]
    );
    console.log(
      foodName,
      calories,
      "Total Fat:" + totalFat + " " + "Total Sodium:" + sodium
    );
    navigation.navigate("AddScreen" as never);
  };
  //add drink to DB
  const addDrink = () => {
    db.executeSql(
      "INSERT INTO BeverageType (BeverageName, Calories, Information) VALUES (?,?,?)",
      [
        drinkName,
        drinkCalories,
        " Sugar: " + sugar + "\n" + " Total Sodium: " + drinkSodium,
      ]
    );
    console.log(
      drinkName,
      drinkCalories,
      "Sugar:" + sugar + "" + "Total Sodium:" + drinkSodium
    );
    navigation.navigate("AddScreen" as never);
  };

  //Html here
  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView>
        <StatusBar hidden />

        <SafeAreaView style={{ width: "100%" }}>
          <View>
            <Input
              placeholder="Enter Food Name"
              value={foodName}
              setValue={setFoodName}
              secureTextEntry={null}
              containerType=''
            />
            <Input
              placeholder="Enter Calories"
              value={calories}
              setValue={setCalories}
              secureTextEntry={null}
              containerType=''
            />
            <Input
              placeholder="Total Fat"
              value={totalFat}
              setValue={setFat}
              secureTextEntry={null}
              containerType=''
            />
            <Input
              placeholder="Sodium"
              value={sodium}
              setValue={setSodium}
              secureTextEntry={null}
              containerType=''
            />
          </View>
        </SafeAreaView>
        <View style={styles.buttonContainer}>
          <Button
            text="Add Meal"
            onPress={addFood}
            containerType="Meal"
            textType=""
          />
        </View>

        <SafeAreaView style={{ width: "100%" }}>
          <View>
            <Input
              placeholder="Enter Drink Name"
              value={drinkName}
              setValue={setDrinkName}
              secureTextEntry={null}
              containerType=''
            />
            <Input
              placeholder="Enter Calories"
              value={drinkCalories}
              setValue={setDrinkCalories}
              secureTextEntry={null}
              containerType=''
            />
            <Input
              placeholder="Sugar"
              value={sugar}
              setValue={setSugar}
              secureTextEntry={null}
              containerType=''
            />
            <Input
              placeholder="Sodium"
              value={drinkSodium}
              setValue={setDrinkSodium}
              secureTextEntry={null}
              containerType=''
            />
          </View>
        </SafeAreaView>

        <View style={styles.buttonContainer}>
          <Button
            text="Add Beverage"
            onPress={addDrink}
            containerType="Meal"
            textType=""
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
});

export default CustomMeal;
